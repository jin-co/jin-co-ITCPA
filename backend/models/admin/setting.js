const mongoose = require('mongoose')
const settingSchema = mongoose.Schema({
  imagePath: {type: String}
})

module.exports = mongoose.model("Setting", settingSchema) 