import express from "express";
import { getAllStreamingTable } from "../controllers/streamingControllers.js";

const router = express.Router();

router.get("/", getAllStreamingTable);

export default router;