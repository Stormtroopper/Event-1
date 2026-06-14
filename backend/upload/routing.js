import express from 'express';
import { extractImageText } from './services/extractImageText';
import { extractPdfText } from './services/extractPdfText';
import { extractCsvText } from './services/extractCsvText';
const router=express.Router();
router.post("/upload-file", upload.single("file"), async (req, res, next) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "File is required",
      });
    }

    let extractedText = "";
    let fileType = "";

    if (file.mimetype === "application/pdf") {
      fileType = "PDF";
      extractedText = await extractPdfText(file.path);
    } 
    else if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
      fileType = "IMAGE";
      extractedText = await extractImageText(file.path);
    } 
    else if (
      file.mimetype === "text/csv" ||
      file.mimetype === "application/vnd.ms-excel"
    ) {
      fileType = "CSV";
      extractedText = await extractCsvText(file.path);
    } 
    else {
      return res.status(400).json({
        message: "Unsupported file type",
      });
    }

    const savedFile = await File.create({
      user: req.userId,
      originalFileName: file.originalname,
      extractedText,
      fileSize: file.size,
      pageCount: fileType === "PDF" ? 1 : 0,
      status: "COMPLETED",
      fileType,
    });

    res.status(201).json({
      success: true,
      file: savedFile,
    });
  } 
  catch (error) {
    next(error);
  }
});