const calculateProfileMatch = (jobPost, profile) => {
    let matchScore = 0;
    let totalCriteria = 0;

    // Compare skills
    const requiredSkills = new Set([...jobPost.skills, ...jobPost.technical, ...jobPost.soft]);
    const profileSkills = new Set([...profile.skills, ...profile.technicalSkills, ...profile.softSkills]);
    requiredSkills.forEach(skill => {
        totalCriteria++;
        if (profileSkills.has(skill)) matchScore++;
    });

    // Compare experience
    const requiredYears = parseInt(jobPost.experience);
    const profileYears = parseInt(profile.yearsOfExperience);
    totalCriteria++;
    if (profileYears >= requiredYears) matchScore++;

    // Calculate percentage match
    const percentageMatch = (matchScore / totalCriteria) * 100;

    return {
        ...profile,
        percentageMatch: Math.round(percentageMatch * 100) / 100  // Round to 2 decimal places
    };
};

exports.rateProfiles = (req, res) => {
    try {
        const { jobPost, profiles } = req.body;

        if (!jobPost || !profiles || !Array.isArray(profiles)) {
            return res.status(400).json({ error: 'Invalid input. Please provide a job post and an array of profiles.' });
        }

        const ratedProfiles = profiles.map(profile => calculateProfileMatch(jobPost, profile));
        const sortedProfiles = ratedProfiles.sort((a, b) => b.percentageMatch - a.percentageMatch);

        res.json({ sortedProfiles });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while rating profiles.', details: error.message });
    }
};