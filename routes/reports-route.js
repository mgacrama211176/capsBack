import express from "express";
import { viewReports, addReport } from "../controllers/reports-controller.js";

const router = express();

router.get("/All", viewReports);
router.post("/addReport/:currentUser/:channelName", addReport);

export default router;
