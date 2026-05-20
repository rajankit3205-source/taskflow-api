import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });


  // Fetch tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };


  useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  } else {
    fetchTasks();
  }

  }, []);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // Create Task
  const createTask = async (e) => {

    e.preventDefault();

    try {

      await API.post("/tasks", formData);

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        status: "pending",
      });

    } catch (error) {

      console.log(error);

    }
  };


  // Delete Task
  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }
  };


  return (
    <div>

      <h2>Dashboard</h2>

      <form onSubmit={createTask}>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Task
        </button>

      </form>


      <hr />

      <h3>Your Tasks</h3>

      {tasks.map((task) => (

        <div
          key={task._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >

          <h4>{task.title}</h4>

          <p>{task.description}</p>

          <p>Status: {task.status}</p>

          <button
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
};

export default Dashboard;