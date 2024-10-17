const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

router.post('/', userController.createUser);

//로그인
router.post('/login', userController.loginWithEmail);

router.get('/', userController.getUser);

router.put('/:id', userController.putUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;