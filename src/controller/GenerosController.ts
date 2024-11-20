import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GenerosService } from 'src/services/GenerosService'; // Servicio de Géneros

@Controller('generos')  // Ruta base para los géneros
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Get()
  obtenerGeneros() {
    return this.generosService.obtenerGeneros();  // Obtener todos los géneros
  }

  @Get(':id')
  obtenerGenero(@Param('id') id: number) {
    return this.generosService.obtenerGenero(id);  // Obtener un género por ID
  }

  @Post()
  crearGenero(@Body() datos: { nombre_genero: string; descripcion: string }) {
    return this.generosService.crearGenero(datos);  // Crear un nuevo género
  }

  @Put(':id')
  actualizarGenero(@Param('id') id: number, @Body() datos: { nombre_genero: string; descripcion: string }) {
    return this.generosService.actualizarGenero(id, datos);  // Actualizar un género por ID
  }

  @Delete(':id')
  eliminarGenero(@Param('id') id: number) {
    return this.generosService.eliminarGenero(id);  // Eliminar un género por ID
  }
}
