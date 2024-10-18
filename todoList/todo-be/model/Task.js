const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
    task:{
        type : String
        , required : true
    }
    , isComplete:{
        type : Boolean
        , required : true
    }
},{timestamps : true});
//timestamps - 데이터 생성 시간 등이 추가된다.

//조회시 해당 정보는 빼고 조회한다.
taskSchema.methods.toJSON = function(){
    const obj = this._doc;
    delete obj.__v;

    return obj;
}

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;