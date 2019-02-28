const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(require ("./routes/index"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.