const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./static')));


app.get('/',(req, res) => {
  res.sendFile(__dirname + '/static/index.html')
});

app.get('/aboutUs',(req, res) => {
  res.sendFile(__dirname + '/static/about-us.html')
});

app.get('/services',(req, res) => {
  res.sendFile(__dirname + '/static/services.html')
});

app.get('/events',(req, res) => {
  res.sendFile(__dirname + '/static/portfolio.html')
});

app.get('/contact',(req, res) => {
  res.sendFile(__dirname + '/static/contact-us.html')
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
