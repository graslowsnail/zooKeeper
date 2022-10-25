const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes.js');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes.js'));


module.exports = router;

