import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const model = {
  name: String,
  isFasting: Boolean,
  isDiabetic: Boolean,
  patientId: [String],
};

const medialTestSchema = new mongoose.Schema(model, { timestamps: true });

const MedicalTest = mongoose.model(
  "MedicalTest",
  medialTestSchema,
  process.env.TEST_COLLECTION
);
export default MedicalTest;
