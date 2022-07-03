import { response } from "express";

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

const usersPost = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Peticion Post - Controlador'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Peticion Delete - Controlador'
    })
}


export{usersGet,usersDelete,usersPost,usersPut};