import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class PeliculasService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las películas
  async obtenerPeliculas() {
    return this.prisma.peliculas.findMany({
      include: { 
        genero: true,  // Incluye los géneros de las películas
      },
    });
  }

  // Crear una nueva película
  async crearPelicula(datos: { 
    titulo: string; 
    sinopsis: string; 
    duracion: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }) {
    return this.prisma.peliculas.create({
      data: datos,  // Usamos los datos proporcionados para crear la película
    });
  }

  // Actualizar una película
  async actualizarPelicula(id: number, datos: Partial<{ 
    titulo: string; 
    sinopsis: string; 
    duracion: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }>) {
    return this.prisma.peliculas.update({
      where: { id_pelicula: id },
      data: datos,  // Actualizamos la película con los nuevos datos
    });
  }

  // Eliminar una película
  async eliminarPelicula(id: number) {
    return this.prisma.peliculas.delete({
      where: { id_pelicula: id },  // Elimina la película por su ID
    });
  }
}
