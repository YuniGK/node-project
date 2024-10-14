const express = require('express');
const router = express.Router();

router.post('/tasks', (req, res) => {
    res.send('create task');
});

router.get('/tasks', (req, res) => {
    res.send('get tasks');
});

router.put('/tasks/:id', (req, res) => {
    res.send('update task');
});

router.delete('/tasks/:id', (req, res) => {
    res.send('delete task');
});

module.exports = router;
//외부 호출이 가능하도록 빼냄