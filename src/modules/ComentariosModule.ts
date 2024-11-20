import { Module } from '@nestjs/common';
import { ComentariosController } from 'src/controller/ComentariosController'; // Controlador de Comentarios
import { ComentariosService } from 'src/services/ComentariosService'; // Servicio de Comentarios
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [ComentariosController],  // Controlador de Comentarios
  providers: [ComentariosService, PrismaService],  // Proveedores
})
export class ComentariosModule {}
