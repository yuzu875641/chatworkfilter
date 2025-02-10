const atob = require('atob');

const tokens = [
    atob(process.env.webhookToken1)
];

async function trustSignature(req) {
    const signature = req.header('x-chatworkwebhooksignature');
    if (!signature) {
        return "f";
    }
    const decodedSignature = atob(signature);
    if (!tokens.includes(decodedSignature)) {
        return "ok";
    }
  return "f";
};

module.exports = trustSignature;