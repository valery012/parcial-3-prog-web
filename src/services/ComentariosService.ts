import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class ComentariosService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los comentarios
  async obtenerComentarios() {
    return this.prisma.comentarios.findMany({
      include: {
        resena: true,  // Relaciona con la reseña a la que pertenece el comentario
        usuario: true,  // Relaciona con el usuario que hizo el comentario
      },
    });
  }

  // Crear un nuevo comentario
  async crearComentario(datos: { id_resena: number; id_usuario: number; comentario: string }) {
    return this.prisma.comentarios.create({
      data: {
        id_resena: datos.id_resena,
        id_usuario: datos.id_usuario,
        comentario: datos.comentario,
      },
    });
  }

  // Eliminar un comentario por ID
  async eliminarComentario(id: number) {
    return this.prisma.comentarios.delete({
      where: { id_comentario: id },
    });
  }
}
