import mongoose from "mongoose";

export type DischargedPatientType = {
  name: string;
  age: number;
  discharge_date: Date;
  illness: mongoose.Types.ObjectId | IllnessType;
  story: mongoose.Types.ObjectId | StoryType;
};
export type ActivePatientType = Omit<DischargedPatientType, "dischargeDate">;
export type PatientType = ActivePatientType | DischargedPatientType;

export type IllnessType = {
  id: string;
  type: string[];
};

export type StoryType = {
  summary: string;
  fir_filed: boolean;
  insurance_covered: boolean;
};
