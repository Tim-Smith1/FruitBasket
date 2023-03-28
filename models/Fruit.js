const { Schema, model } =require('mongoose');


const fruitSchema = new Schema(
    {
    name: {
        type: String,
    },
    color: {
        type: String,
    },
    amount: {
        type: Number,
    },
    price: {
        type: Number,
    },
})

const Fruit = model('fruit', fruitSchema);

module.exports = Fruit;