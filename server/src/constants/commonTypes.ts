export type DischargedPatientType = {
  name: string;
  age: number;
  discharge_date: Date;
  illness_id: number;
};
export type ActivePatientType = Omit<DischargedPatientType, "dischargeDate">;
export type PatientType = ActivePatientType | DischargedPatientType;

export type IllnessType = {
  id: number;
  type: string[];
  patient: { name: string; id: number };
};
