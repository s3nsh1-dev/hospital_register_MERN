import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const illnessSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    type: { type: [String], required: true, default: ["Pain"] },
  },
  { timestamps: true, _id: false }
);

const Illness = mongoose.model(
  "Illness",
  illnessSchema,
  process.env.ILLNESS_DATASET
);
export default Illness;
