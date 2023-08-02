import express from 'express';

const categories = ['Food', 'Gaming', 'Coding', 'Other']



const app = express()
const port = 4001

app.get('/',(request, response) => response.send({info:'asdsssasd'}))
app.get('/categories',(request, response) => response.send(categories))

app.listen(port)

