const sql = require("../util/database.js");

const Book = function (book) {

    this.titulo = book.titulo;
    this.autor = book.autor;
    this.fecha_publicacion = book.fecha_publicacion;
    this.precio = book.precio;
    this.paginas = book.paginas;
};
Book.create = (newBook, result) => {
    sql.query("INSERT INTO libro SET ?", newBook, (err, res) => {
      if (err) {
        console.log("error:", err);
        result(err, null);
        return;
      }
    });
  };

Book.getAll = result => {
    sql.query("SELECT * FROM libro", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }else{
            console.log("libro: ", res);
            result(null, res);
        }        
    });
};

Book.findById = (codBook, result) => {
    sql.query(`SELECT * FROM libro WHERE codigo = ${codBook}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Libro encontrado: ", res[0]);
            result(null, res[0]);
            return;
          }
        result({ kind: "not_found" }, null);
    });
};


module.exports = Book;