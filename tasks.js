const express = require('express')
const router = express.Router()
const{GetAllTasks, CreateTasks, DeleteTaskbyId, GetTaskbyId, UpdateTask} = require('./controller/tasks')
router.route('/').get(GetAllTasks).post(CreateTasks)
router.route('/:id').get(GetTaskbyId).patch(UpdateTask).delete(DeleteTaskbyId)
module.exports = router