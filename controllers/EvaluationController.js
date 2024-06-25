const Evaluation = require('../models/Evaluation');

const EvaluationController = {
  getAllEvaluations: async (req, res) => {
    try {
      const evaluations = await Evaluation.findAll();
      res.json(evaluations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEvaluationById: async (req, res) => {
    const { id } = req.params;
    try {
      const evaluation = await Evaluation.findByPk(id);
      if (evaluation) {
        res.json(evaluation);
      } else {
        res.status(404).json({ message: 'Evaluation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createEvaluation: async (req, res) => {
    const { evaluationname, email } = req.body;
    try {
      const newEvaluation = await Evaluation.create({ evaluationname, email });
      res.status(201).json(newEvaluation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEvaluation: async (req, res) => {
    const { id } = req.params;
    const { evaluationname, email } = req.body;
    try {
      const evaluation = await Evaluation.findByPk(id);
      if (evaluation) {
        await evaluation.update({ evaluationname, email });
        res.json(evaluation);
      } else {
        res.status(404).json({ message: 'Evaluation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEvaluation: async (req, res) => {
    const { id } = req.params;
    try {
      const evaluation = await Evaluation.findByPk(id);
      if (evaluation) {
        await evaluation.destroy();
        res.json({ message: 'Evaluation deleted successfully' });
      } else {
        res.status(404).json({ message: 'Evaluation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = EvaluationController;
