import { Module } from '@nestjs/common';
import { SeriesController } from 'src/controller/SeriesController'; // Controlador de Series
import { SeriesService } from 'src/services/SeriesService'; // Servicio de Series
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [SeriesController],  // Controladores de Series
  providers: [SeriesService, PrismaService],  // Proveedores
})
export class SeriesModule {}
