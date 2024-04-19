const express=require('express');
const cors=require('cors')
const app=express();
require('dotenv').config()
const mongoose=require('mongoose');
const router=require('./routes/routes')
const port= process.env.PORT;
const url= process.env.URL;
router.use(express.json());
const opt={
    origin:'*',
    optionsSuccessStatus: 200
}
app.use(cors(opt));
app.use(router);
mongoose.connect(url)
  .then(() => {
    console.log("MongoDB connection ready");
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});