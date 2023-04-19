const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/music/gira.mp3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/music/gira.mp3'));
});

app.get('/api', (req, res) => {
    res.json({ message: 'React é muito divertido!' });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
