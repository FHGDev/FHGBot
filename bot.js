const { Client, RichEmbed, Collection } = require('discord.js');
const bot = new Client();
const prefix = "fhg!"


bot.commands = new Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log('Loading commands...')
  if (err) return console.error("Command loading failed!")
  files.filter(f => f.split(".").pop() == "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})

bot.on('ready', () => {
  console.log("FHGBot ready!")
  bot.user.setActivity(`for fhg!help | ${bot.guilds.size} servers`, {type: "WATCHING"})
})

bot.on('message', message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const log = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(log)
  const em = new RichEmbed()
  if (cmd) {
    cmd.run(bot, message, args, em)
    console.log(`${message.author.username} used the ${log} command.`)
    // SOON => baselogger(bot, `${message.author.username} used the ${log} command.`, bot.user.avatarURL)
  }
})

bot.login(process.env.token)
