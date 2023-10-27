const express = require('express');
const app = express();
const PORT = 3000;
const { mean, median, mode } = require('./util');

app.get('/', (req, res) => {
    res.send('Hello Worldddddd!');
});

app.get('/mean', (req, res) => {
    const nums = (req.query.nums || "").split(',').map(Number);

    if (nums.includes(NaN)) {
        return res.status(400).json({ error: "Invalid number provided." });
    }

    const result = mean(nums);
    res.json({ operation: "mean", value: result });
});

app.get('/median', (req, res) => {
    const nums = (req.query.nums || "").split(',').map(Number);

    if (nums.includes(NaN)) {
        return res.status(400).json({ error: "Invalid number provided." });
    }

    const result = median(nums);
    res.json({ operation: "median", value: result });
});

app.get('/mode', (req, res) => {
    const nums = (req.query.nums || "").split(',').map(Number);

    if (nums.includes(NaN)) {
        return res.status(400).json({ error: "Invalid number provided." });
    }

    const result = mode(nums);
    res.json({ operation: "mode", value: result });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:3000`);
});
