const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config({path:'.env'});

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//req.body각 객체로 인식

//const indexRouter = require('./routes/index');
//api주소를 사용할 때, indexRouter를 호출한다.
//app.use('/api', indexRouter);

//db셋팅
const mongoURI = process.env.LOCAL_DB_ADDRESS;
mongoose.connect(mongoURI, {useNewUrlParser:true})
        .then(()=> console.log('mongoose connected'))
        .catch((error)=> console.log('DB connection fail ', error));

//PORT셋팅  
app.listen(process.env.PORT || 5000, () =>{
    console.log("server on");
});