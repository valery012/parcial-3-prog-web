import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';  // Inyecta PrismaService

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}  // PrismaService inyectado

  // Métodos que usan Prisma para interactuar con la base de datos
  async obtenerUsuarios() {
    return this.prisma.usuarios.findMany();
  }

  async crearUsuario(datos: { nombre: string; email: string; contraseña: string; rol: string }) {
    return this.prisma.usuarios.create({ data: datos });
  }

  async actualizarUsuario(id: number, datos: Partial<{ nombre: string; email: string; contraseña: string; rol: string }>) {
    return this.prisma.usuarios.update({
      where: { id_usuario: id },
      data: datos,
    });
  }

  async eliminarUsuario(id: number) {
    return this.prisma.usuarios.delete({
      where: { id_usuario: id },
    });
  }
}
