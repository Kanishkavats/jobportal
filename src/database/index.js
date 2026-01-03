const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  // const connectionURL = process.env.MONGODB_URL;

  await mongoose
    .connect("mongodb://127.0.0.1:27017/job-portal-nextjs")
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
