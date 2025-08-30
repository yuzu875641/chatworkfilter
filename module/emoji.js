const block = require('../ctr/filter');

const m = [
  ":", "(", ":D", "8-)", ":o", ";)", ";(", "(sweat)", ":|", ":*", ":p", 
  "(blush)", ":^)", "|-)", "(inlove)", "]:)", "(talk)", "(yawn)", 
  "(puke)", "(emo)", "8-|", ":#)", "(nod)", "(shake)", "(^^;)", "(whew)", 
  "(clap)", "(bow)", "(roger)", "(flex)", "(dance)", "(:/)", "(gogo)", 
  "(think)", "(please)", "(quick)", "(anger)", "(devil)", "(lightbulb)", 
  "(*)", "(h)", "(F)", "(cracker)", "(eat)", "(^)", "(coffee)", "(beer)", 
  "(handshake)", "(y)"
];

async function emoji(body, roomId, accountId) {
    let count = 0;
    const bodyChars = [...body];

    bodyChars.forEach(char => {
        if (m.includes(char)) {
            count++;
        }
    });

    if (count >= 15) {
        block.blockMember(roomId, accountId);
        return "ok";
    } else {
        return;
    }
}

module.exports = emoji;
