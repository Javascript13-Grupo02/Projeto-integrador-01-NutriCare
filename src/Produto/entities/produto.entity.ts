import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(5, 100, {message: 'O nome  deve ter entre 5 e 100 caracteres'}) 
    @Column({length: 100, nullable: false})
    nome: string;

    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(10, 255, {message: 'A descrição deve ter entre 10 e 255 caracteres'})
    @Column({length: 255, nullable: false})
    descricao: string;

    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty() 
    @Length(5, 100, {message: 'A categoria deve ter entre 5 e 100 caracteres'})
    @Column({length: 100, nullable: false})
    categoria: string;

    @IsPositive()
    @IsNotEmpty() 
    @Column()
    calorias: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    @IsNotEmpty() 
    @Column({ type: 'decimal', precision: 6, scale: 2 })
    preco: number;

    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty() 
    @Column({length: 1, nullable: false})
    nutriscore: string;
    
}