import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB";
import patientRouter from "./src/routes/patient.routes";
import illnessRouter from "./src/routes/illness.routes";
import storyRouter from "./src/routes/story.routes";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();

    app.use(cors());
    app.use(express.json());
    app.use("/api/patient", patientRouter);
    app.use("/api/illness", illnessRouter);
    app.use("/api/story", storyRouter);

    app.use("/", (res, req) => {
      req.send("HOME");
    });

    app.listen(port, () => {
      console.log(`Server: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`Server Error <500>: ${error}`);
    process.exit(1);
  }
};
startServer();
