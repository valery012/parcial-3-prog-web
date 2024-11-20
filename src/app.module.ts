import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from 'src/modules/UsuariosModule';
import { PeliculasModule } from 'src/modules/PeliculasModule'; // ojo todavia no esta creado 
import { PrismaService} from 'prisma/prisma.service';
import { SeriesModule } from 'src/modules/SeriesModule';
import { ListasDeSeguimientoModule } from 'src/modules/ListaSeguimientoModule'; 
import { ComentariosModule } from './modules/ComentariosModule';
import { RecomendacionesModule } from './modules/RecomendacionesModule';
import { GenerosModule } from './modules/GenerosModule';
@Module({
  imports: [UsuariosModule, PeliculasModule,SeriesModule,ListasDeSeguimientoModule,ComentariosModule,RecomendacionesModule,GenerosModule, PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
