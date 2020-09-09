
module.exports = app => {
    const subcategories = require("../controller/subcategorias.controller");
    app.get("/categorias", subcategories.findAllCategories);
    app.post("/newSubcategoria", subcategories.create);
    app.get("/subcategorias/:cod_categoria", subcategories.findSubCategorias);
    app.get("/subcategoria/:cod_subCategoria", subcategories.findSubCategoriaByCod);
    app.get("/delete/:cod_subCategoria", subcategories.deleteSubcategoria);

};