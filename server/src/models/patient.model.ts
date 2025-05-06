import mongoose from "mongoose";
import dotenv from "dotenv";
import { PatientType } from "../constants/commonTypes";

dotenv.config();

const model = {
  name: {
    type: String,
    required: true,
    default: "NEW PATIENT",
  },
  age: {
    type: Number,
    required: true,
  },
  discharge_date: {
    type: Date,
  },
  illness_id: {
    type: Date,
    required: true,
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story",
    required: true,
  },
};

const patientSchema = new mongoose.Schema(model, { timestamps: true });

const Patient = mongoose.model<PatientType>(
  "Patient",
  patientSchema,
  process.env.COLLECTION_NAME
);

export default Patient;
