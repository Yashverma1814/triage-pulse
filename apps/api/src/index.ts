import express from "express";
import cors from "cors";
import { APP_NAME } from "@triage/shared-core";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", app: APP_NAME });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`${APP_NAME} API running on port ${PORT}`);
});
