module.exports = {
    name: 'ping',
    description: 'Commande de test.',
    execute(msg) {
        msg.reply('Pong!');
    }
}