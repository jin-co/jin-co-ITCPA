const mongoose = require("mongoose");
const qnaSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String },
});

module.exports = mongoose.model("Qna", qnaSchema);
