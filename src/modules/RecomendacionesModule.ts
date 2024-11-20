import { Module } from '@nestjs/common';
import { RecomendacionesController } from 'src/controller/RecomendacionesController';  // Controlador de Recomendaciones
import { RecomendacionesService } from 'src/services/RecomendacionesService';  // Servicio de Recomendaciones
import { PrismaService } from 'prisma/prisma.service';  // PrismaService

@Module({
  imports: [],
  controllers: [RecomendacionesController],  // Controlador de Recomendaciones
  providers: [RecomendacionesService, PrismaService],  // Proveedores
})
export class RecomendacionesModule {}
