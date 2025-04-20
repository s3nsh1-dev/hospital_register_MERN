export type ActivePatientType = {
  name: string;
  age: number;
  disease: string[];
  entryDate: Date;
  dischargeDate: Date;
};
export type PreviousPatientType = Omit<ActivePatientType, "dischargeDate">;

export type PatientType = ActivePatientType | PreviousPatientType;
