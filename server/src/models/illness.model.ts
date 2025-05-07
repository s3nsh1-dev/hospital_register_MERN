import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const illnessSchema = new mongoose.Schema(
  {
    type: { type: [String], required: true },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
  },
  { timestamps: true }
);

const Illness = mongoose.model("Illness", illnessSchema);
export default Illness;
