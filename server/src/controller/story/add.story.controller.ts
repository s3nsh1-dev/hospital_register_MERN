import { RequestHandler, Request, Response } from "express";
import Story from "../../models/story.model";
import { StoryType } from "../../constants/commonTypes";

const addStory: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result: StoryType = { ...req.body };
    // Validate required fields in the request body
    if (!result.summary || typeof result.fir_filed !== "boolean") {
      res
        .status(422)
        .json({ message: "Invalid story data: Missing required fields" });
      return;
    }

    const createStory: StoryType = await Story.create(result);
    res.status(201).json({ message: "SUCCESS", body: createStory });
  } catch (error) {
    res.status(500).json({
      message: "Server issue while creating story",
      error,
    });
  }
};

export default addStory;

/**
 * SAMPLE
 * POST /api/story/add
{
  "summary": "Patient underwent surgery for appendicitis.",
  "fir_filed": false,
  "insurance_covered": true
}
 */
