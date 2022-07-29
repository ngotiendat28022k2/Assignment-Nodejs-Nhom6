import mongoose, {ObjectId} from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    color:{
        type: String
    },
    images:{
        type: String
    },
    desc:{
        type: String
    },
    sale:{
        type: Number
    },
    feature:{
        type: String
    },
    categoryId:{
        type: ObjectId,
        ref: 'category'
    }
})

export default mongoose.model("Products", productSchema);