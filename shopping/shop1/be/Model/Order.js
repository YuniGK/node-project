const mongoose = require('mongoose');
const User = require('./User');
const Product = require('./Product');
const Schema = mongoose.Schema;

const orderSchema = Schema({
    shipTo : {type : String, required : true}
    , contact : {type : String, required : true}
    , totalPrice : {type : Number, required : true}
    , userId : {type : mongoose.isObjectIdOrHexString, ref:User}
    , status : {type : String, default : 'active'}
    , items : [{
        productId : {type : mongoose.isObjectIdOrHexString, ref:Product}        
        , qty : {type : Number, default : 1, required : true}
        , size : {type : String, required : true}
        , price : {type : Number, required : true}
    }]
}, {timstamps : true});

//조회시 해당 정보는 빼고 조회한다.
orderSchema.methods.toJSON = function(){
    const obj = this._doc;
    delete obj.password;
    delete obj.__v;
    delete obj.updateAt;
    
    return obj;
}

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;