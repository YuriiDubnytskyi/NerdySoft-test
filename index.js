const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./router/index')
const mongoose = require('mongoose');

const http = require('http')
const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app)

mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)});

app.use(cors())
app.use(express.json());
routes(app)

app.use(express.static(path.join(__dirname, 'client/build')));
//app.use('/', express.static('./client/my-app/build'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});




server.listen(port, () => console.log(`Listening on port ${port}`))
// app.listen(5000 ,function () {
//   console.log('Example app listening on port 5000!');
// });
