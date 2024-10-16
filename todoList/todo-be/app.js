const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({path:'.env'});
const MONGDB_URI_PROD = process.env.MONGDB_URI_PROD;

const indexRouter = require('./routes/index');

const app = express();
//받은 데이터를 bodyParser이용해 변환한다.
app.use(bodyParser.json());

app.use(cors());

//api주소를 사용할 때, indexRouter를 호출한다.
app.use('/api', indexRouter);

//db 주소
const mongoURI = `mongodb+srv://${MONGDB_URI_PROD}@cluster0.g5mxb.mongodb.net/todo-student`;

//db 연결
                            //예전형식과 요즘형식을 읽기 위해서 사용
mongoose.connect(mongoURI, {useNewUrlParser:true})
    .then(() => {
        console.log('db connect');
    }).catch((err) => {
        console.log('db connect fail ', err);
    });

app.listen(5050, () => {
    console.log('server on 5050');
});