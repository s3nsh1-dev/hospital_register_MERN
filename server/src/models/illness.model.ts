import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const model = {
  id: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    default: ["Viral"],
    required: true,
  },
  patient: {
    type: { name: String, id: String },
    required: true,
  },
};

const IllnessModelSchema = new mongoose.Schema(model, { timestamps: true });

const Illness = mongoose.model(
  "Illness",
  IllnessModelSchema,
  process.env.ILLNESS_DATASET
);

export default Illness;
