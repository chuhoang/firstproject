const Task = require('../models/task')
const GetAllTasks = async (req, res)=> {
    const AllTask = await Task.find({})
    res.status(200).json({AllTask})
}
const CreateTasks = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const GetTaskbyId = async (req, res)=>{
    const id = req.params.id
    const getTaskbyId = await Task.findById(id).exec()
    res.status(200).json({getTaskbyId})
}
const DeleteTaskbyId = async (req, res)=>{
    const id = req.params.id
    await Task.findByIdAndDelete(id)
    res.status(200).send("Successfull")
}
const UpdateTask = async (req, res)=>{
    const newObj = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({newObj})
}
module.exports = {
    GetAllTasks,
    CreateTasks,
    DeleteTaskbyId,
    UpdateTask,
    GetTaskbyId
}