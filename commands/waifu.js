const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('waifu')
		.setDescription('Gives you a waifu.'),
	async execute(interaction) {
    //What the bot does
    axios.get('https://api.waifu.im/random', {params: {selected_tags: ['waifu']}})
    .then(async (res) => {
      await interaction.reply(res.data.images[0].url);
    }

    )
	},
};