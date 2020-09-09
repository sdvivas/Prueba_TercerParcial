const Subcategorias = require('../model/subcategoria.model');

exports.findAllCategories = (req, res) => {
    Subcategorias.getAllCategories((err,data) =>{
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio mientras se recuperada"
            });
        } else {
            res.status(200).send(data);
        }
    });
};


exports.findSubCategorias = (req, res) => {
    Subcategorias.getSubcategorias(req.params.cod_categoria, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Libro  no encontrada con el codigo:  ${req.params.cod_categoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar Libro con id " + req.params.cod_categoria
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const subcategoria = new Subcategorias({

        cod_sub_categoria : req.body.COD_SUB_CATEGORIA,
        cod_categoria : req.body.COD_CATEGORIA,
        nombre : req.body.NOMBRE,
        descripcion : req.body.DESCRIPCION,
        fecha_creacion : req.body.FECHA_CREACION
    });

    Subcategorias.create(subcategoria, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando la categoria."
            });
        else res.send(data);
    });
};

exports.findSubCategoriaByCod = (req, res) => {
    Subcategorias.findByCod(req.params.cod_subCategoria, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Subcategoria  no encontrada con el codigo:  ${req.params.cod_subCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar categoria con id " + req.params.cod_subCategoria
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.deleteSubcategoria = (req, res) => {
    Subcategorias.delete(req.params.cod_subCategoria, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Subcategoria  no encontrada con el codigo:  ${req.params.cod_subCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar categoria con id " + req.params.cod_subCategoria
                });
            }
        } else {
            res.send(data);
        }
    });
};