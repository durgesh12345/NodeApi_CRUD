const express = require('express')

const  router = express.Router();

const createController = require('../controllers/create-controller');

console.log("router is running");

router.get('/', createController.create);
module.exports = router;