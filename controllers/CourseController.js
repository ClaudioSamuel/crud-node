const Course = require('../models/Course');

const CourseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.findAll();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCourseById: async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByPk(id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCourse: async (req, res) => {
    const { coursename, email } = req.body;
    try {
      const newCourse = await Course.create({ coursename, email });
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCourse: async (req, res) => {
    const { id } = req.params;
    const { coursename, email } = req.body;
    try {
      const course = await Course.findByPk(id);
      if (course) {
        await course.update({ coursename, email });
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByPk(id);
      if (course) {
        await course.destroy();
        res.json({ message: 'Course deleted successfully' });
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = CourseController;
