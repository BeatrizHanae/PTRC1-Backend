const express = require ("express");
const apiRoutes = require("./routes/api");
const bodyParser = require ('body-parser');
const cors = require('cors');
const app = express();

require('./db')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({ 
    extended: false
  })
)

app.use('/api', apiRoutes);

app.listen(5000, function() {
    console.log('Servidor conectado!')
})