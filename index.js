require('dotenv').config();

// Print out value of API key stored in .env file
async function getImage(query)
{
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    //console.log(endpoint)
   const response = await fetch(endpoint)
   const data = await response.json()
   //console.log(data)
    const randomIndex = Math.floor(Math.random() * 25);
    const firstImage = data.data[randomIndex].url;
   return firstImage


    
} 

getImage('dog').then(image => console.log(image)).catch(error => console.error(error));
//console.log(process.env.API_KEY)