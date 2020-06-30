const express = require('express')
const app = express()
const port = 3000
const graphqlHTTP = require('express-graphql'); 
const schema = require('./schema'); 
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://test:test@123@cluster0.u9ib3.mongodb.net/test',{ useNewUrlParser: true });
mongoose.connection.once('open',() => {
    console.log('Connected');
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))