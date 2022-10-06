require('dotenv').config()
const {REST, SlashCommandBuilder, Routes} = require("discord.js")
const clientId = process.env.CLIENTID
const guildId = process.env.GUILDID
const token = process.env.TOKEN
//The Commands for the bot
const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info'),
]

commands.map((command)=>command.toJSON());

const rest = new REST({version: '10'}).setToken(token);

rest.put(Routes.applicationCommands(clientId, guildId), {body: commands})
.then((data)=>console.log(`Successfully registered ${data.length} application commands`))
.catch(console.error)
