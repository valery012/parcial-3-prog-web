import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReseñasService } from 'src/services/ReseñasService'; // Servicio de Reseñas

@Controller('reseñas')  // Ruta base para las reseñas
export class ReseñasController {
  constructor(private readonly reseñasService: ReseñasService) {}

  @Get()
  obtenerReseñas() {
    return this.reseñasService.obtenerReseñas();  // Obtener todas las reseñas
  }

  @Post()
  crearReseña(@Body() datos: {
    id_usuario: number;
    id_pelicula?: number;
    id_serie?: number;
    comentario: string;
    calificacion: number;
  }) {
    return this.reseñasService.crearReseña(datos);  // Crear una nueva reseña
  }

  @Put(':id')
  actualizarReseña(@Param('id') id: number, @Body() datos: Partial<{
    id_usuario: number;
    id_pelicula?: number;
    id_serie?: number;
    comentario: string;
    calificacion: number;
  }>) {
    return this.reseñasService.actualizarReseña(id, datos);  // Actualizar reseña
  }

  @Delete(':id')
  eliminarReseña(@Param('id') id: number) {
    return this.reseñasService.eliminarReseña(id);  // Eliminar reseña
  }
}
