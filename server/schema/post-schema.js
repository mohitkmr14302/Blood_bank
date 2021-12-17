import mongoose from "mongoose"
const postschema = mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
})

const Post = mongoose.model('post', postschema)
export default Post;