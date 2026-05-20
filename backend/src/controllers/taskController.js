import Task from "../models/Task.js";


// CREATE TASK
export const createTask = async (req, res) => {
  try {

    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET USER TASKS
export const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      createdBy: req.user._id,
    });

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE TASK
export const updateTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    // Only owner can update
    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    task.title = req.body.title || task.title;
    task.description =
      req.body.description || task.description;

    task.status = req.body.status || task.status;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE TASK
export const deleteTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    // Only owner can delete
    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};