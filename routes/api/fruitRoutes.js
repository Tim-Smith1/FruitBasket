const router = require('express').Router();
const {getFruit, addFruit, addFruitSoft, removeFruit, oneFruit } = require('../../controllers/fruitController');
///api/fruits/all
router.route('/all').get(getFruit).get(oneFruit);
///api/fruits/:id getting one fruit by id.
router.route('/:id').get(oneFruit)
//Hard coded add one fruit.
router.route('/addone').post(addFruit);
//Add one using properties JSON in Insomnia
router.route('/addsoft').post(addFruitSoft);


//Delete one by id.
router.route('/removeone/:id').delete(removeFruit);
module.exports = router;