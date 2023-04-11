const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!
      username: String!
  }
  
  type Pet {
      id: ID!,
      createdAt: Int!,
      name: String!
      type: String!
  }
  
  type Query {
      user: User
#      create_user: User!
      pets(type: String!): [Pet]!
      pet: Pet
#      createPet: Pet!
  }
  
#  type Pet {
#      img: String!
#  }
`;

module.exports = typeDefs
