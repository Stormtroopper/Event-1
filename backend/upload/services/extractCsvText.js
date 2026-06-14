import fs from "fs";
import Papa from "papaparse";

export const extractCsvText = async (filePath) => {
  const csvContent = fs.readFileSync(filePath, "utf-8");

  const parsed = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  return JSON.stringify(parsed.data, null, 2);
};