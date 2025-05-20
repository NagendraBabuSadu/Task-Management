import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDb from "./config/db";
import routes from "./routes/routes";


dotenv.config();
connectDb();
const app = express();


const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// After middleware like express.json()
app.use(routes);

app.get("/", function (req, res, next) {
  res.status(200).json({
    msg: "Port is working.",
  });
});


app.use(
  cors({
    origin: "*", // Temporarily allow all origins
  })
);

app.listen(PORT, () => {
  console.log("server is listening at port", PORT);
});
