const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
