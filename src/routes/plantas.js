const {Router} = express = require ('express');
const router = Router();
const _ = require('underscore');

const plants = require ('../sample.json');

router.get('/', (req, res) =>{
    res.json(plants);
});


router.post('/', (req, res) =>{
    //console.log(req.body);
    const {nombre, nombre_cientifico, imagen, descripcion}= req.body;
    if(nombre && nombre_cientifico && imagen && descripcion) {
        const id = plants.length + 1;
        const newPlanta = {...req.body, id};
        plants.push(newPlanta);
        res.json(plants);
    }else{
        res.status(500).json({error:'Hubo un ERROR...'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {nombre, nombre_cientifico, imagen, descripcion}= req.body;
    if(nombre && nombre_cientifico && imagen && descripcion){
        _.each(plants, (planta, i) => {
            if(planta.id == id){
                planta.nombre = nombre;
                planta.nombre_cientifico = nombre_cientifico;
                planta.imagen = imagen;
                planta.descripcion = descripcion;
            }
        });
        res.json(plants);
    }else{
        res.status(500).json({error:'Hubo un ERROR...'});
    }
});


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(plants, (planta, i) => {
        if(planta.id == id){
            plants.splice(i, 1);
        }
    });
    res.send(plants);
});

module.exports = router;