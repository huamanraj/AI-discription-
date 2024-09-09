const express = require('express');
const jobDescriptionRoutes = require('./routes/jobDescriptionRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api', jobDescriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});