import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './Produto/entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_nutricare',
      entities: [Produto],

      synchronize: true
    }) ],

  controllers: [],
  providers: [],
  }) 
export class AppModule {}
