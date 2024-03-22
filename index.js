const { all } = require('axios');
const { Client, LocalAuth, MessageMedia } = require('./whatsapp-web.js/index');
const qrcode = require('qrcode-terminal');
const movieInfo = require('movie-info');
const base = "> 🎬 ```MV BOT (PICXGRAPHY)```";

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'session'
    })
});

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});
client.on('ready', () => {
    console.log('Client is ready!');
  
});

client.initialize();


client.on('message_create', async (msg) => {
    //console.log('MESSAGE RECEIVED', message);

   /*if (msg.fromMe && msg.body === "."){
    const movieTitle = "hobbit";

    movieInfo(movieTitle)
    .then(() => sendMovieImage(movieTitle))
    .catch((error) => {
      // Handle errors directly in the outer `.catch`
      console.error('Error:', error);
      msg.reply(`An error occurred: ${error}`);
      msg.react('⚠️');
    });

       
        async function sendMovieImage(movieTitle) {
            try {
              const response = await movieInfo(movieTitle);
              const formattedImage = response.imageBase + response.poster_path;
              const media = await MessageMedia.fromUrl(formattedImage);
              const movieFile = await MessageMedia.fromFilePath('./file/The-video.mp4');
              movieInfo(`${movieTitle}`).then((movieData) => {
            
                const formattedMessage = createMovieMessage(movieData);
                chat.sendMessage(media, {caption : formattedMessage});
                msg.react('🏷️');

                chat.sendMessage(movieFile,{sendMediaAsDocument : true, caption : `*${movieData.movieTitle}*\n\n${base}`});
                
              
                
            })
            .catch((error) => {
                // Handle any errors that occur during movieInfo retrieval
                console.error('Error retrieving movie info:', error);
                msg.reply(`*Sorry, I couldn\'t find information for that movie.* \n${error}`);
                msg.react('⚠️');
            });
            } catch (error) {
              console.error('Error retrieving movie info:', error);
              msg.reply(`Sorry, I couldn't find an image for that movie.* \n${error}`);
              msg.react('⚠️');
            }
          }
          
          
          
        
} else if (msg.body === 'tagall') {
    const NotifyMsg = msg.body.slice(7).trim();
    const chat = await msg.getChat();
    
    let text = `*GROUP NOTIFICATION*\n\n${NotifyMsg}\n\n${base}\n\n`;
    let mentions = [];

    for (let participant of chat.participants) {
        mentions.push(`${participant.id.user}@c.us`);
        text += `> 🍀 @${participant.id.user} \n`;
    }

    await chat.sendMessage(text, { mentions });

}

function createMovieMessage(movieData) {

    // Format the message with proper line breaks and spacing
    return `
*${movieData.original_title}*

_${movieData.overview}_

*▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀*
 🎭 Genres      = ${movieData.genre_ids}  
 📅 Release     = ${movieData.release_date}
 🌟 Rating       = ${movieData.vote_average}/10
 🍿 Popularity = ${movieData.popularity}
 🏷️ Subtitles   = si
 🔤 Language = ${movieData.original_language} 
 🔞 Adult        = ${movieData.adult}
*▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀*

*Reacts (👍❤️😂😮😢🍿)* 

${base}
`;
            
} */


});