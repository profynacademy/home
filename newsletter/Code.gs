// Deploy as a public web app from profingenz@gmail.com, executing as the owner.
// Run setupNewsletter() once. Add the deployed /exec URL to NEWSLETTER_ENDPOINT.
// Subscriber data belongs in the private spreadsheet, never in this repository.
const PROFYN_SENDER = 'profingenz@gmail.com';
const PROFYN_ORIGIN = 'https://profyn.org';
const ISSUE_ROOT = 'https://raw.githubusercontent.com/profynacademy/home/main/newsletter/issues/';

function assertNewsletterOwner() {
  if (Session.getEffectiveUser().getEmail().toLowerCase() !== PROFYN_SENDER) {
    throw new Error('This service must run from the Profyn sender account.');
  }
}

function newsletterSheet() {
  const id = PropertiesService.getScriptProperties().getProperty('SUBSCRIBER_SHEET');
  if (!id) throw new Error('Run setupNewsletter before accepting subscribers.');
  return SpreadsheetApp.openById(id).getSheets()[0];
}

function setupNewsletter() {
  assertNewsletterOwner();
  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty('SUBSCRIBER_SHEET')) {
    const spreadsheet = SpreadsheetApp.create('Profyn newsletter subscribers');
    const sheet = spreadsheet.getSheets()[0];
    sheet.getRange('A:H').setNumberFormat('@');
    sheet.appendRow(['Email', 'Requested at', 'Status', 'Token', 'Welcome sent', 'Last issue sent', 'Confirmed at', 'Last delivery error']);
    sheet.setFrozenRows(1);
    properties.setProperty('SUBSCRIBER_SHEET', spreadsheet.getId());
  }
  if (!ScriptApp.getProjectTriggers().some(trigger => trigger.getHandlerFunction() === 'processNewsletterQueue')) {
    ScriptApp.newTrigger('processNewsletterQueue').timeBased().everyHours(1).create();
  }
}

function actionUrl(action, token) {
  return ScriptApp.getService().getUrl() + '?action=' + action + '&token=' + encodeURIComponent(token);
}

function welcomeMessage(token) {
  const confirm = actionUrl('confirm', token);
  const unsubscribe = actionUrl('unsubscribe', token);
  return {
    subject: "You're in 💚 One quick step to join Profyn",
    text: "Hey!\n\nThanks for signing up for Profyn's monthly newsletter. Confirm your email here to start receiving it:\n" + confirm +
      "\n\nOnce a month: one useful money idea, a quick thing to try, and the latest from Profyn. Think five-minute money check-in. Small steps count.\n\nSee you in your inbox,\nThe Profyn team\nhttps://profyn.org\n\nIf this wasn't you, ignore this email. We won't send monthly issues unless you confirm.\nCancel this request: " + unsubscribe,
    html: '<p>Hey!</p><p>Thanks for signing up for <strong>Profyn’s monthly newsletter</strong>.</p><p><a href="' + confirm +
      '">Confirm your email to start receiving it</a></p><p>Once a month: one useful money idea, a quick thing to try, and the latest from Profyn. Think five-minute money check-in. Small steps count.</p><p>See you in your inbox,<br>The Profyn team<br><a href="https://profyn.org">profyn.org</a></p><p>If this wasn’t you, ignore this email. We won’t send monthly issues unless you confirm.</p><p><a href="' + unsubscribe + '">Cancel this request</a></p>'
  };
}

function sendNewsletterMessage(email, message) {
  assertNewsletterOwner();
  MailApp.sendEmail({
    to: email,
    subject: message.subject,
    body: message.text,
    htmlBody: message.html,
    name: 'Profyn',
    replyTo: PROFYN_SENDER
  });
}

function subscriptionReceipt(nonce, ok, message) {
  const payload = JSON.stringify({type:'profyn-newsletter', nonce:nonce, ok:ok, message:message}).replace(/</g, '\\u003c');
  const target = JSON.stringify(PROFYN_ORIGIN);
  return HtmlService.createHtmlOutput('<!doctype html><meta charset="utf-8"><p>Your request has been processed. You can return to Profyn.</p><script>window.top.postMessage(' + payload + ',' + target + ');</script>')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(event) {
  const parameters = (event && event.parameter) || {};
  if (parameters.action === 'unsubscribe' || parameters.action === 'confirm') {
    return finishSubscriberAction(parameters.action, parameters.token);
  }
  const nonce = String(parameters.nonce || '').slice(0, 100);
  if (parameters.origin !== PROFYN_ORIGIN || parameters.consent !== 'yes') {
    return subscriptionReceipt(nonce, false, 'Please subscribe through the Profyn website.');
  }
  if (parameters.website) return subscriptionReceipt(nonce, true, 'Check your inbox to confirm your subscription.');
  const email = String(parameters.email || '').trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || /^[=+@-]/.test(email)) {
    return subscriptionReceipt(nonce, false, 'Please enter a valid email address.');
  }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return subscriptionReceipt(nonce, false, 'Please try again in a moment.');
  try {
    assertNewsletterOwner();
    const sheet = newsletterSheet();
    const rows = sheet.getDataRange().getValues();
    let rowIndex = rows.findIndex((row, index) => index > 0 && String(row[0]).toLowerCase() === email);
    if (rowIndex >= 0 && (rows[rowIndex][2] === 'active' || rows[rowIndex][2] === 'pending')) {
      return subscriptionReceipt(nonce, true, 'Thanks! If you’re new, check your inbox to confirm. If you already confirmed, you’re on the list.');
    }
    const token = Utilities.getUuid() + Utilities.getUuid();
    const values = [email, new Date().toISOString(), 'pending', token, '', rowIndex >= 0 ? rows[rowIndex][5] : '', '', ''];
    if (rowIndex < 0) {
      sheet.appendRow(values);
      rowIndex = sheet.getLastRow() - 1;
    } else {
      sheet.getRange(rowIndex + 1, 1, 1, values.length).setValues([values]);
    }
    let welcomed = false;
    if (MailApp.getRemainingDailyQuota() > 0) {
      try {
        sendNewsletterMessage(email, welcomeMessage(token));
        sheet.getRange(rowIndex + 1, 5).setValue(new Date().toISOString());
        welcomed = true;
      } catch (error) {
        sheet.getRange(rowIndex + 1, 8).setValue('Welcome email could not be sent; retry queued.');
      }
    }
    return subscriptionReceipt(nonce, true, welcomed ? 'Thanks! Check your inbox to confirm your monthly newsletter subscription.' : 'Thanks! Your confirmation email is queued. Monthly issues start after you confirm.');
  } catch (error) {
    console.error('Newsletter signup failed: ' + error.message);
    return subscriptionReceipt(nonce, false, 'We could not finish your request. Please try again.');
  } finally {
    lock.releaseLock();
  }
}

