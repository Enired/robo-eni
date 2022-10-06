require('dotenv').config()
const args = process.argv.slice(2);
const {REST, SlashCommandBuilder, Routes} = require("discord.js")
const clientId = process.env.CLIENTID
const guildId = process.env.GUILDID
const token = process.env.TOKEN

const rest = new REST({version: '10'}).setToken(token);

rest.delete(Routes.applicationGuildCommand(clientId, guildId, args))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);