module.exports = {
  help: {
    name: "verify"
  }, 
  run: (bot, message, args) => {
    const v = message.guild.roles.find(r => r.name == "Verified")
    const m = message.guild.roles.find(r => r.name == "Members")
    const ch = message.guild.channels.find(c => c.id == "535894520932466697")
    const em = new (require('discord.js').RichEmbed)()
    .addField("FHGBot Verify", "You are now verified!")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter(`${message.member.displayName} just verified.`)
    if (!message.member.roles.find(r => r = v) && !message.member.roles.find(r => r = m)) {
      message.member.addRoles([v.id, m.id])
      message.channel.send({embed: em}).then(m => {
        m.delete(1000)
        message.delete(1000)
      })
      
      ch.send(`${message.member.displayName} just verified.`)
    } else {
      message.channel.send("You are already verified!")
    }
  }
}