function validToken(token) {
  return /^[a-f0-9-]{72}$/i.test(String(token || ''));
}

function doGet(event) {
  const parameters = (event && event.parameter) || {};
  const token = String(parameters.token || '');
  const action = parameters.action;
  if (!validToken(token) || (action !== 'confirm' && action !== 'unsubscribe')) {
    return HtmlService.createHtmlOutput('<p>This newsletter link is invalid.</p>');
  }
  // GET only shows confirmation, so email link scanners cannot change a subscription.
  const label = action === 'confirm' ? 'Confirm monthly newsletter subscription' : 'Unsubscribe from Profyn';
  return HtmlService.createHtmlOutput('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><h1>' + label + '?</h1><form method="post" action="' + ScriptApp.getService().getUrl() + '"><input type="hidden" name="action" value="' + action + '"><input type="hidden" name="token" value="' + token + '"><button type="submit">' + label + '</button></form>');
}

function finishSubscriberAction(action, token) {
  assertNewsletterOwner();
  if (!validToken(token)) return HtmlService.createHtmlOutput('<p>This newsletter link is invalid.</p>');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = newsletterSheet();
    const rows = sheet.getDataRange().getValues();
    const index = rows.findIndex((row, i) => i > 0 && row[3] === token);
    if (index < 1) return HtmlService.createHtmlOutput('<p>This newsletter link is no longer valid.</p>');
    if (action === 'unsubscribe') {
      sheet.getRange(index + 1, 3).setValue('unsubscribed');
      return HtmlService.createHtmlOutput('<h1>You’re unsubscribed.</h1><p>You can subscribe again at <a href="https://profyn.org/listen/">Profyn</a> whenever you like.</p>');
    }
    if (rows[index][2] === 'unsubscribed') {
      return HtmlService.createHtmlOutput('<p>Please sign up again at <a href="https://profyn.org/listen/">Profyn</a> to receive the newsletter.</p>');
    }
    sheet.getRange(index + 1, 3).setValue('active');
    sheet.getRange(index + 1, 7).setValue(new Date().toISOString());
    return HtmlService.createHtmlOutput('<h1>You’re subscribed!</h1><p>Your monthly Profyn newsletter will arrive here. <a href="https://profyn.org">Back to Profyn</a></p>');
  } finally {
    lock.releaseLock();
  }
}

function processNewsletterQueue() {
  assertNewsletterOwner();
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    const sheet = newsletterSheet();
    const rows = sheet.getDataRange().getValues();
    let remaining = MailApp.getRemainingDailyQuota();
    for (let index = 1; index < rows.length && remaining > 0; index++) {
      const row = rows[index];
      if (row[2] !== 'pending' || row[4]) continue;
      remaining--;
      try {
        sendNewsletterMessage(row[0], welcomeMessage(row[3]));
        sheet.getRange(index + 1, 5).setValue(new Date().toISOString());
        sheet.getRange(index + 1, 8).setValue('');
      } catch (error) {
        sheet.getRange(index + 1, 8).setValue('Welcome delivery failed; retry queued.');
      }
    }
    // Keep daily capacity for welcome emails; monthly issues are sent in batches.
    let budget = Math.min(80, Math.max(0, remaining - 20));
    if (!budget) return;
    const edition = Utilities.formatDate(new Date(), 'America/Chicago', 'yyyy-MM');
    const response = UrlFetchApp.fetch(ISSUE_ROOT + edition + '.json', {muteHttpExceptions:true});
    if (response.getResponseCode() !== 200) return;
    const issue = JSON.parse(response.getContentText());
    if (issue.id !== edition || typeof issue.subject !== 'string' || !issue.subject.trim() || typeof issue.text !== 'string' || typeof issue.html !== 'string') {
      throw new Error('The monthly issue is incomplete.');
    }
    for (let index = 1; index < rows.length && budget > 0; index++) {
      const row = rows[index];
      if (row[2] !== 'active' || !row[6] || row[5] === edition) continue;
      budget--;
      const unsubscribe = actionUrl('unsubscribe', row[3]);
      try {
        sendNewsletterMessage(row[0], {
          subject:issue.subject,
          text:issue.text + '\n\nUnsubscribe: ' + unsubscribe,
          html:issue.html + '<p><a href="' + unsubscribe + '">Unsubscribe</a></p>'
        });
        sheet.getRange(index + 1, 6).setValue(edition);
        sheet.getRange(index + 1, 8).setValue('');
      } catch (error) {
        sheet.getRange(index + 1, 8).setValue('Monthly issue delivery failed; retry queued.');
      }
    }
  } finally {
    lock.releaseLock();
  }
}
