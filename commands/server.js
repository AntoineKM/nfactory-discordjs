module.exports = {
    name: 'server',
    description: 'Avoir des informations sur le serveur actuel.',
    execute(msg) {
        msg.channel.send(`Nom du serveur: ${msg.guild.name}\nNombre d'utilisateurs: ${msg.guild.memberCount}`);
    }
}