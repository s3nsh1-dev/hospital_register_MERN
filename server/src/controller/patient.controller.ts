import { RequestHandler, Request, Response } from "express";

export const fetchPatients: RequestHandler = (req: Request, res: Response) => {
  res.send("fetching");
};
export const addPatient: RequestHandler = (req: Request, res: Response) => {
  res.send("adding");
};
export const deletePatient: RequestHandler = (req: Request, res: Response) => {
  res.send("deleting");
};
export const updatePatient: RequestHandler = (req: Request, res: Response) => {
  res.send("updating");
};

export const updatePatientUsername: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.send("updating");
};
