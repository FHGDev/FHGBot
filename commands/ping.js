module.exports.run = (bot, message, args, em) => {
  const ping = Math.floor(bot.ping)
  em
  .setTitle("FHGBot Ping")
  .setDescription(`PONG! My ping is ${ping}ms.`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping"
}
