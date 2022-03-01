import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// LLamamos decorador 
@Entity()
// Exportamos y creamos las clase user 
export class User {

    // llamamos los decoradores
    // para definir la tabla  
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

};