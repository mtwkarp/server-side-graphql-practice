import gql from 'graphql-tag'
import {ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = gql`
    
    enum ShoeType {
        JORDAN
        NIKE
        ADIDDAS
    }
    
    type User {
        email: String!
        avatar: String
        friends: [User]!
        shoes: [Shoes]!
    }
    
    type Shoes {
        brand: ShoeType!
        size: Int!
        user: User!
    }

    input ShoesInput {
        brand: String,
        size: Int
    }
    
    type Query {
        me: User!
        shoes(input: ShoesInput): [Shoes]!
    }
    
    input NewShoeInput {
        brand: String!,
        size: Int!
    }
    
    type Mutation {
        createShoe(input: NewShoeInput!): Shoes
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                id: 1,
                email: 'someemail@gmail.com',
                avatar: 'http://yoda.png',
                friends: [],
                shoes: []
            }
        },
        shoes(_, {input}) {
            return [{brand: 'nike', size: 43, user: 1},
                {brand: 'adiddas', size: 42, user: 1}]
                // .filter(({brand}) => brand === input.brand)
        }
    },
    Shoes: {
        user() {

        }
    },
    Mutation: {
        createShoe(_, {input: NewShoeInput}) {

        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server)
console.log(`Server started on ${url}`)
