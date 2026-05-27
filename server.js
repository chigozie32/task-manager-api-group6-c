require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());


// Fake database
let tasks = [
  {
    id: 1,
    title: "Learn Express",
    description: "Study backend basics",
    status: "in progress",
    priority: "high"
  },

  {
    id: 2,
    title: "Build API",
    description: "Create CRUD routes",
    status: "pending",
    priority: "medium"
  },

  {
    id: 3,
    title: "Install Node.js",
    description: "Install Node development environment",
    status: "completed",
    priority: "high"
  },

  {
    id: 4,
    title: "Test API",
    description: "Test all routes using Postman",
    status: "pending",
    priority: "medium"
  },

  {
    id: 5,
    title: "Push to GitHub",
    description: "Upload project files to repository",
    status: "in progress",
    priority: "high"
  },

  {
    id: 6,
    title: "Prepare Presentation",
    description: "Create slides for project defense",
    status: "pending",
    priority: "medium"
  }
];


// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to Task Manager API");
});


// =========================
// READ ROUTES (YOUR PART)
// =========================


// GET ALL TASKS
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


// GET SINGLE TASK
app.get("/tasks/:id", (req, res) => {

  const taskId = parseInt(req.params.id);

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.json(task);
});


// =========================
// CREATE ROUTE (Person B)
// =========================

app.post("/tasks", (req, res) => {

  // Person B should:
  // 1. Create a new task object
  // 2. Add id using tasks.length + 1
  // 3. Get data from req.body
  // 4. Push new task into tasks array
  // 5. Return success message

});


// =========================
// UPDATE ROUTE (Person C)
// =========================

app.put("/tasks/:id", (req, res) => {

  // Person C should:
  // 1. Get task id using req.params.id
  // 2. Find task using find()
  // 3. Check if task exists
  // 4. Update title, description, status, priority
  // 5. Return updated task

});


// =========================
// DELETE ROUTE (Person D)
// =========================

app.delete("/tasks/:id", (req, res) => {

  // Person D should:
  // 1. Get task id from req.params.id
  // 2. Remove task using filter()
  // 3. Return success message

});


// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});