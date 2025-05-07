import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const storySchema = new mongoose.Schema({
  summary: { type: String, required: true },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
});

const Story = mongoose.model("Story", storySchema, process.env.STORY_DATASET);
export default Story;
