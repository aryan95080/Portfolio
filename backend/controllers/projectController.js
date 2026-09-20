import Project from "../models/Project.js";

// GET /api/projects
async function getProjects(req, res) {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects." });
  }
}

// GET /api/projects/:id
async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project." });
  }
}

// POST /api/projects
async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({
      error: "Failed to create project.",
      details: err.message,
    });
  }
}

// PUT /api/projects/:id
async function updateProject(req, res) {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.json(project);
  } catch (err) {
    res.status(400).json({
      error: "Failed to update project.",
      details: err.message,
    });
  }
}

// DELETE /api/projects/:id
async function deleteProject(req, res) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.json({ message: "Project deleted." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project." });
  }
}

export default {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};