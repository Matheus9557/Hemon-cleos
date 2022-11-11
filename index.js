require('dotenv').config();
const router = require('./routers/router');
const Ponto = require('./models/ponto');
const pontoController = require('./controllers/PontoController');
const { nextTick } = require('process');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');


const app = express();
const port = process.env.API_PORT;


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(router);
app.use(cors());
app.use(express.json());


app.get('/', pontoController.sincronizar);

app.post('/pontos', pontoController.addPonto);

app.get('/router/lista', async function(req, res){
    try {
        const pontos = await Ponto.findAll();
      res.render('lista', {pontos: pontos});
    }catch{
        return next(err);
    }
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});