import mongoose from "mongoose";
import dotenv from "dotenv";
import { PatientType } from "../constants/commonTypes";
import MedicalTest from "./medicalTests.model";

dotenv.config();

const model = {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  disease: {
    type: [String],
    required: true,
    default: ["Viral"],
  },
  entryDate: {
    type: Date,
    required: true,
  },
  dischargeDate: {
    type: Date,
  },
};
const patientSchema = new mongoose.Schema(model, { timestamps: true });

// const Patient = mongoose.model("Patient", patientSchema);
const Patient = mongoose.model<PatientType>(
  "Patient",
  patientSchema,
  process.env.COLLECTION_NAME
);

export default Patient;
