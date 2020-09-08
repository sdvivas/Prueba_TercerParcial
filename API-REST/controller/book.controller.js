const Book = require('../model/book.model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const book = new Book({
        titulo: req.body.titulo,
        autor: req.body.autor,
        fecha_publicacion: req.body.fecha_publicacion,
        precio: req.body.precio,
        paginas: req.body.paginas
    });
    Book.create(book, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el libro."
            });
        else res.send(data);
    });
};
exports.findAll = (req, res) => {
    Book.getAll((err,data) =>{
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

exports.findOne = (req, res) => {
    Book.findById(req.params.codBook, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Libro  no encontrada con el codigo:  ${req.params.codBook}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar Libro con id " + req.params.codBook
                });
            }
        } else {
            res.send(data);
        }
    });
};