const block = require('../ctr/filter');

const zzalgo = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/;

async function zalgo(body, roomId, accountId) {
  const zalgoCount = (body.match(zzalgo) || []).length;
  if (zalgoCount >= 1) {
    console.log(zalgoCount);
    await block.blockMember(roomId, accountId);
    return "ok";
  }
  return;
};

module.exports = zalgo;