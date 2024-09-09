
# AI-Powered Job Description Generator and Profile Matcher

This project is a Node.js application that uses OpenAI's GPT model to generate job descriptions and provides a profile matching feature for job candidates.

## Features

1. **Job Description Generator**: Generates detailed job descriptions based on provided parameters using OpenAI's GPT model.
2. **Profile Matcher**: Rates and sorts candidate profiles based on their match percentage with a given job description.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js and npm (Node Package Manager).
* You have an OpenAI API key.

## Installing AI-Powered Job Description Generator and Profile Matcher

To install the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-job-description-generator.git
   ```
2. Navigate to the project directory:
   ```
   cd ai-job-description-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Using AI-Powered Job Description Generator and Profile Matcher

To use the application, follow these steps:

1. Start the server:
   ```
   npm start
   ```
2. The server will start running on `http://localhost:3000`.

### Generating a Job Description

Send a POST request to `http://localhost:3000/api/generate-job-description` with a JSON body like this:

```json
{
  "industry": "Technology",
  "experience": "5+ years",
  "role": "Senior Software Engineer",
  "skills": ["Problem-solving", "Team leadership"],
  "technical": ["JavaScript", "Node.js", "React", "MongoDB"],
  "soft": ["Communication", "Teamwork"],
  "other": "Ability to work in a fast-paced environment"
}
```

### Rating Profiles

Send a POST request to `http://localhost:3000/api/rate-profiles` with a JSON body like this:

```json
{
  "jobPost": {
    "industry": "Technology",
    "experience": "5",
    "role": "Software Engineer",
    "skills": ["Problem-solving", "Team leadership"],
    "technical": ["JavaScript", "Node.js", "React"],
    "soft": ["Communication", "Teamwork"]
  },
  "profiles": [
    {
      "id": 1,
      "name": "John Doe",
      "yearsOfExperience": "7",
      "skills": ["Problem-solving", "Project management"],
      "technicalSkills": ["JavaScript", "Python", "React", "Node.js"],
      "softSkills": ["Communication", "Teamwork", "Adaptability"]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "yearsOfExperience": "4",
      "skills": ["Critical thinking", "Time management"],
      "technicalSkills": ["Java", "C++", "SQL"],
      "softSkills": ["Leadership", "Creativity"]
    }
  ]
}
```

## Contributing to AI-Powered Job Description Generator and Profile Matcher

To contribute to the project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b main`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contact

If you want to contact me, you can reach me at `aman-raj.xyz`.

