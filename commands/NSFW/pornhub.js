const
	Discord = require('discord.js'),
    { Command } = require('discord.js-commando');
    Pornsearch = require('pornsearch');
    
module.exports = class PornHub extends Command {
    constructor(client) {
        super(client, {
            name: 'ph',
            group: 'nsfw',
            memberName: 'ph',
            description: 'Randomize a tag, and show a video from PornHub',
        });
    }

    async run(message) {
        if (message.channel.guild.channels.find(channel => channel.name === 'nsfw').id) return message.channel.send('Coquin, faut mettre ça dans <#564769699825451039>')
        const sections = ["Japanese", "Asian", "Hentai", "Gay", "Lesbian", "Ugly", "BBW Hairy", "Fat",
            "Black", "Shemale", "Animals", "POV", "German", "Urination", "Foot",
            "Mia Khalifa", "Funny", "Fist", "Anal", "Toilet", "Family", "Sister",
            "Mom", "Dad", "Brother", "Bukkake", "SM", "Fetish", "Pregnant", "Cheating",
            "Amateur", "Redhead", "Hard", "Actress", "Granny", "Ass to Mouth", "Transgender",
            "Squirt", "Bisexual Male", "Cuckold", "College", "Pissing", "Cosplay", "Brazilian",
            "Funny", "Scissoring", "Celebrity", "Furry", "Horse", "Childish", "Handicap", "Midget",
            "Children", "Puke", "Shitting", "Drugs", "Trap", "Blood", "Strikes", "Egg",
            "Pokemon", "Painal", "Vomit", "Alien", "BBW", "Hairy", "Homeless", "Duck",
            "Dog", "Strap On", "Postop", "Period", "Arawine", "Creampie", "Prolapsus",
            "Jacquie et Michel", "Post-Op", "Post Op", "Muscular", "Steroids", "Ahegao", "Lolicon",
            "Shotacon", "Otoko No Ko", "Boku No Pico", "Yiff", "Rim Job", "RJ", "Juliette", "Bollywood",
            "Muslim", "Christian", "Jew", "Buddhist", "Atheist", "Bondage", "Shibari", "Pansexual", "Student"
        ]

        const selected = sections[Math.floor(Math.random() * sections.length)];
        const Searcher = new Pornsearch(selected);
        Searcher.videos().then(videos => {
            const randomize = Math.floor(Math.random() * videos.length);
            message.channel.send(`${message.author.username} randomized video with tag ${selected} :smirk::\n${videos[randomize].url}`)
        })
    }
}
