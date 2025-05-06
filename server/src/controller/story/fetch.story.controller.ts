import { RequestHandler, Request, Response } from "express";
import Story from "../../models/story.model";

const fetchStory: RequestHandler = async (req: Request, res: Response) => {
  try {
    const stories = await Story.find({});
    if (!stories || stories.length === 0) {
      res.status(404).json({ message: "No stories found" });
      return;
    }
    res.status(200).json({ message: "SUCCESS", body: stories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching stories", error });
  }
};

export default fetchStory;
