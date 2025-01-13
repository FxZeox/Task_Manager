const express = require("express");
const { getTasks, createTask } = require("../controllers/taskController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getTasks).post(protect, createTask);

module.exports = router;
