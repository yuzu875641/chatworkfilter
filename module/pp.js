const block = require('../ctr/filter');

const m = [
  "picon",
  "hr",
  "preview"
];

async function pp(body, roomId, accountId) {
    let count = 0;
    const bodyChars = [...body];

    bodyChars.forEach(char => {
        if (m.includes(char)) {
            count++;
        }
    });

    if (count >= 45) {
        block.blockMember(roomId, accountId);
        return "ok";
    } else {
        return;
    }
}

module.exports = pp;