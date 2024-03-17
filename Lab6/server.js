const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    // Compile the result of the survey
    const result = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        feedback: req.body.feedback,
        navigation: req.body.navigation,
        'useful-section': req.body['useful-section'],
        features: req.body.features,
        comments: req.body.comments,
        recommendation: req.body.recommendation
    };

    // Save the result to a file
    fs.appendFileSync('survey_results.json', JSON.stringify(result, null, 4) + ',\n');

    res.send('Survey submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
