module.exports.run = (bot, message, args) => {
 const em = new (require('discord.js').RichEmbed)()
  .setTitle("FHGBot Help")
  .setDescription("List of commands")
  .addField("Help Commands", "help", true)
  .addField("Bot Commands", "ping", true)
  .addField("Emergency Commands", "alert", true)
  .setTimestamp()
  .setColor("RANDOM")
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
