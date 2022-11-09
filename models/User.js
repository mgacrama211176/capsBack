import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // username is the channelName
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    userCategory: {
      type: String,
      default: "Beginner",
    },

    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png",
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },

    fromGoogle: {
      type: Boolean,
      default: false,
    },

    fullName: {
      type: String,
    },
    address: {
      type: String,
    },

    birthdate: {
      type: String,
    },

    about: {
      type: String,
    },

    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: String,
      default: "",
    },
    profileBackground: {
      type: String,
      default: "",
    },
    saveVideos: {
      type: [String],
    },
    uploadCV: {
      type: String,
      default: "",
    },
    timesReported: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
