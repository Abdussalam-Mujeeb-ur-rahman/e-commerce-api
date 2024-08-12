import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true,
        })
    }

    async uploadImage(file: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(file, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }

    async deleteImage(publicId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.destroy(publicId, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
}