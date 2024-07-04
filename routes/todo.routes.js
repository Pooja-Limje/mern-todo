const express = require("express");
const router = express.Router();

const todoController = require("../controller/todo.controller");

router
    .get("/", todoController.getAllTodos)
    .post("/", todoController.addTodos)
    .put("/:id", todoController.updateTodos)
    .delete("/:id", todoController.deleteTodos);

module.exports = router;