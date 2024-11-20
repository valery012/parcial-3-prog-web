import { Module } from '@nestjs/common';
import { GenerosController } from 'src/controller/GenerosController'; // Controlador de Géneros
import { GenerosService } from 'src/services/GenerosService'; // Servicio de Géneros
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [GenerosController],  // Controlador de Géneros
  providers: [GenerosService, PrismaService],  // Proveedores
})
export class GenerosModule {}
