const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000;

let users = [
    {
        id: 0,
        nome: 'Mateus Brito',
        idade: '22 anos',
        tel: '(82)9.8873-2425'
    },
    {
        id: 1,
        nome: 'Marilene Cerqueira',
        idade: '49 anos',
        tel: '(82)9.8873-2424'
    },
    {
        id: 2,
        nome: 'Alex Cerqueira',
        idade: '22 anos',
        tel: '(82)9.8873-2426'
    },    
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('user', {users: users})
});

app.get('/about', (req, res)=>{
    res.render('about')
})

app.listen(PORT, ()=>{
    console.log('Server Running On Port:', PORT)
});

