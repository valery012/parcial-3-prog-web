import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class RecomendacionesService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las recomendaciones
  async obtenerRecomendaciones() {
    return this.prisma.recomendaciones.findMany({
      include: {
        usuario: true,  // Relaciona con el usuario que hizo la recomendación
        pelicula: true, // Relaciona con la película recomendada
        serie: true,    // Relaciona con la serie recomendada
      },
    });
  }

  // Crear una nueva recomendación
  async crearRecomendacion(datos: { id_usuario: number; id_pelicula: number; id_serie: number; mensaje_recomendacion: string }) {
    return this.prisma.recomendaciones.create({
      data: {
        id_usuario: datos.id_usuario,
        id_pelicula: datos.id_pelicula,
        id_serie: datos.id_serie,
        mensaje_recomendacion: datos.mensaje_recomendacion,
      },
    });
  }

  // Eliminar una recomendación por ID
  async eliminarRecomendacion(id: number) {
    return this.prisma.recomendaciones.delete({
      where: { id_recomendacion: id },
    });
  }
}
