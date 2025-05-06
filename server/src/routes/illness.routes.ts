import express from "express";
import fetchIllness from "../controller/illness/fetch.illness.controller";
import addIllness from "../controller/illness/add.illness.controller";

const illnessRouter = express.Router();

illnessRouter.get("/", fetchIllness);
illnessRouter.post("/add", addIllness);

export default illnessRouter;
