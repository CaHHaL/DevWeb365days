const mongoose=require("mongoose");
const Schema =mongoose.Schema;

const reviewSchema = new Schema({
    comments:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        dafault: Date.now()
    },
    author:{
        type:Schema.Types.ObjectId,
            ref:"User",
    },
});


module.exports = mongoose.model("Review",reviewSchema);