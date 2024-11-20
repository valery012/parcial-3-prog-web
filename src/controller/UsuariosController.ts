import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from 'src/services/UsuarioService';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  obtenerUsuarios() {
    return this.usuariosService.obtenerUsuarios();
  }

  @Post()
  crearUsuario(@Body() datos: { nombre: string; email: string; contraseña: string; rol: string }) {
    return this.usuariosService.crearUsuario(datos);
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id: string, @Body() datos: Partial<{ nombre: string; email: string; contraseña: string; rol: string }>) {
    return this.usuariosService.actualizarUsuario(Number(id), datos);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: string) {
    return this.usuariosService.eliminarUsuario(Number(id));
  }
}
