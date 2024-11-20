import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RecomendacionesService } from 'src/services/RecomendacionesService'; // Servicio de Recomendaciones

@Controller('recomendaciones')  // Ruta base para las recomendaciones
export class RecomendacionesController {
  constructor(private readonly recomendacionesService: RecomendacionesService) {}

  @Get()
  obtenerRecomendaciones() {
    return this.recomendacionesService.obtenerRecomendaciones();  // Obtener todas las recomendaciones
  }

  @Post()
  crearRecomendacion(@Body() datos: { id_usuario: number; id_pelicula: number; id_serie: number; mensaje_recomendacion: string }) {
    return this.recomendacionesService.crearRecomendacion(datos);  // Crear una nueva recomendación
  }

  @Delete(':id')
  eliminarRecomendacion(@Param('id') id: number) {
    return this.recomendacionesService.eliminarRecomendacion(id);  // Eliminar una recomendación por ID
  }
}
