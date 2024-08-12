
const blogpost = require("../models/blogpost")

const createblog = async (req, res) => {
    console.log(req.body);
    
    let data = await blogpost.create(req.body)
    res.send(data)
}

const getblog = async (req, res) => {
    let data = await blogpost.find()
    res.send(data)
}

const deleteblog = async (req, res) => {
    let { id } = req.params
    let data = await blogpost.findByIdAndDelete(id)
    res.send(data)
}

const updateblog = async (req, res) => {
    let { id } = req.params
    let data = await blogpost.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const findById=async(req, res) => {
    let { id }=req.params
    let data = await blogpost.findById(id)
    res.send(data)
}

const findblogByUserId=async(req, res) => {
    let { userid } = req.params
    let data = await blogpost.find({ userid: userid})
    res.send(data)

}
module.exports={createblog , deleteblog, updateblog, getblog, findById, findblogByUserId}
