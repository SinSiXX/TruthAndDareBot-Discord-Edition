var Discord = require("discord.js")
var request = require("request")
var bot = new Discord.Client()

var truths = "API for Truths";
var dares = "API FOR Dares";
// To get my API message me on discord and i'll give them to you.
var join = "To join press this url https://discordapp.com/oauth2/authorize?&client_id=174237165042008075&scope=bot and select your server !"
var help = "Truth and Dare is a popular game. How it's played is a player asks a Truth or a dare and gets from another person. To play it on the server call the bot with it's username and Truth next to it for Truth and Dare for a dare."


bot.on("ready", function(msg){
  console.log("Woop! Bot logged in under the name of "+bot.user.name+" and the user ID of "+bot.user.id)
})

bot.on("message", function(msg) {
  // if message starts with "something"
  if(msg.content.indexOf("<@CLIENTID> Truth") == 0){
    console.log("called");
    request(truths, function (error, response, body) {
      // Check for no error and a 200 okay response
      if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage.
        // Try to parse the json. If it errors it gets caught.
        var truthjson = JSON.parse(body);
        var randomtruth = truthjson[0]['Truth'];
        bot.reply(msg, randomtruth);
      } else {
        console.error(error);
        console.log(response);
      }
    });
    console.log("Replied");
  }

if(msg.content.indexOf("<@CLIENTID> Dare") == 0){
  console.log("called");
  request(dares, function (error, response, body) {
    // Check for no error and a 200 okay response
    if (!error && response.statusCode == 200) {
      console.log(body); // Show the HTML for the Google homepage.
      // Try to parse the json. If it errors it gets caught.
      var darejson = JSON.parse(body);
      var randomdare = darejson[0]['Dare'];
      bot.reply(msg, randomdare);
    } else {
      console.error(error);
      console.log(response);
    }
  });
  console.log("Replied");
}
if(msg.content.indexOf("<@CLIENTID> Join") == 0) {
        bot.reply(msg, join);
}

if(message.content.indexOf("<@CLIENTID> Help") == 0) {
        bot.reply(message, help);
}

mybot.loginWithToken("*TOKEN*", function(error) {
  if (error) {
    console.error(error);
    return;
  }
});
