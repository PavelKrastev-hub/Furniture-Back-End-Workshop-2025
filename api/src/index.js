import express from "express";

const app = express();

app.get('/', (req, res) => {
   console.log('It works!');
   res.send('It works!');
});

app.listen(3030, () => 'Server is listening on http://localhost:3030...');