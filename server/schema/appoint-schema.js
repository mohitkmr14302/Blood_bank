import mongoose from "mongoose"
const postschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
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

const appoint = mongoose.model('appoint', postschema)
export default appoint;