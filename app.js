const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/registration.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

app.get('/summary.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'summary.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
