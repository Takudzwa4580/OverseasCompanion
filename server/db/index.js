const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://takudzwa4580:gKsVw1dop9iDOZsx@overseascompanion.wotmefx.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("Could not connect to MongoDb", err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  //Schema Defination here
});

const courseSchema = new mongoose.Schema({
  //Schema Defination here
  name: String,
  email: String,
  password: String,
});

const applicationSchema = new mongoose.Schema({
  //Schema Defination here
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const offerLetterSchema = new mongoose.Schema({
  //Schema defination here
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  application: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});

const User = mongoose.model("User", userSchema);
const Application = mongoose.model("Application", applicationSchema);
const Course = mongoose.model("Course", courseSchema);
const OfferLetter = mongoose.model("OfferLetter", offerLetterSchema);

module.exports = {
  User,
  Application,
  Course,
  OfferLetter
};
