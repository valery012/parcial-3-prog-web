import { Module } from '@nestjs/common';
import { PeliculasController } from 'src/controller/PeliculaController'; // Controlador de Películas
import { PeliculasService } from 'src/services/PeliculaService'; // Servicio de Películas
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [PeliculasController],  // Sección de controladores
  providers: [PeliculasService, PrismaService],  // Proveedores
})
export class PeliculasModule {}
