// import gql from 'graphql-tag'
// import {ApolloServer } from '@apollo/server'
// import { startStandaloneServer } from '@apollo/server/standalone';
//
// const typeDefs = gql`
//     type User {
//         email: String!
//         avatar: String
//         friends: [User]!
//     }
//
//     type Query {
//         me: User!
//     }
// `
//
// const resolvers = {
//     Query: {
//         me() {
//             return {
//                 email: 'someemail@gmail.com',
//                 avatar: 'http://yoda.png',
//                 friends: []
//             }
//         }
//     }
// }
//
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// })
//
// const {url} = await startStandaloneServer(server)
// console.log(`Server started on ${url}`)
