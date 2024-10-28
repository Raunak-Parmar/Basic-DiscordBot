const {REST,Routes} = require("discord.js");
const commands = [
    {
        name:"create",
        description:"Creates a new short url",
    },
];

const rest = new REST({version:"10"}).setToken("MTMwMDM5NjI0MTA0OTQ4NTQxNA.GmmEOM.1XIOaUUuERHH02ebRNXt5or3rVyD9o5E373kMQ");

(async () =>{
    try{
        console.log("Started refresing app");
        await rest.put(Routes.applicationCommands("1300396241049485414"),{body:commands});
        console.log("Successfully reloaded");
    }catch(error){
        console.log(error);
    }
})();

