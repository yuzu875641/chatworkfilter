const reqcheck = require('../middleware/sign');

const emoji = require('../module/emoji');
const mention = require('../module/mention');
const zalgo = require('../module/zalgo');

async function getchat(req, res) {
  if (await reqcheck(req) !== "ok") {
    return res.sendStatus(400);
  }
  
  console.log(req.body);
  const body = req.body.webhook_event.body;
  const accountId = req.body.webhook_event.account_id;
  const roomId = req.body.webhook_event.room_id;
  
  if (accountId === 9912086) {
    return res.sendStatus(200);
  }
  
  if(await emoji(body, roomId, accountId) === "ok"){
    return res.sendStatus(200);
  }
  if(await mention(body, roomId, accountId) === "ok"){
    return res.sendStatus(200);
  }
  if(await zalgo(body, roomId, accountId) === "ok"){
    return res.sendStatus(200);
  }

  res.sendStatus(200);
}

module.exports = getchat;