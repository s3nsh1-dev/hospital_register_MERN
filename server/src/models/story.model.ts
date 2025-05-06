import mongoose from "mongoose";
import dotenv from "dotenv";

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

const story_model_schema = new mongoose.Schema(model, { timestamps: true });

const Story = mongoose.model(
  "Story",
  story_model_schema,
  process.env.STORY_COLLECTION
);

export default Story;
