import express from "express";
import addStory from "../controller/story/add.story.controller";
import fetchStory from "../controller/story/fetch.story.controller";

const storyRouter = express.Router();

storyRouter.get("/", fetchStory);
storyRouter.post("/add", addStory);

export default storyRouter;
