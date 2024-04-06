//access env variables
import * as dotenv from 'dotenv';
dotenv.config();


//initialise openai sdk


import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

//const openai = new OpenAIApi(configuration);

//initialise express
//express is a web application framework for Node.js
import express from 'express';
//cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
import cors from 'cors';

const app = express();
app.use
app.use(express.json());    //middleware to parse json data

//takes 2 arguments, first is the origin of the request, second is the options
//async function is a function that returns a promise
app.post('/dream', async (req, res) => {

    const  prompt  = req.body.prompt;

    const aiResponse = await openai.images.generate({
      prompt,
      n:1,
      size: '1024x1024',
    });
    console.log(aiResponse);
    const image = aiResponse.data.url;
    res.send({ image });
});

app.listen(8080, () => console.log('Server is running on port 3000'));