require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//For command handling
client.commands = new Collection();
const commandPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

//For event handling
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));


//For command handling 
for (const file of commandFiles) {
  const filePath = path.join(commandPath, file);
  const command = require(filePath);
  
  client.commands.set(command.data.name, command);
}

//For event handling
for (const file of eventFiles){
  const filePath = path.join(eventsPath, file);
  const event = require(filePath)
  if(event.once){
    client.once(event.name, (...args)=> event.execute(...args))
  }
  else{
    client.on(event.name, (...args)=> event.execute(...args));
  }
}


// client.on('interactionCreate', async interaction => {
//   if (!interaction.isChatInputCommand()) {
//     return;
//   }

//   const command = interaction.client.commands.get(interaction.commandName);

//   if (!command) {
//     return;
//   }

//   try {
//     await command.execute(interaction);
//   }
//   catch (error) {
//     console.error(error);
//     await interaction.reply({ content: 'There wan error excututing the command.', ephemeral: true });
//   }
// });


client.login(process.env.TOKEN);