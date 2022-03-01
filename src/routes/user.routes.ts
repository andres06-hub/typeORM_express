
import { Router } from "express";
const router = Router();

// Importamos el controlador 
import { getUser, createUser } from '../controllers/user.controller';

router.route('/users')
    .get(getUser)
    .post(createUser)



// Exportamos las rutas
export default router;