import type { NextApiRequest, NextApiResponse } from "next";
import { index } from "lib/algolia";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { q, limit, offset } = req.query;
  index
    .search(q as string, {
      hitsPerPage: 50,
    })
    .then((hits) => {
      res.json({
        results: [hits],
        pagination: {
          offset: offset,
          limit: limit,
          total: hits.nbHits,
        },
      });
    })
    .catch((err) => {
      res.json(err);
    });
}
