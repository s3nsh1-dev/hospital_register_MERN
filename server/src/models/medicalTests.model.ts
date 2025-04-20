import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const model = {
  name: {
    type: String,
    required: true,
  },
  isFasting: {
    type: Boolean,
    required: true,
    default: false,
  },
  isDiabetic: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const medicalTestSchema = new mongoose.Schema(model, { timestamps: true });

const MedicalTest = mongoose.model(
  "MedicalTest",
  medicalTestSchema,
  process.env.TEST_COLLECTION
);

export default MedicalTest;
