const {Client,GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate",(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content:"Generating Short ID" + url,
        });
    }
    message.reply({
        content:'Hi from bot',
    });
});

client.on('interactionCreate',interaction => {
    console.log(interaction);
    interaction.reply("Pong!");
});



client.login(
    "MTMwMDM5NjI0MTA0OTQ4NTQxNA.GmmEOM.1XIOaUUuERHH02ebRNXt5or3rVyD9o5E373kMQ"
)