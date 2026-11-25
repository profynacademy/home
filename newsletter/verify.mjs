import { readFileSync } from 'node:fs';

function verifyNewsletter(source) {

const state={owner:"profingenz@gmail.com",rows:[],properties:{},triggers:[],sent:[],quota:100,month:"2026-12"};
const assert=(ok,message)=>{if(!ok)throw Error(message);};
const sheet={
 getRange(row,col){return {setNumberFormat(){return this;},setValue(value){while(state.rows.length<row)state.rows.push([]);state.rows[row-1][col-1]=value;},setValues(values){values.forEach((values,r)=>{while(state.rows.length<row+r)state.rows.push([]);values.forEach((v,c)=>state.rows[row+r-1][col+c-1]=v);});}};},
 appendRow(row){state.rows.push([...row]);},setFrozenRows(){},getDataRange(){return {getValues:()=>state.rows.map(row=>[...row])};},getLastRow(){return state.rows.length;}
};
const html={XFrameOptionsMode:{ALLOWALL:"allow"},createHtmlOutput(content){return {html:content,setXFrameOptionsMode(){return this;}};}};
let uuid=0;
const mocks={
 Session:{getEffectiveUser:()=>({getEmail:()=>state.owner})},
 PropertiesService:{getScriptProperties:()=>({getProperty:key=>state.properties[key],setProperty(key,value){state.properties[key]=value;}})},
 SpreadsheetApp:{create:()=>({getSheets:()=>[sheet],getId:()=>"private-test-sheet"}),openById:()=>({getSheets:()=>[sheet]})},
 ScriptApp:{getProjectTriggers:()=>state.triggers,newTrigger:name=>({timeBased(){return this;},everyHours(){return this;},create(){state.triggers.push({getHandlerFunction:()=>name});}}),getService:()=>({getUrl:()=>"https://script.google.com/macros/s/test/exec"})},
 MailApp:{getRemainingDailyQuota:()=>state.quota,sendEmail(message){if(message.to==="bad@example.com")throw Error("Simulated failure");if(state.quota<1)throw Error("No quota");state.quota--;state.sent.push(message);}},
 HtmlService:html,LockService:{getScriptLock:()=>({tryLock:()=>true,waitLock(){},releaseLock(){}})},
 Utilities:{getUuid:()=>("00000000-0000-4000-8000-"+String(++uuid).padStart(12,"0")),formatDate:()=>state.month},
 UrlFetchApp:{fetch:()=>({getResponseCode:()=>200,getContentText:()=>JSON.stringify({id:state.month,subject:"Test edition",text:"Text",html:"<p>Text</p>"})})},
 console:{warn(){},error(){}}
};
const service=new Function(...Object.keys(mocks),source+";return {setupNewsletter,doPost,doGet,processNewsletterQueue,assertNewsletterOwner};")(...Object.values(mocks));
const signup=email=>service.doPost({parameter:{email,origin:"https://profyn.org",consent:"yes",nonce:"nonce-1"}});
service.setupNewsletter();service.setupNewsletter();
assert(state.rows.length===1&&state.triggers.length===1,"Setup idempotence");
signup("Person@Example.com");assert(state.rows[1][2]==="pending"&&state.sent.length===1,"Save pending/send welcome");
signup("person@example.com");assert(state.sent.length===1,"Duplicate welcome");
assert(signup("bad").html.includes('"ok":false'),"Invalid email rejection");
assert(service.doPost({parameter:{email:"x@example.com",origin:"https://elsewhere.test",consent:"yes"}}).html.includes('"ok":false'),"Origin rejection");
const token=state.rows[1][3];service.doGet({parameter:{action:"confirm",token}});assert(state.rows[1][2]==="pending","Scanner cannot confirm");
service.doPost({parameter:{action:"confirm",token}});assert(state.rows[1][2]==="active"&&state.rows[1][6],"Confirmation");
service.processNewsletterQueue();service.processNewsletterQueue();assert(state.sent.length===2&&state.rows[1][5]==="2026-12","One edition per subscriber");
assert(state.sent[1].body.includes("Unsubscribe:"),"Unsubscribe footer");
service.doGet({parameter:{action:"unsubscribe",token}});assert(state.rows[1][2]==="active","Scanner cannot unsubscribe");
service.doPost({parameter:{action:"unsubscribe",token}});state.month="2027-01";service.processNewsletterQueue();assert(state.rows[1][2]==="unsubscribed"&&state.sent.length===2,"Respect unsubscribe");
state.quota=0;signup("queued@example.com");assert(!state.rows[2][4],"Queue when quota exhausted");
state.quota=2;service.processNewsletterQueue();assert(state.rows[2][4]&&state.sent.length===3,"Welcome retry");
state.quota=0;signup("bad@example.com");signup("next@example.com");state.quota=3;service.processNewsletterQueue();assert(state.rows[3][7]&&state.rows[4][4],"Failed recipient does not block others");
state.owner="other@gmail.com";let rejected=false;try{service.assertNewsletterOwner();}catch{rejected=true;}assert(rejected,"Sender isolation");
return {passed:true,cases:15,actualEmailsSent:0};

}

console.log(verifyNewsletter(readFileSync(new URL('./Code.gs', import.meta.url), 'utf8')));
