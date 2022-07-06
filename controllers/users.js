import { response, request } from "express";

const usersGet = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Peticion API - Controlador'
    })
}

const usersPut = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Peticion Put - Controlador'
    })
}

const usersPost = (req = request, res = response) => {
    const body = req.body;
    res.json({
        ok: true,
        msg: 'Peticion Post - Controlador',
        body
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Peticion Delete - Controlador'
    })
}


export{usersGet,usersDelete,usersPost,usersPut};