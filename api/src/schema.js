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
  
  input PetInput {
      type: String!
  }
  
  
  type Query {
      user: User
#      create_user: User!
      pets(input: PetInput): [Pet]!
      pet(input: PetInput): Pet
#      createPet: Pet!
  }
  
  input CreatePetInput {
      name: String!,
      type: String!
  }
  
  type Mutation {
      createPet(input: CreatePetInput): Pet!
  }
  
#  type Pet {
#      img: String!
#  }
`;

module.exports = typeDefs
