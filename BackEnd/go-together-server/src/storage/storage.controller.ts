import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudinaryService } from "./cloudinary.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("upload")
@UseGuards(JwtAuthGuard)
export class StorageController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post("image")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("No file uploaded");
    }

    try {
      const result = await this.cloudinaryService.uploadImage(
        file,
        "gotogether/trips",
      );
      return {
        status: true,
        data: {
          url: result.secure_url,
          publicId: result.public_id,
        },
      };
    } catch (error) {
      throw new BadRequestException("Failed to upload image");
    }
  }

  @Post("receipt")
  @UseInterceptors(FileInterceptor("file"))
  async uploadReceipt(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("No file uploaded");
    }

    try {
      const result = await this.cloudinaryService.uploadImage(
        file,
        "gotogether/receipts",
      );
      return {
        status: true,
        data: {
          url: result.secure_url,
          publicId: result.public_id,
        },
      };
    } catch (error) {
      throw new BadRequestException("Failed to upload receipt");
    }
  }

  @Post("photo")
  @UseInterceptors(FileInterceptor("file"))
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("No file uploaded");
    }

    try {
      const result = await this.cloudinaryService.uploadImage(
        file,
        "gotogether/photos",
      );
      return {
        status: true,
        data: {
          url: result.secure_url,
          publicId: result.public_id,
        },
      };
    } catch (error) {
      throw new BadRequestException("Failed to upload photo");
    }
  }
}
