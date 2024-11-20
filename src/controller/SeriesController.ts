import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SeriesService } from 'src/services/SeriesService'; // Servicio de Series

@Controller('series')  // Define la ruta base para Series
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  obtenerSeries() {
    return this.seriesService.obtenerSeries();  // Obtener todas las series
  }

  @Post()
  crearSerie(@Body() datos: { 
    titulo: string; 
    sinopsis: string; 
    num_temporadas: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }) {
    return this.seriesService.crearSerie(datos);  // Crear una nueva serie
  }

  @Put(':id')
  actualizarSerie(
    @Param('id') id: number, 
    @Body() datos: Partial<{ 
      titulo: string; 
      sinopsis: string; 
      num_temporadas: number; 
      fecha_estreno: string; 
      director: string; 
      pais_origen: string;
      id_genero: number;
    }>
  ) {
    return this.seriesService.actualizarSerie(id, datos);  // Actualizar una serie por ID
  }

  @Delete(':id')
  eliminarSerie(@Param('id') id: number) {
    return this.seriesService.eliminarSerie(id);  // Eliminar una serie por ID
  }
}
