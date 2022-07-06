import { response, request } from "express";

const usersGet = (req = request, res = response) => {

    const {nombre, apikey, edad, q} = req.query;

    res.json({
        ok: true,
        msg: 'Peticion API - Controlador',
        nombre,
        apikey,
        edad,
        q,
    })
}

const usersPut = (req = request, res = response) => {

    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'Peticion Put - Controlador',
        id
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