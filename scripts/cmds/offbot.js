module.exports = {
	config: {
		name: "offbot",
		version: "1.0",
		author: "Alfred",
		countDown: 45,
		role: 2,
		shortDescription: "Turn off bot",
		longDescription: "Turn off bot",
		category: "owner",
		guide: "{p}{n}"
	},
	onStart: async function ({event, api}) {
		api.sendMessage("╔════ஜ۩۞۩ஜ═══╗\n\n📴Successfully Turned Off Alfred's System ✅\n╚════ஜ۩۞۩ஜ═══╝",event.threadID, () =>process.exit(0))}
};
