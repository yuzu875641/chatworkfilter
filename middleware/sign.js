const atob = require('atob');

const tokens = [
    atob(process.env.webhookToken1)
];

async function trustSignature(req, res) {
    const signature = req.header('x-chatworkwebhooksignature');
    console.log(tokens)
  console.log(signature)
    if (!signature) {
        return res.status(400).send('署名なし');
    }
    const decodedSignature = signature;
    if (!tokens.includes(decodedSignature)) {
        return res.status(401).send('署名が一致しません');
    }
};

module.exports = trustSignature;