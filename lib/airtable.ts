import Airtable from "airtable";
import "dotenv/config";

export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_API_BASE as string
);
