async function mentionWebhook(req, res) {
    const accountId = req.body.webhook_event.from_account_id;
    const roomId = req.body.webhook_event.room_id;
    const messageId = req.body.webhook_event.message_id;
    const body = req.body.webhook_event.body;  

    try {


        res.sendStatus(200);
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.sendStatus(500);
    }
}

module.exports = mentionWebhook;