const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./static')));


app.get('/',(req, res) => {
  res.sendFile('./static/index.html')
});

app.get('/aboutUs',(req, res) => {
  res.sendFile('./static/about-us.html')
});

app.get('/services',(req, res) => {
  res.sendFile('./static/services.html')
});

app.get('/events',(req, res) => {
  res.sendFile('./static/portfolio.html')
});

app.get('/contact',(req, res) => {
  res.sendFile('./static/contact-us.html')
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
