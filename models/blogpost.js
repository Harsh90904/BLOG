const mongoose = require('mongoose');

const BlogPost = new mongoose.Schema({
    title: { type: String , required: true },
    content: { type: String , required: true },
    author:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,  required: true },
    createdAt:{type:Date, default: Date.now()},
});
const blog = mongoose.model('BlogPost', BlogPost);

module.exports = blog;
