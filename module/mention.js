const block = require('../ctr/filter');

async function to(body, roomId, accountId) {
  if ((body.match(/all/g) || []).length >= 10) {
    await block.blockMember(roomId, accountId);
    return "ok";
  }
  if ((body.match(/To:/g) || []).length >= 35) {
      await block.blockMember(roomId, accountId);
     return "ok";
  }
  return;
};

module.exports = to;