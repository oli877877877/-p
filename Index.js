const Discord = require("discord.js");

const TOKEN = "NDExNTgxMDA1NTA2MjgxNDgz.DV9yNw.qdRMOS7f_Ka_0xJsFJouIcF_KPE";
const PREFIX = "*";

var eightBall = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "utlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Ready");
    bot.user.setGame("*help")
});

bot.on("message", function(message) {

    if (message.channel.id === "409483362626043906") {
        if (isNaN(message.content)) {
            message.delete()
            var embed = new Discord.RichEmbed()
            .setColor(0xff33cc)
            .setTitle("Please only use numbers ing that chat!")
            message.author.sendEmbed(embed);
        } else;
    }

    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "ping":
        message.channel.sendMessage(":ping_pong: Pong! :heartpulse:")
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms"); 
        break;

        case "setstatus[i]":
        if(message.member.roles.some(r=>["Dev", "Owner", "Moderators", "Bot Dev"].includes(r.name)) ) {
            bot.user.setStatus("idle");
            var embed = new Discord.RichEmbed()
            .setColor(0xff33cc)
            .setTitle("Funtime Foxy's Status Has Been Set To Idle! :thumbsup:")
            message.channel.sendEmbed(embed);
          } else {
              var embed = new Discord.RichEmbed()
              .setColor(0xff33cc)
              .setTitle("You need one of these ranks to do that: Owner, Dev ,Moderators or Bot Devs")
              message.author.sendEmbed(embed);
          }
        break;

        case "about":
        var embed = new Discord.RichEmbed()
        .setColor(0xff33cc)
        .addField("This Bot is owned by xXMr_NightmareXx And the code is also by xXMr_NightmareXx!")
        .setThumbnail("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/2/28/FNAFSL_Funtime_Foxy_Model.png/revision/latest?cb=20161008000811")
            message.channel.sendEmbed(embed);
            break;
        case "ask":
            if (args[1]) message.channel.sendMessage(eightBall[Math.floor(Math.random() * eightBall.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "me": //code1 - code10
            var embed = new Discord.RichEmbed()
            .setColor(0xff33cc)
                .setAuthor(message.author.username + "#" + message.author.discriminator + "'s Information")
                .addField("User ID:", message.author.id)
                .addField("User created at:", message.author.createdAt)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;

            case "pokedex1":
            var embed = new Discord.RichEmbed()
            .setColor(0xff33cc)
            .setTitle("**Bulbasaur!**")
            .addField("**Types**", "Grass, Poison")
            .addField("**Evolutionary Line**", "**Bulbasaur** > Ivysaur > Venasaur")
            .addField("**Base Stats**", "Hp: **45**, Atk: **49**, Def: **49**, Spa: **65**, Spd: **65**, Spe: **45**")
            .addField("**Height**", "0.7m")
            .addField("**Weight**", "6.9kg")
            .addField("**Egg Groups**", "Monster, Grass")
            .addField("**Pokedex Entry**", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.")
            .setThumbnail("https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png")
            .setFooter("**#1**")
            message.channel.sendEmbed(embed);
            break;

        case "help":
            var embed = new Discord.RichEmbed()
            .setColor(0xff33cc)
            .setTitle("Commands:")
            .addField("***me**", "Sends info about your account!")
            .addField("***ask** [Question]", "Sends you how likely that question will happen like 8Ball!")
            .addField("***about**", "Sends you Info about the bot")
            .addField("***pokedex1**", "Tells you the pokedex info of selected number")
            .addField("***setstatus[i]**", "Needed rank: (Owner, Bot Dev, Dev or Moderators). Sets Funtime Foxy's Status To Idle. ")
            message.channel.sendEmbed(embed);
            break;
    }
});

bot.login(TOKEN);