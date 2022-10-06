require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (commandName === 'server') {
    const guildName = interaction.guild.name
    const totalMembers = interaction.guild.memberCount
    await interaction.reply(`Server name: ${guildName}\nTotal members: ${totalMembers}`);
  }
  else if (commandName === 'user') {
    const userTag = interaction.user.tag
    const userId = interaction.user.id
    await interaction.reply(`User Tag: ${userTag} \nUser Id: ${userId}`);
  }
});


client.login(process.env.TOKEN);