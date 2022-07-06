import  {usersGet,usersDelete,usersPost,usersPut}  from "../controllers/users.js";
import { Router } from "express";
const router = Router();

router.get('/', usersGet)

router.put('/:id', usersPut)

router.post('/', usersPost)

router.delete('/', usersDelete)



export{router};