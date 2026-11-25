# Profyn monthly newsletter

Prepared on November 25, 2026. The public signup form stays disabled until the sender service is deployed and its URL is configured. No subscriber addresses are stored in this repository.

## Activate the sender

1. Sign in to Google as **profingenz@gmail.com**. This code intentionally refuses to send from any other account.
2. Create an Apps Script project at https://script.google.com/ and paste `Code.gs`. Enable the manifest file in project settings and use `appsscript.json`.
3. Run `setupNewsletter()` and grant the requested spreadsheet, email, external request and trigger permissions. It creates a **private** subscriber spreadsheet and an hourly delivery trigger. Keep that spreadsheet private.
4. Deploy as a Web app, executing as **Me (profingenz@gmail.com)**, accessible to **Anyone**. Copy the deployed URL ending in `/exec`.
5. Put that URL into `NEWSLETTER_ENDPOINT` in `assets/app.js`, update the script cache version in every HTML template, and publish.
6. Test on https://profyn.org/listen/ with an address you control: request a subscription, receive the thank-you email, confirm it, receive a test issue, unsubscribe, and confirm that subsequent queue runs exclude it. Run `processNewsletterQueue()` manually for the delivery check only after checking the issue content.
7. Updating Apps Script source requires deploying a new version of the web app. The source in GitHub does not deploy the Apps Script service by itself.

## What it does

- The website only confirms a request after the server has saved it.
- The thank-you email asks the recipient to confirm their email before monthly issues start.
- Confirmation and unsubscribe links show a confirmation page first, avoiding changes triggered by link scanners.
- Email addresses are deduplicated without case sensitivity. An active/pending address is not mailed repeatedly by duplicate form submissions.
- Pending confirmations and monthly issues are retried in hourly batches. Monthly delivery is tracked by edition ID for each subscriber.
- The public service returns no subscriber list. Private registrations are not repurposed as newsletter opt-ins.
- A hidden form field filters simple bots. Double opt-in and daily quotas limit unwanted monthly sends. For a large campaign, a dedicated mailing provider will offer stronger abuse protection, bounce handling and delivery reporting.
- Delivery errors are recorded without exposing addresses in public logs. A send followed by a spreadsheet write failure can result in a retry; this is not an exactly-once mail service.

## Monthly issues

Publish one UTF-8 JSON file at `newsletter/issues/YYYY-MM.json` with `id`, `subject`, `text` and `html`. The ID must match the filename's month. The December 2026 edition is prepared.

The hourly trigger fetches the current month's issue from GitHub and sends it only to confirmed active subscribers who have not received that edition. An unsubscribe link is added per recipient. A Codex automation named **Profyn monthly newsletter** is scheduled for the first of each month at 9 AM America/Chicago to prepare and publish each issue. Delivery still requires the sender service to be activated.

For each issue, check current site announcements, use clear informal language with light slang, and verify any financial claims against primary sources. Do not invent attendance, episode listens, subscribers, offers or guarantees.

## Capacity and existing subscribers

Google currently documents a **100-recipient daily Apps Script email quota for consumer Gmail accounts**, and 1,500 for Google Workspace. This implementation reserves daily space for welcomes and sends issues in batches of up to 80 per run, limited by the remaining quota. A 700-person list therefore takes several days on consumer Gmail, with new welcome emails potentially extending that window.

Source: https://developers.google.com/apps-script/guides/services/quotas

The website's “700+ subscribers” label is the owner's supplied figure; it does not create 700 email addresses or prove delivery. Import an existing list only with recorded newsletter consent. Do not import workshop attendees merely because they registered for a workshop. No existing list has been supplied or imported.

## Current activation status

- Frontend, service source, welcome copy and December issue: prepared.
- Profyn sender authorization and service deployment: pending.
- Live form endpoint: not configured; signup is visibly unavailable.
- End-to-end delivery from the Profyn account: not yet tested.

## Checks

Run `node newsletter/verify.mjs` for the mocked service checks. They cover saved requests, confirmation, unsubscribe, duplicate suppression, sender isolation, queue retries and recipient failures. These checks do not replace the real sender and browser acceptance test above.
