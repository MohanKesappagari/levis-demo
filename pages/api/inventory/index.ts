import type { NextApiRequest, NextApiResponse } from "next";
import { INVENTORY } from "../../../global/constants/inventory";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(INVENTORY);
}
