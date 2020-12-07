module.exports = {
    name: 'play',
    description: 'Jouer une musique à la demande.',
    async execute(msg, args) {
        if (!msg.guild) return;
        if (msg.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await msg.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0], { filter: 'audioonly' }), { volume: 0.5 });

            dispatcher.on('start', () => {
                ytdl.getBasicInfo(args[0]).then(info => {
                    msg.channel.send(`Lecture en cours: **${info.videoDetails.title}**`);
                    msg.client.user.setActivity(info.videoDetails.title, { type: 'LISTENING' });
                });
            })
            dispatcher.on('error', () => {
                msg.reply('J\'arrive pas à lire la vidéo désolé :slight_frown:');
            })
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                msg.member.voice.channel.leave();
                msg.client.user.setActivity('!play <url>', { type: 'PLAYING' });
            })
        } else {
            msg.reply('Rejoins d\'abord un channel vocal!');
        }
    }
}