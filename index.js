const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();

const app = express();
app.set('view engine', 'hbs');

// static folder
app.use(express.static('public'))

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// enable forms
app.use(
    express.urlencoded({
        extended: false
    })
);

// async function main() {
//     app.get('/', (req, res) => {
//         res.send("It's alive!")
//     })
// }

// main();

app.get('/', async function(req,res){
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Server has started");
});