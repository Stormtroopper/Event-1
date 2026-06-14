import { file_services } from "../services/file_services";
export const file_provider = {
    async getExtraction() {
        try {
            return await file_services.getFileExtractions();
        }
        catch (error) {
            console.error('Cant file the files!');
        }
    },
    async getExtractionById(id) {
        try {
            const file = await file_services.getFileExtractionById(id);
            if (!file) {
                throw new Error('Bitch fetch me the right file!')
            }
            return file;
        }
        catch (error) {
            console.error(`Cant find the file ${id}`);
        }
    },
    async deleteExtraction(id) {
        try {
            const deletedFile = await file_services.deleteFileExtraction(id);
            if (!deletedFile) throw new Error('deletion unsuccesfull.');
        }
        catch (error) {
            console.error('Unsuccesfull operation');
        }
    }
}