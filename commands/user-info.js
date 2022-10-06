const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info.'),
	async execute(interaction) {
		const userTag = interaction.user.tag
    const userId = interaction.user.id
    await interaction.reply(`User Tag: ${userTag} \nUser Id: ${userId}`);
	},
};