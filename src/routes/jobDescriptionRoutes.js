const express = require('express');
const jobDescriptionController = require('../controllers/jobDescriptionController');
const profileRatingController = require('../controllers/profileRatingController');

const router = express.Router();

router.post('/generate-job-description', jobDescriptionController.generateJobDescription);
router.post('/rate-profiles', profileRatingController.rateProfiles);

module.exports = router;