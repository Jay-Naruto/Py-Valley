import mongoose from "mongoose"

const dbCards=mongoose.Schema({
    name:String,
    imgUrl:String
});

export default mongoose.model('tinder-clone',dbCards)
