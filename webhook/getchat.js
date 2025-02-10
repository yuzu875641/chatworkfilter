const reqcheck = require('../middleware/sign');

async function getchat(req, res) {
  await reqcheck(req, res);
  
  console.log(req.body);
  const body = req.body.webhook_event.body;
  const message = req.body.webhook_event.body;
  const accountId = req.body.webhook_event.account_id;
  const roomId = req.body.webhook_event.room_id;
  const messageId = req.body.webhook_event.message_id;
  
  if (accountId === 9912086) {
    return res.sendStatus(200);
  }

  res.sendStatus(200);
}

module.exports = getchat;