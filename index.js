const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");


app.get('/', function(request, response) { response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
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

client.on('messageCreate', msg => {
  ///////////Команда 1////////// 
  if ((msg.content.toLowerCase() == 'аоа') && (msg.author.bot != true)) {
    msg.channel.send('Аоа')
  }
})
// 

 
client.on('ready',  msg => {

  setInterval(function() {
    const guild = client.guilds.cache.get("878935290599850025");
    const role = guild.roles.cache.get("975727795412033536")
    let month = fs.readFileSync('./month').toString() //Чтение
    let now = new Date()
    fs.writeFileSync('./month', now.getMonth().toString()) //Запись

  
// 

    if (month != now.getMonth().toString())
    {
      
              let currentUser = fs.readFileSync('./guyWithRoleId').toString()
    const members = guild.members.cache.map(member => member.id);

    let nextNumber = members[(Math.floor(Math.random() * (members.length - 0) + 0))]
    while ((guild.members.cache.get(nextNumber).user.bot == true) || (nextNumber == currentUser))
      {
        nextNumber = members[(Math.floor(Math.random() * (members.length - 0) + 0))]
        
      }

    
      console.log(nextNumber)
    fs.writeFileSync('./guyWithRoleId', nextNumber)
    const member = guild.members.cache.get(nextNumber)
    const lastMember = guild.members.cache.get(currentUser)
    member.roles.add(role)
      try{
    lastMember.roles.remove(role)
      }catch(err){}
    }
  }, 500000);
});

// TipoToken| 
client.login(process.env.TipoToken);

