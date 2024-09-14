const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    name: String,
    googleid: String,
    mitEmail: String,
  });
  
  // compile model from schema
module.exports = mongoose.model("goal", userSchema);