import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { limiter } from './utils/rate_limit.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(limiter);
app.set('trust proxy', 1)
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
