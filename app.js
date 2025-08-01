//importo il module express
const express = require('express');
//creo un'istanza dell'app express
const app = express();
//definisco la porta su cui il server sarà in ascolto
const port = 3001;
//inserisco il middleware per i file statici
app.use(express.static('public'));


//Creo una rotta Get per ottenere un testo
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//importo l'array posts
const posts = require('./posts');

// Importo il router dei post
const postRouter = require('./routers/posts');

// Registro il router con il prefisso /posts
app.use('/posts', postRouter);



//creo rotta /bacheca
app.get('/bacheca', (req, res) => {
    //restituisco oggetto json
    res.json({posts});
});



//avvio il server in ascolto sulla porta 3001
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`)
});