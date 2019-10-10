# GraphQL

## Que es GraphQL

GraphQL es un nuevo paradigma aplicado para el intercambio de información entre diferentes aplicaciones. Anteriormente existían protocolos como CORBA, SOAP, RPC y el más reciente y utilizado REST. GraphQL creado en el 2015 por Facebook puede ser visto como una evolución al protocolo REST.

[Clase2](https://platzi.com/clases/1512-graphql/19900-que-es-graphql/)

## Inicio del proyecto

- mkdir platzi-dir

- cd platzi-dir

- npx license mit > LICENSE && npx gitignore node && git init && npm init -y

- npm i graphql

## Schema y types
[Clase 3](https://platzi.com/clases/1512-graphql/19901-schema-y-types/)
El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos de información que va a contener.

Para la creación de este proyecto usaremos una herramienta llamada npx, para ello primero debes instalarlo con el comando:

npm i -g npx

Una vez instalado, dentro de la carpeta de nuestro proyecto vamos a correr el siguiente comando:

npx license mit > LICENSE && npx gitignore node && git init && npm init -y
Ya que termina de correr el comando es momento de añadir la dependencia de GraphQL a nuestro proyecto:

npm i graphql

Dentro de GraphQL contamos con distintos tipos de datos escalares:

- String
- Int
- Float
- Boolean
- ID

## Queries y Resolvers

[Clase 4](https://platzi.com/clases/1512-graphql/19902-queries-y-resolvers/)

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

## Sirviendo el API en la web
<!-- Clase 5 -->
[Clase 5](https://platzi.com/clases/1512-graphql/19903-sirviendo-el-api-en-la-web/)

- Instalar Express y Express GraphQL
