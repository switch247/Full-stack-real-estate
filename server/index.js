import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
// import mongoose from "mongoose"
// const multer = require("multer");
// const path = require("path");


dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)



// i've decided to use prisma this is unessesary now
// app.use("/images",express.static(path.join(__dirname,"/images")))

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     // useFindAndModify:true,
// }).then(
//     console.log("Connected to MongoDB",)
//     )
//     .catch( er => console.log(er) )

// const storage = multer.diskStorage({
//     destination:(req, file, callbackfunc)=>{
//         callbackfunc(null,"images")
//     },
//     filename:(req, file, callbackfunc)=>{
//         callbackfunc(null,req.body.name)
//         // "hello.png" for testing post man for client req.body.name
//     }
// })

// const upload = multer ({storage:storage})
// app.post("/api/upload", upload.single("file"), (req,res) => {
//     res.status(200).json("file has been uploaded")
// })