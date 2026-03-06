import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Produto])], // modulo importado para permirtir o uso de TemaService
    controllers: [],
    providers: [],
    exports:[]
})

export class PodutoModule{}