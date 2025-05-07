import mongoose from "mongoose";
import dotenv from "dotenv";
import { PatientType } from "../constants/commonTypes";

dotenv.config();

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    illnesses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Illness" }],
    story: { type: mongoose.Schema.Types.ObjectId, ref: "Story" },
  },
  { timestamps: true }
);

const Patient = mongoose.model<PatientType>(
  "Patient",
  patientSchema,
  process.env.COLLECTION_NAME
);

export default Patient;
