import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])], // modulo importado para permirtir o uso de TemaService
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [],
})
export class ProdutoModule {}
