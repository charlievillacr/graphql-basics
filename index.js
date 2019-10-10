'use strict'

const { graphql, buildSchema } = require('graphql')

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


// Ejecutar el query hello
graphql(schema, '{ hello }', resolvers).then((data) => {
    console.log(data)
})