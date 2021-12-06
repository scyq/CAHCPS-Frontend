// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

let dynamic = require("/data/dynamic.json");

export default function handler(req, res) {
  res.status(200).json(dynamic);
}
