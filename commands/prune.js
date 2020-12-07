module.exports = {
    name: 'prune',
    description: 'Supprimer des messages.',
    execute(msg, args) {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) return msg.reply('Nombre invalide.');
        else if (amount < 1 || amount > 100) return msg.reply('Saisissez un nombre compris entre 1 et 100');
        msg.channel.bulkDelete(amount).then(messages => msg.reply(`${messages.size} messages supprimés.`));
    }
}