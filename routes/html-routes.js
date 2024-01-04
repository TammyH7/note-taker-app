const router = require('express').Router();
const path = require('path');

// Serve HTML & public files:
// Starts the route that sends "INDEX.HTML" as a response to a client when a GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// Starts the route that sends "NOTES.HTML" as a response to a client when a GET request is made 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
