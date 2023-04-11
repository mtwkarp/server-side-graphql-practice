/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user(_, __, {models}) {
      return models.User.findOne()
    },
    // create_user(_, __, {models}) {
    //   return models.User.create({})
    // },
    pets(_, {type}, {models}) {
      return models.Pet.findMany()
    },
    pet(_, __, {models}) {
      return models.Pet.findOne(() => true)
    },
    // createPet(_, __, {models}) {
    //   return models.Pet.create({})
    // }
  },
  // Mutation: {
  //
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
  //
  // }
}
