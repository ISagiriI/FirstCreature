const express = require('express');
const app = express();
const port = 3000;


app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents, MessageActionRow, MessageButton, GuildMemberRoleManager } = require('discord.js');
let client; {
  client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_VOICE_STATES",
      "GUILD_PRESENCES",
      "GUILD_MESSAGES",
      "DIRECT_MESSAGES",
    ],
     allowedMentions: ['repliedUser'],
  })
}

client.on('messageCreate', msg =>
{
///////////Команда 1//////////
  if (msg.content.toLowerCase() == 'аоа' ) 
  {
    msg.channel.send('Аоа?')
  }
})


// TipoToken| 
client.login(process.env.TipoToken);


