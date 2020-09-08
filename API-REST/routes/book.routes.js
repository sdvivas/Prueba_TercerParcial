
module.exports = app => {
    const books = require("../controller/book.controller");
    app.get("/books", books.findAll);
    app.get("/book/:codBook", books.findOne);
    app.post("/book/create",books.create)
};