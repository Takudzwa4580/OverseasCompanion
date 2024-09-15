const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://takudzwa4580:gKsVw1dop9iDOZsx@overseascompanion.wotmefx.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("Could not connect to MongoDb", err));

const adminSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  country: String,
  city: String,
  address: String,
  postalCode: String,
  appliedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  appliedSuccess: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OfferLetter",
    },
  ],
  appliedFailed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RejectedLetter",
    },
  ],
  savedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SavedCourses",
    },
  ],
});

const courseSchema = new mongoose.Schema({
  title: String,
  name: String,
  imageLink: String,
  duration: String
});

const applicationSchema = new mongoose.Schema({
  personalDetails: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    fathersName: {
      type: String,
      required: true,
    },
    mothersName: {
      type: String,
      required: true,
    },
  },

  // Step 2: Contact Details
  contactDetails: {
    phoneNumber: {
      type: String,
      required: true,
    },
    guardianPhoneNumber: {
      type: String,
      required: true,
    },
    homeAddress: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    stateProvince: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },

  // Step 3: Admission Particulars
  admissionDetails: {
    previousLevelOfStudy: {
      type: String,
      enum: [
        "Secondary School",
        "High/AS/Advanced Level",
        "Undergraduate",
        "Postgraduate",
      ],
      required: true,
    },
    countryAcquired: {
      type: String,
      required: true,
    },
    programAppliedFor: {
      type: String,
      required: true,
    },
    alternative1: {
      type: String,
      required: false,
    },
    preferredDestination: {
      type: String,
      enum: ["India", "China", "Germany"],
      required: true,
    },

  },

  // Additional metadata
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

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

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Application = mongoose.model("Application", applicationSchema);
const Course = mongoose.model("Course", courseSchema);
const OfferLetter = mongoose.model("OfferLetter", offerLetterSchema);

module.exports = {
  Admin,
  User,
  Application,
  Course,
  OfferLetter,
};
