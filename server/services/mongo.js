const { default: mongoose } = require("mongoose");

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    return connection;
  } catch (err) {
    console.log(err);
  }
};
