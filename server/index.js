const express = require("express");
const cors =require('cors')
const app =express();

const userRouter=require('./routes/user');
const applicationsRouter=require('./routes/applications');
const offerLetterRouter=require('./routes/offerletter');
const courseRouter=require('./routes/course');

app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/applications',applicationsRouter);
app.use('/offerLetter',offerLetterRouter);
app.use('/course',courseRouter);


const PORT=3000;


app.listen(PORT,()=>{
    console.log("Server running on port ${PORT}")
})