import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // PrismaService

@Injectable()
export class SeriesService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las series
  async obtenerSeries() {
    return this.prisma.series.findMany({
      include: { 
        genero: true,  // Incluye los géneros de las series
      },
    });
  }

  // Crear una nueva serie
  async crearSerie(datos: { 
    titulo: string; 
    sinopsis: string; 
    num_temporadas: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }) {
    return this.prisma.series.create({
      data: datos,  // Usamos los datos proporcionados para crear la serie
    });
  }

  // Actualizar una serie
  async actualizarSerie(id: number, datos: Partial<{ 
    titulo: string; 
    sinopsis: string; 
    num_temporadas: number; 
    fecha_estreno: string; 
    director: string; 
    pais_origen: string;
    id_genero: number;
  }>) {
    return this.prisma.series.update({
      where: { id_serie: id },
      data: datos,  // Actualizamos la serie con los nuevos datos
    });
  }

  // Eliminar una serie
  async eliminarSerie(id: number) {
    return this.prisma.series.delete({
      where: { id_serie: id },  // Elimina la serie por su ID
    });
  }
}
