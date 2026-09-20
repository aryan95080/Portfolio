import express from "express";
import contactController from "../controllers/contactController.js";

const router = express.Router();

router.post("/", contactController.submitMessage);
router.get("/", contactController.getMessages);

export default router;