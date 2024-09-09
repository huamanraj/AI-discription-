const openaiService = require('../services/openaiService');

exports.generateJobDescription = async (req, res) => {
  try {
    const { industry, experience, role, skills, technical, soft, other } = req.body;

    const jobDescription = await openaiService.generateJobDescription(
      industry, experience, role, skills, technical, soft, other
    );

    res.json({ jobDescription });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while generating the job description.', details: error.message });
  }
};