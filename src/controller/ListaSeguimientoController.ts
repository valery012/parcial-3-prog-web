import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ListasDeSeguimientoService } from 'src/services/ListaSeguimientoService'; // Servicio de Listas de Seguimiento

@Controller('listas-de-seguimiento')  // Ruta base para las listas de seguimiento
export class ListasDeSeguimientoController {
  constructor(private readonly listasDeSeguimientoService: ListasDeSeguimientoService) {}

  @Get()
  obtenerListas() {
    return this.listasDeSeguimientoService.obtenerListas();  // Obtener todas las listas de seguimiento
  }

  @Post()
  crearLista(@Body() datos: { id_usuario: number; nombre_lista: string; descripcion: string }) {
    return this.listasDeSeguimientoService.crearLista(datos);  // Crear una nueva lista de seguimiento
  }

  @Put(':id')
  actualizarLista(@Param('id') id: number, @Body() datos: Partial<{ nombre_lista: string; descripcion: string }>) {
    return this.listasDeSeguimientoService.actualizarLista(id, datos);  // Actualizar una lista de seguimiento
  }

  @Delete(':id')
  eliminarLista(@Param('id') id: number) {
    return this.listasDeSeguimientoService.eliminarLista(id);  // Eliminar una lista de seguimiento
  }
}
