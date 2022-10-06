const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server info.'),
	async execute(interaction) {
    const guildName = interaction.guild.name
    const totalMembers = interaction.guild.memberCount
    await interaction.reply(`Server name: ${guildName}\nTotal members: ${totalMembers}`);
	},
};