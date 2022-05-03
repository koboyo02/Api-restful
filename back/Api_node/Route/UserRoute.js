const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

router.get('/', UserController.getUsers);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/:id', UserController.updateCreneau);
router.delete('/:id', UserController.deleteUser);
router.get('/matching/:id', UserController.matching);

module.exports = router;
