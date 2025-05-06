import { RequestHandler, Response, Request } from "express";
import Patient from "../../models/patient.model";
import { PatientType } from "../../constants/commonTypes";

const fetchPatients: RequestHandler = async (req: Request, res: Response) => {
  // This will result in an unhandled promise rejection
  const patientList: PatientType[] = await Patient.find({});
  try {
    if (!patientList) {
      res.status(404).json({ message: "Patient not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESSFULLY FETCHED", body: patientList });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching patients", error });
  }
};

export default fetchPatients;
