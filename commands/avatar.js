module.exports = {
    name: 'avatar',
    description: 'Afficher l\'avatar d\'un utilisateur.',
    execute(msg) {
        if (!msg.mentions.users.size) return msg.channel.send(`Votre avatar est: ${msg.author.displayAvatarURL({ format: 'png' })}`);

        const avatars = msg.mentions.users.map(user => {
            return `L'avatar de ${user.username} est: ${user.displayAvatarURL({ format: 'png' })}`;
        })
        msg.channel.send(avatars);
    }
}