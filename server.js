const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to serve static files from the src directory
app.use('/src', express.static(path.join(__dirname, 'src'))); // Note the '/src' prefix

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to get articles
app.get('/api/articles', (req, res) => {
    const articlesPath = path.join(__dirname, 'src', 'articles.json');
    fs.readFile(articlesPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading articles file' });
        }
        const articles = JSON.parse(data);
        res.json(articles);
    });
});

// Endpoint to update articles (for the admin interface)
app.post('/api/articles', (req, res) => {
    const articlesPath = path.join(__dirname, 'src', 'articles.json');
    const newArticle = req.body;

    fs.readFile(articlesPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading articles file' });
        }
        const articles = JSON.parse(data);
        articles.push(newArticle); // Add the new article to the array

        fs.writeFile(articlesPath, JSON.stringify(articles, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing articles file' });
            }
            res.status(201).json(newArticle); // Respond with the newly created article
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
