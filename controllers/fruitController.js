const { Fruit } = require('../models');

module.exports = {
getFruit(req, res) {
    Fruit.find() 
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    test(req, res) { res.send('fruits all')
},
//hard coding one fruit using {name: 'orange', color: 'red', amount: 20, price: 3 }
addFruit(req, res) {
    Fruit.create({name: 'orange', color: 'red', amount: 20, price: 3 })
    .then((createFruit) => res.json(createFruit))
    .catch((err) => res.status(500).json(err));
},
addFruitSoft(req, res) {
    Fruit.create(req.body)
    .then((createFruitInsomnia) => res.json(createFruitInsomnia))
    .catch((err) => res.status(500).json(err));
},
oneFruit(req, res) {
    Fruit.findOne({ _id: req.params.id })
    .then((oneFruitId) => res.json(oneFruitId))
    .catch((err) => res.status(500).json(err));
},

removeFruit(req, res) {
    Fruit.findOneAndDelete({ _id: req.params.id })
    .then((deleteFruitId) => res.json(deleteFruitId))
    .catch((err) => res.status(500).json(err));
},

}
