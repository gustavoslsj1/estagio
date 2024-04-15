const express = require ('express');
const allitems = require('./allitems');
const id = require('./id');

const app = express();

app.use(express.json());

const PORT = 3003;

app.listen(3003, () => { console.log(`funcionando na porta ${PORT}`) });

app.get('/', async (req, res) =>{
    const query = await allitems();
    return res.status(201).json(query);
}); 
app.get('/:id', async (req, res) =>{
    const query = await id();
    return res.status(201).json(query);
}); 

