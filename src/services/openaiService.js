const axios = require('axios');

exports.generateJobDescription = async (industry, experience, role, skills, technical, soft, other) => {
  const prompt = `Create a job description for a ${role} position in the ${industry} industry with the following details:
    
  Experience: ${experience}
  Technical Skills: ${technical.join(', ')}
  Soft Skills: ${soft.join(', ')}
  Additional Skills: ${skills.join(', ')}
  Other Details: ${other}`;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a helpful assistant that creates job descriptions."},
        {role: "user", content: prompt}
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error.response ? error.response.data : error.message);
    throw new Error('Failed to generate job description');
  }
};