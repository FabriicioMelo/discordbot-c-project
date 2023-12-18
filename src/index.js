//Modules
const dotenv = require("dotenv/config");

//Classes
const DiscordClient = require("./discord/client");

//Code
const client = new DiscordClient(process.env.INTENTS);

client.Run(process.env.TOKEN);