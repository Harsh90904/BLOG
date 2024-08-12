const { Router } = require("express");
const { getblog, createblog, updateblog, deleteblog } = require("../controllers/blogpost.controller");

const blogpost = Router();

blogpost.get("/blogp", getblog);
blogpost.post("/blogp", createblog);
blogpost.patch("/blogp/:id", updateblog);
blogpost.delete("/blogp/:id", deleteblog);

module.exports = blogpost;

