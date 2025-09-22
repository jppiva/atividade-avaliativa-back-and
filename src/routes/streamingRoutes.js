import express from "express";
import { getAllStreamingTable, getStreamingTableById } from "../controllers/streamingControllers.js";

const router = express.Router();

router.get("/", getAllStreamingTable);
router.get("/:id", getStreamingTableById)

export default router;