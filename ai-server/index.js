import express from 'express'
import cors from "cors"

import { GoogleGenerativeAI } from '@google/generative-ai'

import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json())

app.get('/',(req ,res)=>{
  res.send('Ai Server is now live');
})
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
app.post('/ask' ,async (req ,res)=>{
    const {prompt} = req.body ;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      res.json({ answer: text });
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }

    
});



app.listen(PORT , ()=>{
    console.log("i server is running http://localhost:5000");
});