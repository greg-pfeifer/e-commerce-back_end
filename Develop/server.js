const express = require('express');
const routes = require('./routes');
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT))
});