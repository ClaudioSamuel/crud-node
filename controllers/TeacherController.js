const Teacher = require('../models/Teacher');

const TeacherController = {
  getAllTeachers: async (req, res) => {
    try {
      const teachers = await Teacher.findAll();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTeacherById: async (req, res) => {
    const { id } = req.params;
    try {
      const teacher = await Teacher.findByPk(id);
      if (teacher) {
        res.json(teacher);
      } else {
        res.status(404).json({ message: 'Teacher not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTeacher: async (req, res) => {
    const { teachername, email } = req.body;
    try {
      const newTeacher = await Teacher.create({ teachername, email });
      res.status(201).json(newTeacher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateTeacher: async (req, res) => {
    const { id } = req.params;
    const { teachername, email } = req.body;
    try {
      const teacher = await Teacher.findByPk(id);
      if (teacher) {
        await teacher.update({ teachername, email });
        res.json(teacher);
      } else {
        res.status(404).json({ message: 'Teacher not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTeacher: async (req, res) => {
    const { id } = req.params;
    try {
      const teacher = await Teacher.findByPk(id);
      if (teacher) {
        await teacher.destroy();
        res.json({ message: 'Teacher deleted successfully' });
      } else {
        res.status(404).json({ message: 'Teacher not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TeacherController;
