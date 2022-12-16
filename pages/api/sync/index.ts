import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";
import { base } from "lib/airtable";
import { index } from "lib/algolia";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { limit, offset } = req.query;
    const products: any = [];
    base("Furniture")
      .select({
        maxRecords: JSON.parse(limit as string),
        pageSize: 10,
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          products.push(record);
        });

        fetchNextPage();
      })
      .then(() => {
        index.saveObjects(products, {
          autoGenerateObjectIDIfNotExist: true,
        });
        res.json("done!");
      });
  },
});
