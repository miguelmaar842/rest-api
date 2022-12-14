const express = require ('express');
const app = express();
const morgan = require ('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/plantas',require('./routes/plantas'));


//starting the serve
app.listen(app.get('port'), () =>{
    console.log(`Escuchando en puerto ${app.get ('port')}`);
});