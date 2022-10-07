const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('late')
		.setDescription('Gives a reason why you\'ll be late.'),
	execute(interaction) {
    //Gets a random excuse from excuser api
    axios.get('https://excuser.herokuapp.com/v1/excuse')
    .then(async (res)=>{
      await interaction.reply(`${interaction.user.tag} said they will be late \nReason: ${res.data[0].excuse}`);})
	},
};