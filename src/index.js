import { GraphQLServer } from 'graphql-yoga'

// types (schemas)
// Usar exemplo com User
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    sum(num1: Int, num2: Int): Int!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'My first query!'
    },
    name() {
      return 'My name is Rafael'
    }

    // Com argumentos
    // sum(_, args) {
    //   return args.num1 + args.num2
    // },

    // Padrão
    // getUser(){
    //   return { id: 1, name: 'Rafael', age: 30, email: 'rafaeljcadena@gmail.com' }
    // },

    // Campos customizados
    // getUser(){
    //   return { id: 1, name: 'Rafael', age: 30, email: 'rafaeljcadena@gmail.com', userNameEmail: 'rafaeljcadena@gmail.com'.split('@')[0]  }
    // }
  },

  // Resolvers para schemas
  // User: {
  //   userNameEmail(user){
  //     return user.email.split('@')[0]
  //   }
  // }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The server is up')
})