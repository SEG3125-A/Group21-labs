const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Load questions from JSON file
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const answers = req.body;
    // Save answers to a file or database
    console.log('Submitted answers:', answers);
    res.redirect('/result');
});

app.get('/result', (req, res) => {
    // Display the survey result page here
    res.send('Survey result page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port 3000`);
});