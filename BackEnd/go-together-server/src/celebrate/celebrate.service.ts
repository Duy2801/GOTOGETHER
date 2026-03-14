import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCelebrateDTO } from "./dto/celebrate.dto";
import { UpdateCelebrateDTO } from "./dto/update-celebrate.dto";

@Injectable()
export class CelebrateService {
  constructor(private prisma: PrismaService) {}

  async getAllCelebrate(userId: string) {
    const celebrate = this.prisma.celebrate.findMany({
      where: { userId },
      include: {
        trip: {
          select: {
            id: true,
            name: true,
            startDate: true,
            endDate: true,
            images: true,
            status: true,
          },
        },
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
        images: true,
      },
      orderBy: { date: "desc" },
    });
    return celebrate;
  }
  async createCelebrate(userId: string, data: CreateCelebrateDTO) {
    const imageList = Array.isArray(data.images) ? data.images : [];
    const celebrate = await this.prisma.celebrate.create({
      data: {
        userId,
        tripId: data.tripId,
        description: data.description,
        date: new Date(data.date),
        images: {
          create: imageList.map((img) => ({
            imageUrl: img,
          })),
        },
      },
      include: {
        images: true,
      },
    });
    return celebrate;
  }
  async updateCelebrate(
    celebrateId: string,
    userId: string,
    data: UpdateCelebrateDTO,
  ) {
    const celebrate = await this.prisma.celebrate.findUnique({
      where: { id: celebrateId },
    });

    if (!celebrate) throw new NotFoundException("Celebrate not found");
    if (celebrate.userId !== userId)
      throw new ForbiddenException("celebrate.forbidden");

    return this.prisma.celebrate.update({
      where: { id: celebrateId },
      data: {
        ...(data.date && { date: new Date(data.date) }),
        ...(data.description !== undefined && {
          description: data.description,
        }),

        ...(data.images && {
          images: {
            deleteMany: {},
            create: data.images.map((img) => ({
              imageUrl: img,
            })),
          },
        }),
      },
      include: {
        images: true,
      },
    });
  }
}
