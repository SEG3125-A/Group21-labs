const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

const admin = require('firebase-admin');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

// Get a reference to the Firestore service
var db = admin.firestore();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', async (req, res) => {
    try { // Reformat the preferences data
        let jsonData = req.body;

        let startIndex = Object.keys(jsonData).indexOf('rating2');
        let endIndex = Object.keys(jsonData).indexOf('comments');
        console.log(startIndex, endIndex);

        let keys = Object.keys(jsonData).slice(startIndex + 1, endIndex);
        let values = keys.map(key => jsonData[key]);

        let newArray = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));

        keys.forEach(key => delete jsonData[key]);
        jsonData['aspects'] = newArray;
        jsonData['timestamp'] = Date.now();

        // jsonData.sort((a, b) => {
        //     const dateA = new Date(a.timestamp);
        //     const dateB = new Date(b.timestamp);
        //     return dateB - dateA; // For ascending order
        // });

        const docRef = db.collection('results').doc(jsonData['firstname'] + ' ' + jsonData['lastname']); // Send to firestore

        if (!docRef) {
            console.log("Failed to create a Firestore reference. Incorrect path or data.");
            Toastify({
                text: "Internal server error. Please try again.",
                duration: 3000,
                gravity: "bottom",
                position: 'right',
                backgroundColor: "red",
            }).showToast();
            res.redirect('/');
        }

        if (docRef.get().then((docSnapshot) => { // Doesn't work 
            if (docSnapshot['firstname'] != null) {
                console.log("Document already exists.");
                Toastify({
                    text: "First and last name combo already exists in the database. Please try again.",
                    duration: 3000,
                    gravity: "bottom",
                    position: 'right',
                    backgroundColor: "red",
                }).showToast();
                return;
            }
        }));

        await docRef.set(jsonData);
        console.log("Data has been written to Firestore");
        setTimeout(() => res.redirect('/'), 2000);
    } catch (err) {
        console.error(err);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
