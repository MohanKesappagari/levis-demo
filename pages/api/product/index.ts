import type { NextApiRequest, NextApiResponse } from "next";
import { DEMO } from "../../../global/constants/demo";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(DEMO);
}
