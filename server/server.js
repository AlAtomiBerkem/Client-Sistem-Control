const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post('/api/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: Date.now(), firstName, lastName, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Авторизация
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});