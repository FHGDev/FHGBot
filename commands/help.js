module.exports.run = (bot, message, args, em) => {
  em
  .setTitle("FHGBot Help")
  .setDescription("List of commands")
  .addField("Help Commands", "help")
  .addField("Bot Commands", "ping")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
