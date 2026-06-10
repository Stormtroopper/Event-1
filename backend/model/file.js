import mongoose from "mongoose";
const FileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  originalFileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    enum: ["PDF", "IMAGE", "CSV"],
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  extractedText: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["PENDING", "PROCESSING", "COMPLETED", "FAILED"],
    default: "COMPLETED",
  },
}, {
  timestamps: true
});
export const File = mongoose.model("PDF_File", FileSchema);