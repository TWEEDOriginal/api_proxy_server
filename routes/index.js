import express from "express";
import needle from "needle";
import url from "url";
import dotenv from "dotenv";
import apicache from "apicache";

const router = express.Router();
dotenv.config();
let cache = apicache.middleware
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get("/", cache('2 minutes'), async (req, res) => { 
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const api_res = await needle("get", `${API_BASE_URL}?${params}`);
    const data = api_res.body;
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
