var discord = require("discord.js")

module.exports.run = (bot, message, args) => {
  let msg = args.join(' ');
  let em = new discord.RichEmbed()
  .setTitle("FHGBot Alert")
  .setDescription("Contacting FHGDev...")
  .setTimestamp()
  .setColor("RED")

  message.channel.send({embed: em})

  let owner = bot.users.find(u => u.id == process.env.ownerID)

  if (!msg) {
    em
    .setTitle("Alert!")
    .setDescription(`${message.author.username} needs help in ${message.channel.name}!`)
    .setFooter("No message provided.")
    .setTimestamp()
    .setColor("RANDOM")
    owner.send({embed: em})
  } else {
    em
    .setTitle("Alert!")
    .setDescription(`${message.author.username} needs help in #${message.channel.name}!`)
    .setTimestamp()
    .setColor("RANDOM")   
    owner.send({embed: em})
  }
}

module.exports.help = {
  name: "alert"
}
