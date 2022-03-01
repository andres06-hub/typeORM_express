import { Request, Response } from 'express';
//  Con el getRepository es pedir una tabla y pasarle la tabla 
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

// controllador para obtener usuarios
export const getUser = async(req: Request, res: Response) => {
    // Lo que hace esto es que busca los datos en la tabla que le pasemos
    // Es como un 'select' 
    // Es asincrono porque la base de datos va a tomar tiempo 
    const users = await getRepository(User).find();
    
    // Responemos con los datos obtenidos de la DB
    return res.json(users);
};

// Controlador para crear usuarios para
export const createUser = async (req:Request, res:Response)=>{

    // Obtengo los datos del cliente
    // req.body();
    // Creamos un nuevo usuario 
    const newUser = getRepository(User).create(req.body);
    // Guardamos el nuevo usuario
    // Y nos devuelve los resultados
    const result = await getRepository(User).save(newUser);
    // Retornamos los resultados 
    return res.json(result);
};