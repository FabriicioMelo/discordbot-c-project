const https = require("https");
const packageJSON = require("../../package.json");

module.exports = class DiscordClient {
    //Private variables
    #port; #token; #intents;

    constructor(intents)
    {
        this.#token;
        this.#port;
        this.#intents = intents;
    }

    async Run(token = "", port = 3000)
    {
        this.#token = token;
        this.#port = port;

        const options = {
            protocol: "https:",
            hostname: "discord.com",
            port: 443,
            path: "/api/v10",
            method: "GET",
            headers: {
                "Authorization": `Bot ${token}`,
                "User-Agent": `DiscordBot (https://github.com/FabriicioMelo/discordbot-project, ${packageJSON.version})`
            }
        }

        https.request(options, function(res)
        {
            console.log("A");
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);

            res.on('data', (d) => {
                process.stdout.write(d);
            });

            }).on('error', (e) => {
            console.error(e);
        });

    }
    
}