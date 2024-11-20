import { Module } from '@nestjs/common';
import { ReseñasController } from 'src/controller/ReseñasController'; // Controlador de Reseñas
import { ReseñasService } from 'src/services/ReseñasService'; // Servicio de Reseñas
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [ReseñasController],  // Controlador de Reseñas
  providers: [ReseñasService, PrismaService],  // Proveedores
})
export class ReseñasModule {}
