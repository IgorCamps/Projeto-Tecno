import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaConhecimentoModule } from './area-conhecimento/area-conhecimento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // ou qualquer outro banco de dados
      database: 'database.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AreaConhecimentoModule,
  ],
})
export class AppModule {}
