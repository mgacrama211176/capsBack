import express from "express";
import { Add } from "../controllers/clients-controller.js";

const router = express();

// Clients Information Route Route
router.post("/", Add);

// router.get("/", Read);

// router.put("/", Update);
// router.delete("/", Delete);

export default router;
