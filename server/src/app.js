const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const morgan = require('morgan');
const { sequelize} = require('./models');
const AuthController = require('./controller/AuthController'); 
const AuthControllerPolicy = require('./policies/AuthControllerPolicy');
const SongsController = require('./controller/SongsController');

const app = express();
const port = 3001;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hollow Wurldd!')
});
app.get('/songs', SongsController.get);
app.get('/songs/:songId', SongsController.show);
app.put('/songs/:songId', SongsController.put);

app.post('/register', AuthControllerPolicy.register, AuthController.register);
app.post('/login', AuthController.login);
app.post('/songs', SongsController.post);

sequelize.sync({ force: true })
    .then(()=>{
        app.listen(port, () => console.log(`The app is listening on port ${port}`));
    })

   
