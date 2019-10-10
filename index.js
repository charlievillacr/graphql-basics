'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
// String, integer, float & boolean
const schema = buildSchema (`
type Query {
    hello: String
    }
`)
// Ejecutar el query hello
graphql(schema, '{ hello }').then((data) => {
    console.log(data)
})