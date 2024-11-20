import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los géneros
  async obtenerGeneros() {
    return this.prisma.generos.findMany();  // Obtener todos los géneros de la base de datos
  }

  // Obtener un género por ID
  async obtenerGenero(id: number) {
    return this.prisma.generos.findUnique({
      where: { id_genero: id },  // Buscar por ID
    });
  }

  // Crear un nuevo género
  async crearGenero(datos: { nombre_genero: string; descripcion: string }) {
    return this.prisma.generos.create({
      data: {
        nombre_genero: datos.nombre_genero,
        descripcion: datos.descripcion,
      },
    });
  }

  // Actualizar un género por ID
  async actualizarGenero(id: number, datos: { nombre_genero: string; descripcion: string }) {
    return this.prisma.generos.update({
      where: { id_genero: id },
      data: {
        nombre_genero: datos.nombre_genero,
        descripcion: datos.descripcion,
      },
    });
  }

  // Eliminar un género por ID
  async eliminarGenero(id: number) {
    return this.prisma.generos.delete({
      where: { id_genero: id },
    });
  }
}
