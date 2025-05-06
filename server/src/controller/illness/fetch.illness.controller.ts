import { RequestHandler, Request, Response } from "express";
import Illness from "../../models/illness.model";
import { IllnessType } from "../../constants/commonTypes";

const fetchIllness: RequestHandler = async (req: Request, res: Response) => {
  try {
    // This will not result in an unhandled promise rejection as error will get caught
    const illnessList: IllnessType[] = await Illness.find({});
    if (!illnessList) {
      res.status(404).json({ message: "Patient Not Found" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESSFULLY FETCHED", body: illnessList });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching patients", error });
  }
};

export default fetchIllness;
