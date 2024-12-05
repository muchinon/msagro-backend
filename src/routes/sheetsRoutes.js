import express from "express";
import {
  getAboutSectionData,
  getAllSheetData,
  getBannerData,
  getContactData,
  getFooterData,
  getProjectsData,
  getServicesData,
  getSpecificSheetData,
  getTestimonialsData,
} from "../controllers/sheetsController.js";

const router = express.Router();

router.get("/", getAllSheetData);
router.get("/:range", getSpecificSheetData);

router.get("/banner", getBannerData);

router.get("/about", getAboutSectionData);

router.get("/contact", getContactData);

router.get("/services", getServicesData);

router.get("/projects", getProjectsData);

router.get("/testimonials", getTestimonialsData);

router.get("/footer", getFooterData);

export default router;
