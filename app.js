require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT= process.env.PORT || 9000;
mongoose.set("strictQuery", true);
const notFound = require('./middleware/notfound');
const authRouter = require('./routes/authRouter')
const journalRouter = require('./routes/journalRouter')
const auth = require('./middleware/authentication')
const cors = require("cors")



//middleware
app.use(cors());
app.use(express.json());


//routes
// app.use(userRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1/journal", auth, journalRouter);


//error route
app.use(notFound);

const start= async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        app.listen (PORT, () =>{
            console.log(`server running on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }

};

start();

