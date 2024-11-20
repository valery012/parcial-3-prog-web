import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ComentariosService } from 'src/services/ComentariosService'; // Servicio de Comentarios

@Controller('comentarios')  // Ruta base para los comentarios
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get()
  obtenerComentarios() {
    return this.comentariosService.obtenerComentarios();  // Obtener todos los comentarios
  }

  @Post()
  crearComentario(@Body() datos: { id_resena: number; id_usuario: number; comentario: string }) {
    return this.comentariosService.crearComentario(datos);  // Crear un nuevo comentario
  }

  @Delete(':id')
  eliminarComentario(@Param('id') id: number) {
    return this.comentariosService.eliminarComentario(id);  // Eliminar un comentario por ID
  }
}
