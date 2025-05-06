import mongoose from "mongoose";
import dotenv from "dotenv";
import { StoryType } from "../../src/constants/commonTypes";

dotenv.config();

const model = {
  summary: String,
  fir_filed: {
    type: Boolean,
    required: true,
    default: false,
  },
  insurance_covered: {
    type: Boolean,
    required: true,
    default: true,
  },
};

const story_model_schema = new mongoose.Schema(model);

const Story = mongoose.model<StoryType>(
  "Story",
  story_model_schema,
  process.env.STORY_DATASET
);

export default Story;
