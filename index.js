const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    console.log(command);

    switch (command) {
        case 'ping':
            msg.reply('Pong!');
            break;
        case 'server':
            msg.channel.send(`Nom du serveur: ${msg.guild.name}\nNombre d'utilisateurs: ${msg.guild.memberCount}`);
            break;
        case 'avatar':
            return msg.channel.send(`Votre avatar est: ${msg.author.displayAvatarURL({ format: 'png' })}`);
            break;
    }
});

client.login(token);