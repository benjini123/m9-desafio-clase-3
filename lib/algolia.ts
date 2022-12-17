import algoliasearch from "algoliasearch";
import "dotenv/config";

const client = algoliasearch("K98RO3JPW0", "8b530da2581ed56ffc453104c1734878");

export const index = client.initIndex("products");
