const express = require('express');
const dbcontent = require("./config/db");
const userRouter = require("./routers/User.router")
const cors = require("cors");
const blogpost = require('./routers/blogpost.router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ msg: "start" })
})
app.use("/user", userRouter)
app.use("/blogs", blogpost)
let port = 8520
app.listen(port, () => {
    console.log("listening  on port " + port);
    dbcontent()
})
