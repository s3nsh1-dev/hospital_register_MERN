import mongoose from "mongoose";
import dotenv from "dotenv";
import { PatientType } from "../constants/commonTypes";

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
  tests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedicalTest",
  },
};

const patientSchema = new mongoose.Schema(model, { timestamps: true });

// Add auto-population middleware
patientSchema.pre(["find", "findOne"], function () {
  this.populate("tests");
});

const Patient = mongoose.model<PatientType>(
  "Patient",
  patientSchema,
  process.env.COLLECTION_NAME
);

export default Patient;
