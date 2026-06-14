import { File } from '../../model/file.js';
export const file_services = {
    async getFileExtractions() {
        return File.find().sort({ createdAt: -1 });
    },
    async getFileExtractionById(id) {
        return File.findById(id);
    },
    async deleteFileExtraction(id) {
        return File.findByIdAndDelete(id);
    }
}
