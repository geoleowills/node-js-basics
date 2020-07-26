// Problem: We need a simple way to look at a users badge count and JS points
// Solution: User Node.js to connect to Treehouse API to get profile info to print out

// Require https module
const https = require('https');

// Function to print message to console.
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`wwwhttps://teamtreehouse.com/${username}.json`, response => {
        let body = '';
        // Read the data
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            // Parse the data
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        })
        // Parse the data
        // Print the data 
    });

    request.on('error', (e) => console.error(`Problem with request: ${e.message}`));
}


const users = process.argv.slice(2);
users.forEach(getProfile);