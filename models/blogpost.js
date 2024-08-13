const mongoose = require('mongoose');

const BlogPost = new mongoose.Schema({
    title: { type: String , required: true },
    content: { type: String , required: true },
    author:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt:{type:Date, default: Date.now()},
    userId: String
});
const blog = mongoose.model('BlogPost', BlogPost);

module.exports = blog;
