module.exports = {
    name: 'ahelp',
    aliases: ['ansfw', 'an', 'ah'],
    category: 'Nsfw 🔞',
    description: 'shows command of "Nsfw 🔞 | Anime" category.',
    utilisation: '{prefix}ahelp',
  async execute(client, message, args) { 
const Discord = require("discord.js")

var prefix = await require("quick.db").fetch(`prefix_${message.guild.id}`) || process.env.PREFIX;

 let commands = message.client.commands;
function commandsData(commands) {
  const content = commands.map(i => '`' + prefix + i.name + '`').join(' , ')
  return '' + content + '';
}
        const ahelpEmbed = new Discord.MessageEmbed()
            .setColor(client.colors.none)
            .setDescription(`**Baraie Estefade Kardan Az Command Ha Matn Zir Ra Negah Konid.\n  \n${commandsData(client.commands.filter(c => c.category === 'Nsfw 🔞 | Anime'))}**`)
     .setTitle("Nsfw 🔞 | Anime \n Commands:")
            .setTimestamp()
            .setFooter({ text: `Nsfw Help || more info ${prefix}help || Made by Mr.SIN RE#1528 |`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
     commands.filter(c => c.category === 'Nsfw 🔞 | Anime').forEach((cmd) => {
      ahelpEmbed.addFields(		
        {
         name: `**${prefix}${cmd.name}**`, 
         value: `**Description: \`${cmd.description}\` | Aliases:** \`(${cmd.aliases ? `${cmd.aliases}` : ""})\``, 
         inline: true 
        },
      );
    });
  if (message.channel.nsfw === true) {
        message.channel.send({embeds:[ahelpEmbed]})
    } else {
        message.channel.send(":x: shotor faghat mitoni toie channel haie nsfw az command estefade koni :/") 
  }


}

}