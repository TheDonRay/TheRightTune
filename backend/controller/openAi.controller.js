//Call the openAi library etc
const OpenAi = require('openai'); 
const client = new OpenAi({ 
    apiKey: process.env.DJKEY
}); 

// Helper function to parse songs from OpenAI response
const parseSongsFromResponse = (response) => {
  const songs = [];
  
  // Match patterns like "1. Song Title - Artist Name" or "Song Title by Artist"
  const songPatterns = [
    /(\d+)\.\s*(.+?)\s*(?:-|by)\s*(.+?)(?:\n|$)/gi,  // "1. Song - Artist"
    /^(.+?)\s*(?:-|by)\s*(.+?)$/gim  // "Song - Artist" on separate lines
  ];
  
  for (const pattern of songPatterns) {
    let match;
    while ((match = pattern.exec(response)) !== null) {
      const title = match[match.length - 2]?.trim();
      const artist = match[match.length - 1]?.trim();
      
      if (title && artist && title.length > 0 && artist.length > 0) {  
        // push the object here as such 
        songs.push({
          title: title,
          artist: artist
        });
      }
    }
    if (songs.length > 0) break;
  }
  
  return songs;
}; 

//remeber the SDLC :
/*planning, analysis, design, implementation, testing and integration, maintanence. */
const aidj = async (req, res) => {
  try {
    const { usermood } = req.body; 

    //case to check for usermood 
    if (!usermood || usermood.trim() === ""){ 
        res.status(401).json({ 
            Error: 'No response sent to the backend',
        }); 
    } 
    // here i implement the openAi api code here to actaully take in the response from what the user puts. 
    const Djresponse = await client.chat.completions.create({ 
        model: "gpt-4o-mini", 
        messages: [ 
            {
                role: "system", 
                content: "You are a DJ who gives music recommendations depending on a user's mood. Use mainstream music starting from 2022. Provide at least 10 songs in a numbered list format with song title and artist name like this: 1. Song Title - Artist Name"
            }, 
            { 
                role: "user", 
                content: usermood,
            }
        ]
    });  
    // Parse the OpenAI response to extract songs
    const aiResponse = Djresponse.choices[0].message.content;
    const songs = parseSongsFromResponse(aiResponse);
    
    //backend response that we can send to the frontend here 
    res.status(200).json({ 
        backendResponse: aiResponse,
        usermood: usermood,
        songs: songs
    }); 
    console.log("backend said:", usermood);
  } catch (error) { 
    console.log('The Error is:', error); 
    res.status(500).json({
      backendError: "DJ failed to get recommendations", 
      DetailedError: error.message, 
    });
  }
};

module.exports = aidj;
