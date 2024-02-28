const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/story-app");

app.post('/login',(req,res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
                res.send({
                    token: 'test123'
                }) 
            } else {
                res.json("Failure")
            }
        } else {
            res.json("This account doesn't exist")
        }
    })
})

app.post('/sign-up',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

app.listen(3001, () => {
    console.log("server is running");
})