const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  description: { type: String },
  locations: { type: String, required: true },
  attractions: { type: String },
  duration: { type: String },
  price: { type: Number },
  image: { type: String, required: true },
 
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
