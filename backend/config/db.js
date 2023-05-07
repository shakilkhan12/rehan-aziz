const mongoose = require("mongoose");
module.exports.connection = async () => {
  try {
    await mongoose.connect(process.env.MongoDB);
    console.log("Database connected");
  } catch (error) {
    console.log("Erorr => ", error.message);
  }
};
