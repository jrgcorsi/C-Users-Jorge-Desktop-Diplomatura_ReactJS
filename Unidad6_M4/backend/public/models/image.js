const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: { 
        type: String,
        require: true,
    },
    description: {
         type: String,
         require: true,
        },
    filename: {
         type: String,
         require: true,
        },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Image', imageSchema);