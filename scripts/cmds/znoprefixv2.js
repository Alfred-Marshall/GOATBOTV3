module.exports = {
    config: {
        name: "no prefix",
        version: "1.0",
        author: "Alfred",
        countDown: 5,
        role: 0,
        shortDescription: "ignore this command",
        longDescription: "ignore this command",
        category: "No prefix",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "khilay?") return message.reply("My Alfred Im Still Here, Ask Me Anything ✨");
}
};
