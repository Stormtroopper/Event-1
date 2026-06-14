import mongoose from "mongoose";
const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,

    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },

  activationTokenHash: {
    type: String,
    select: false,
  },

  activationTokenExpiresAt: {
    type: Date,
    select: false,
  },

  resetPasswordTokenHash: {
    type: String,
    select: false,
  },
  lastLoginAt: {
    type: Date,
  },
}, {
  timestamps: true
})
export const User = mongoose.model("User", Userschema);