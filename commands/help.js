module.exports.run = (bot, message, args, em) => {
  em
  .setTitle("FHGBot Help")
  .setDescription("List of commands")
  .addField("Help Commands", "help", true)
  .addField("Bot Commands", "ping", true)
  .setTimestamp()
  .setColor("RANDOM")
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
