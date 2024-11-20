import { Module } from '@nestjs/common';

import { UsuariosController } from 'src/controller/UsuariosController';
import { UsuariosService } from 'src/services/UsuarioService';
import { PrismaService } from 'prisma/prisma.service'; 

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService],
})
export class UsuariosModule {}
