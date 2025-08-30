const block = require('../ctr/filter');

async function to(body, roomId, accountId) {
  if ((body.match(/toall/g) || []).length >= 1) {
    await block.blockMember(roomId, accountId);
    return "ok";
  }
  if ((body.match(/To:/g) || []).length >= 15) {
     await block.blockMember(roomId, accountId);
     return "ok";
  }
  return;
};

module.exports = to;
