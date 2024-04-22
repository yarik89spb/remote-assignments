const express = require('express');
const bodyParser = require('body-parser'); // not used, but leave it for better days
const cookieParser = require('cookie-parser');
const {  addUser, getUserPassword } = require('./sql-functions');
const { addCredentialsCookies, getCredentialsCookies, clearCredentialsCookies } = require('./cookie-functions');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded( { extended: false}))
app.use(cookieParser());
// app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    if(req.cookies.email && req.cookies.password){
        res.redirect(`/welcome?email=${req.cookies.email}`);
    }else{
        res.render('index');
    }
    
});

app.get('/welcome', (req, res) => {
    const userEmail = req.query.email || 'guest';
    res.render('welcome', {email: userEmail});
});

app.post('/register', async (req, res) => {
    const { email,  password} = req.body;
    const queryResult = await getUserPassword(email); // only check if user exists aleady
    console.log()
    if(!queryResult){
        await addUser(email, password)
        res.locals.userEmail = email;
        res.redirect(`/welcome?email=${email}`);
    }else{
        const errorContent = {text: 'User already exists, please try login instead', status: 400};
        res.render('login_failure', { errorContent: errorContent });
    }

    
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const correctPassword = await getUserPassword(email);
    if(password === correctPassword){
        addCredentialsCookies(res, email, password)
        res.redirect(`/welcome?email=${email}`);
    }
    else{
        const errorContent = {text: 'Wrong password', status: 400};
        res.render('login_failure', { errorContent: errorContent });
    }   
});


app.post('/logout', (req, res) => {
    clearCredentialsCookies(res);
    res.redirect('/')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})