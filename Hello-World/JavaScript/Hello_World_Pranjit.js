/* This is a first Program used to create a Hello World Server in nodejs
You need to have node installed in your machine
1. Open cmd and type npm init
2. install the node dependcies 
"npm i express"
3. write the  program and then run the server
by typing "noder filename.js"
*/
import express from 'express';
const app = express()
const PORT = process.env.PORT || 5000;
app.use('/', (req, res)=> {
  res.send("Hello World")
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
