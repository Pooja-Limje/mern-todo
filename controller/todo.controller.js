const todo = require("../models/todo")

exports.getAllTodos = async (req, res) => {
    try {
        const result = await todo.find()
        res.json({ message: "todo fetch success", result })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to fetch todos" })
    }
}

exports.addTodos = async (req, res) => {
    try {
        await todo.create(req.body)
        res.json({ message: "todo add success" })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "Invalid request data" })
    }
}

exports.updateTodos = async (req, res) => {
    try {
        await todo.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: "todo update success" })
    } catch (error) {
        console.error(error)
        res.status(404).json({ message: "Todo not found" })
    }
}

exports.deleteTodos = async (req, res) => {
    try {
        await todo.findByIdAndDelete(req.params.id)
        res.json({ message: "todo delete success" })
    } catch (error) {
        console.error(error)
        res.status(404).json({ message: "Todo not found" })
    }
}