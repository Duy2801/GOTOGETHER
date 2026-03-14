import { Module } from "@nestjs/common";
import { CloudinaryProvider } from "./cloudinary.provider";
import { CloudinaryService } from "./cloudinary.service";
import { StorageController } from "./storage.controller";

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  controllers: [StorageController],
  exports: [CloudinaryService],
})
export class StorageModule {}
