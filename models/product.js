const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"]
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["Apple", "Sumsung", "Dell", "Mi"],
            message: `{VALUE} is not Supported`
        }
    }
})

module.exports = mongoose.model("Product", productSchema)
