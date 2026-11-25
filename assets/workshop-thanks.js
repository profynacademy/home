/* A receipt is created only after the booking service confirms a saved registration. */
(() => {
  const sessions = {
    'money-moves-2026-12-28': {title:'Money Moves for the New Year',date:'December 28, 2026',time:'6:00 to 8:00 PM ET',host:'Caden Owens'},
    'credit-careers-2027-02-21': {title:'Credit, Careers & Your Next Move',date:'February 21, 2027',time:'6:00 to 8:00 PM ET',host:'Rajesh Patel'}
  };
  let receipt;
  try { receipt = JSON.parse(sessionStorage.getItem('profyn-workshop-receipt')); } catch (error) {}
  const session = receipt && sessions[receipt.id];
  if (!session || !Number.isFinite(receipt.at) || receipt.at > Date.now() || Date.now() - receipt.at > 86400000) return;
  document.querySelector('#thanksTitle').textContent = receipt.alreadyRegistered ? 'You already have a seat.' : 'Thanks for signing up.';
  document.querySelector('#thanksMessage').textContent = 'Your workshop registration has been saved.';
  document.querySelector('#thanksSession').textContent = session.title;
  document.querySelector('#thanksDate').textContent = session.date + ' · ' + session.time;
  document.querySelector('#thanksHost').textContent = 'Led by ' + session.host;
  document.querySelector('#thanksDetails').hidden = false;
})();
