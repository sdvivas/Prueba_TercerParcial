const sql = require("../util/database.js");

const Subcategoria = function (subcategoria) {

    this.cod_sub_categoria = subcategoria.cod_sub_categoria;
    this.cod_categoria = subcategoria.cod_categoria;
    this.nombre = subcategoria.nombre;
    this.descripcion = subcategoria.descripcion;
    this.fecha_creacion = subcategoria.fecha_creacion;
};


Subcategoria.getAllCategories = result =>{
    sql.query("SELECT * FROM CATEGORIA", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }else{
            console.log("categoria: ", res);
            result(null, res);
        }        
    });
}


Subcategoria.getSubcategorias = (cod_categoria, result) => {

    sql.query(`SELECT * FROM SUBCATEGORIA  WHERE COD_CATEGORIA = ${cod_categoria}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }else {
            console.log("subcategoria: ", res);
            result(null, res);
          }
        
    });
}

Subcategoria.delete = (cod_subcategoria, result) => {

    sql.query("DELETE FROM SUBCATEGORIA WHERE COD_SUB_CATEGORIA = ?", cod_subcategoria, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted employee with cod: ", cod);
        result(null, res);
        
    });
}


Subcategoria.create = (newSubcateria, result) => {
    sql.query("INSERT INTO SUBCATEGORIA SET ?", newSubcateria, (err, res) => {
      if (err) {
        console.log("error:", err);
        result(err, null);
        return;
      }
    });
  };

Subcategoria.findByCod = (codSubcategoria, result) => {
    sql.query(`SELECT * FROM SUBCATEGORIA WHERE COD_SUB_CATEGORIA = ${codSubcategoria}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Subcategoria encontrado: ", res[0]);
            result(null, res[0]);
            return;
          }
        result({ kind: "not_found" }, null);
    });
};
module.exports = Subcategoria;