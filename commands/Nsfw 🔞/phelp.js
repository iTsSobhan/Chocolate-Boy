const Discord = require('discord.js');

module.exports = {
    name: 'phelp',
    aliases: ['ph'],
    category: 'Nsfw 🔞',
    utilisation: '{prefix}phelp',
    description: 'shows command of "Nsfw 🔞 | Porn" category.',

  async execute(client, message, args) { 
var prefix = await require("quick.db").fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;

function commandsData(commands) {
  const content = commands.map(i => '`' + prefix + i.name + '`').join(' , ')
  return '' + content + '';
}
  const phelpEmbed = new Discord.MessageEmbed()
     .setTitle("Nsfw 🔞 | Porn \n Commands:")
     .setTimestamp()
     .setDescription(`**Baraie Estefade Kardan Az Command Ha Matn Zir Ra Negah Konid.\n \n${commandsData(client.commands.filter(c => c.category === 'Nsfw 🔞 | Porn'))}**`)
     .setColor(client.colors.none)
     .setFooter({ text: `Nsfw Help || more info ${prefix}help || Made by Mr.SIN RE#1528 |`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
     client.commands.filter(c => c.category === 'Nsfw 🔞 | Porn').forEach((cmd) => {
      phelpEmbed.addFields({
        name: `**${prefix}${cmd.name}**`,
        value: `**Description: \`${cmd.description}\` | Aliases:** \`(${cmd.aliases ? `${cmd.aliases}` : ""})\``,
        inline: true
      });
    });


      if (message.channel.nsfw === true) {
   message.channel.send({embeds:[phelpEmbed]});
  }else {
    message.channel.send(":x: shotor faghat mitoni toie channel haie nsfw az command estefade koni :/") 
  }

}
}