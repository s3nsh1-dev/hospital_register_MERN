import mongoose from "mongoose";
import dotenv from "dotenv";
import { IllnessType } from "../../src/constants/commonTypes";

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
  patient_info: {
    type: { name: String, id: String },
    required: true,
  },
};

const IllnessModelSchema = new mongoose.Schema(model, { timestamps: true });

const Illness = mongoose.model<IllnessType>(
  "Illness",
  IllnessModelSchema,
  process.env.ILLNESS_DATASET
);

export default Illness;
