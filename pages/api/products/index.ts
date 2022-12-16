import type { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { q, limit, offset } = req.query;
  res.json({
    results: "",
  });
}
