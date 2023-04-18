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
    }
    
    type Shoes {
        brand: ShoeType!
        size: Int!
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
                email: 'someemail@gmail.com',
                avatar: 'http://yoda.png',
                friends: []
            }
        },
        shoes(_, {input}) {
            return [{brand: 'nike', size: 43},
                {brand: 'adiddas', size: 42}].filter(({brand}) => brand === input.brand)
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
