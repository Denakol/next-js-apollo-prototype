import { ClothesResolvers, MutationResolvers, QueryResolvers } from '../generated/graphql'
import { ClothesRepository } from '../data/repositiory/ClothesRepository'

const Query: QueryResolvers = {
  clothes: async (_, __, context) => {
    const clothesRepository = context.getRepository(ClothesRepository)
    return await clothesRepository.find()
  },
}

const Clothes: ClothesResolvers = {
  __resolveType(obj) {
    if ((obj as any).size) {
      return 'Shirt'
    }
    return 'Pants'
  },
}

const Mutation: MutationResolvers = {
  createShirt: async (_, { input }, context) => {
    console.log('sdfdf')
    const clothesRepository = context.getRepository(ClothesRepository)
    const k = await clothesRepository.createShirt(input)
    console.log(k)
    return k
  },
  createPants: async (_, { input }, context) => {
    const clothesRepository = context.getRepository(ClothesRepository)
    return await clothesRepository.createPants(input)
  },
  deleteClothes: async (_, { input }, context) => {
    const clothesRepository = context.getRepository(ClothesRepository)
    await clothesRepository.delete(input?.id)
    return { id: input?.id }
  },
}

const map = {
  Clothes,
  Query,
  Mutation,
}
export default map
