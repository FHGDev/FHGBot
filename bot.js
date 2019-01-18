const { Client, RichEmbed, Collection } = require('discord.js');
const bot = new Client();
const prefix = "f."
const cleverbot = new (require('cleverbot.io'))(process.env.cleverbot_user, process.env.cleverbot_password)
cleverbot.setNick("FHGBot");

bot.commands = new Collection()
bot.mentioned;

require('fs').readdir("./commands/", (err, files) => {
  console.log('Loading commands...')
  if (err) return console.error("Command loading failed!")
  files.filter(f => f.split(".").pop() == "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})

bot.on('ready', () => {
  console.log("FHGBot ready!")
  bot.user.setActivity(`Loading FHGBot...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  
  setTimeout(() => {
    bot.user.setActivity(`for f.help | ${bot.guilds.size} servers`, { type: "WATCHING" })
  }, 10000)
})

bot.on('guildMemberAdd', member => {
  member.guild.channels.find(c => c.name == "verify").send(`Welcome to ${member.guild.name}, <@${member.user.id}>! Please run \`f.verify\` to get started!`)
})

bot.on('message', message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.id == "514198281556066307" || message.content !== "f.verify") {
    message.author.send("Please do not send messages in #verify that are not `f.verify`.")
    message.delete(500)
  }
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const log = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(log)
  
  if (cmd) {
    cmd.run(bot, message, args)
    console.log(`${message.author.username} used the ${log} command.`)
    // SOON => baselogger(bot, `${message.author.username} used the ${log} command.`, bot.user.avatarURL)
  }
})

bot.login(process.env.token)
