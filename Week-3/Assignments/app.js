// Server
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.get('/data', (req, res) => {
    if(req.query.number){
        const number = parseInt(req.query.number, 10);
        if(number && number >= 1){
            // Use formula (1 + N) * N / 2
            const result = (1 + number) * number / 2;      
            res.send(`1+2..+N=${result}`)
        }else{
            res.status(400).send('Wrong Parameter')
        }
    }else{
        res.status(400).send('Lack of Parameter')
    }    
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})