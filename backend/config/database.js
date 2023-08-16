const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/social_network", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Success");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
