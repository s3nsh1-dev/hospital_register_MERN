import mongoose from "mongoose";
import dotenv from "dotenv";
import { IllnessType } from "../../src/constants/commonTypes";

dotenv.config();

const model = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: [String],
    default: ["Viral"],
    required: true,
  },
  patient_info: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};

const IllnessModelSchema = new mongoose.Schema(model, {
  _id: false,
  timestamps: true,
});

const Illness = mongoose.model<IllnessType>(
  "Illness",
  IllnessModelSchema,
  process.env.ILLNESS_DATASET
);

export default Illness;
