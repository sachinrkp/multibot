//console.log('Hello World!');
const Discord=require('discord.js');

const commando=require('discord.js-commando');
const bot=new commando.Client();


bot.registry.registerGroup('random','Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

/*const bot=new Discord.Client();
bot.on('message',(message) => {
if(message.content=='ping') {
   //message.reply('pong');
   message.channel.sendMessage('pong');
}
});
*/


bot.login(process.env.BOT_TOKEN);