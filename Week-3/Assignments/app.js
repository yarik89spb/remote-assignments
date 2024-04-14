const express = require('express');
const bodyParser = require('body-parser'); // not used, but leave it for better days
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded( { extended: false}))
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

/******* Routs *******/

// Assignment 1

app.get('/', (req, res) => {
    res.render('index');
});


// Assignments 4 

app.get('/myName', (req, res) => {
    const username = req.cookies.username
    // index pug template has username input button
    res.render('login', { username: username })
})

app.get('/trackName', (req, res) => {
    // Endpoint to only add cookie with username
    res.cookie('username', req.query.username);
    res.redirect('/myName');
})

app.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');   
})

// Assignment 2

app.get('/data', (req, res) => {
    if(req.query.number){
        const number = parseInt(req.query.number, 10);
        if(number && number >= 1){
            // Use formula (1 + N) * N / 2
            const result = (1 + number) * number / 2;      
            res.send(`${result}`)
        }else{
            res.status(400).send('Wrong Parameter')
        }
    }else{
        res.status(400).send('Lack of Parameter')
    }    
})

// Port 

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})