const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.set('visitantes', 0);

app.get('/', (req, res)=>{
    client.get('visistante', (err, visitantes)=>{
        visitantes = parseInt(visitantes) + 1
        res.send('Numero de visitantes é: ' + visitantes)
        client.set('visitantes', parseInt(visitantes))
    })
})

app.listen(8081, ()=>{
    console.log('Servico na porta 8081')
})