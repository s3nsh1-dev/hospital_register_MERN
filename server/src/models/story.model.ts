import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const storySchema = new mongoose.Schema({
  summary: { type: String, required: true },
  fir_filed: {
    type: Boolean,
    required: true,
  },
  insurance_covered: {
    type: Boolean,
    required: true,
  },
});

const Story = mongoose.model("Story", storySchema, process.env.STORY_DATASET);
export default Story;
