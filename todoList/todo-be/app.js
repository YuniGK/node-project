const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//받은 데이터를 bodyParser이용해 변환한다.
app.use(bodyParser.json());

//db 주소
const mongoURI = `mongodb://localhost:27017/todo-demo`;

//db 연결
                            //예전형식과 요즘형식을 읽기 위해서 사용
mongoose.connect(mongoURI, {useNewUrlParser:true})
    .then(() => {
        console.log('db connect');
    }).catch((err) => {
        console.log('db connect fail ', err);
    });

app.listen(5000, () => {
    console.log('server on 5000');
});