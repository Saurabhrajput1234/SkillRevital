const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = "mynameissaurabhrajputifyouhaveanytyuplkbhkhbkbkjbkknkjjkbjk";

const userSchema = new mongoose.Schema({
  name: { type: String, uppercase: true, required: true },
  lastName: { type: String, uppercase: true, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: { type: String, required: true, minlength: 6 },
  cPassword: { type: String, required: true, minlength: 6 },
  file: { type: String }, // New field to store file path
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next();
});

// Generate authentication token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, keysecret, { expiresIn: "1d" });
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const userdb = mongoose.model("userdbpath", userSchema);
module.exports = userdb;
