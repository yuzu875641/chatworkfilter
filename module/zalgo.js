const block = require('../ctr/filter');

const zzalgo = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/;

async function zalgo(body, roomId, accountId) {
  let zalgoCount = 0;

  for (let char of body) {
    if (zzalgo.test(char)) {
      zalgoCount++;
    }
  }
  console.log("zalgo", zalgoCount)
  if (zalgoCount >= 500) {
    await block.blockMember(roomId, accountId);
    return "ok";
  }
  
  return;
};

module.exports = zalgo;