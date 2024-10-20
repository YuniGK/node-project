const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get("/", () => {
    console.log('페이지 -')
});

//회원가입
router.post("/", userController.createUser);

module.exports = router;