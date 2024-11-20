import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class ListasDeSeguimientoService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las listas de seguimiento
  async obtenerListas() {
    return this.prisma.listas_de_seguimiento.findMany({
      include: {
        usuario: true,  // Relaciona el usuario que creó la lista
        peliculas: {
          include: {
            pelicula: true,
          },
        },
        series: {
          include: {
            serie: true,
          },
        },
      },
    });
  }

  // Crear una nueva lista de seguimiento
  async crearLista(datos: { id_usuario: number; nombre_lista: string; descripcion: string }) {
    return this.prisma.listas_de_seguimiento.create({
      data: {
        id_usuario: datos.id_usuario,
        nombre_lista: datos.nombre_lista,
        descripcion: datos.descripcion,
      },
    });
  }

  // Actualizar una lista de seguimiento
  async actualizarLista(id: number, datos: Partial<{ nombre_lista: string; descripcion: string }>) {
    return this.prisma.listas_de_seguimiento.update({
      where: { id_lista: id },
      data: datos,
    });
  }

  // Eliminar una lista de seguimiento
  async eliminarLista(id: number) {
    return this.prisma.listas_de_seguimiento.delete({
      where: { id_lista: id },
    });
  }
}
