import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class ReseñasService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las reseñas
  async obtenerReseñas() {
    return this.prisma.resenas.findMany({
      include: {
        usuario: true,
        pelicula: true,
        serie: true,
      },
    });
  }

  // Crear una nueva reseña
  async crearReseña(datos: {
    id_usuario: number;
    id_pelicula?: number;
    id_serie?: number;
    comentario: string;
    calificacion: number;
  }) {
    return this.prisma.resenas.create({
      data: {
        id_usuario: datos.id_usuario,
        id_pelicula: datos.id_pelicula,
        id_serie: datos.id_serie,
        comentario: datos.comentario,
        calificacion: datos.calificacion,
      },
    });
  }

  // Actualizar una reseña
  async actualizarReseña(id: number, datos: Partial<{
    id_usuario: number;
    id_pelicula?: number;
    id_serie?: number;
    comentario: string;
    calificacion: number;
  }>) {
    return this.prisma.resenas.update({
      where: { id_resena: id },
      data: datos,
    });
  }

  // Eliminar una reseña
  async eliminarReseña(id: number) {
    return this.prisma.resenas.delete({
      where: { id_resena: id },
    });
  }
}
