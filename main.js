require('dotenv').config()
const {Client, GatewayIntentBits}= require("discord.js")
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once("ready", ()=>{
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", (msg)=>{
  if(msg.content === "ping"){
    msg.reply("pong")
  }
})


client.login(process.env.TOKEN)