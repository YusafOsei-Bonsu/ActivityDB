const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.get('/', (req, res) => res.send('Hello world'));

// Shows all activities available in the city
app.get('/activities', (req, res) => knex.from('activities').select('*').then(response => res.send(response)));

// Shows all places in the city
app.get('/places', (req, res) => knex.from('places').select('*').then(response => res.send(response)));

// Add a new activity into the database
app.post('/newActivity', (req, res) => {
  
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));