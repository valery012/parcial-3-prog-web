import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PeliculasService } from 'src/services/PeliculaService'; // Servicio de Películas

@Controller('peliculas')  // Define la ruta base para Películas
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Get()
  obtenerPeliculas() {
    return this.peliculasService.obtenerPeliculas();  // Obtener todas las películas
  }

  @Post()
  crearPelicula(@Body() datos: { 
    titulo: string; 
    sinopsis: string; 
    duracion: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }) {
    return this.peliculasService.crearPelicula(datos);  // Crear una nueva película
  }

  @Put(':id')
  actualizarPelicula(
    @Param('id') id: number, 
    @Body() datos: Partial<{ 
      titulo: string; 
      sinopsis: string; 
      duracion: number; 
      fecha_estreno: string; 
      director: string; 
      pais_origen: string;
      id_genero: number;
    }>
  ) {
    return this.peliculasService.actualizarPelicula(id, datos);  // Actualizar una película por ID
  }

  @Delete(':id')
  eliminarPelicula(@Param('id') id: number) {
    return this.peliculasService.eliminarPelicula(id);  // Eliminar una película por ID
  }
}
