const mongoose = require("mongoose");
import "./user.js"

const goalSchema = new mongoose.Schema({
    expectedTime: Number,
    user: userSchema,
    percentageCompleted: Number
  });
  
  // compile model from schema
module.exports = mongoose.model("goal", goalSchema);