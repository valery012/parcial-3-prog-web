import { Module } from '@nestjs/common';
import { ListasDeSeguimientoController } from 'src/controller/ListaSeguimientoController'; // Controlador de Listas de Seguimiento
import { ListasDeSeguimientoService } from 'src/services/ListaSeguimientoService'; // Servicio de Listas de Seguimiento
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Module({
  imports: [],
  controllers: [ListasDeSeguimientoController],  // Controlador de Listas de Seguimiento
  providers: [ListasDeSeguimientoService, PrismaService],  // Proveedores
})
export class ListasDeSeguimientoModule {}
