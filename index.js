'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqMiddleware = require('express-graphql')

const app = express()
const port = process.eventNames.port || 3000

// definiendo el esquema
// String, integer, float & boolean
const schema = buildSchema (`
type Query {
    hello: String
    saludo: String
    }
`)
// Configurar los resolvers
const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Hola a todos!'
    }
}

// definir el middleware en un endpoint
//  ruta /api
// lleva como parámetro un un objeto
// propiedades son el schema
// cual es el schema que va ejecutar
// pide un root value = resolvers
// value son los resolvers
// configuración de graphiql
// para trabajar en el entorno de desarrollo

app.use('/api', gqMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

// escuchar
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`);
})



// Ejecutar el query hello

// Esto se borra porque
// Ya no necesitamos ejecutar en en terminal
// graphql(schema, '{ hello }', resolvers).then((data) => {
//     console.log(data)
// })