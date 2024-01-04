const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')

// Sets up Express and defines the PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// To use the routers
app.use(html_routes)
app.use(api_routes)

// Initializes the server to begin listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});