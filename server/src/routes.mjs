import express from "express";
import * as ImageController from "./controllers/ImageController.mjs";
const router = express.Router();

// GET /card/search
router.get("/images/search/:imageText", ImageController.searchImage);

export default router