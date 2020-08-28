import {
  ClothesResolvers,
  MutationResolvers,
  QueryResolvers,
  ResolversTypes,
  ShirtColor,
} from '../generated/graphql'

const clothes: ResolversTypes['Clothes'][] = [
  {
    id: '1',
    name: 'Shirt 1',
    color: ShirtColor.Blue,
    size: 1,
  },
  {
    id: '3',
    name: 'Shirt 2',
    color: ShirtColor.Blue,
    size: 3,
  },
  {
    id: '4',
    name: 'Shirt 1',
    color: ShirtColor.Grey,
    size: 5,
  },
  {
    id: '5',
    name: 'Pants 2',
    color: 'red',
    W: 30,
    L: 34,
  },
  {
    id: '6',
    name: 'Pants 3',
    color: 'blue',
    W: 32,
    L: 34,
  },
]

const Query: QueryResolvers = {
  clothes() {
    return clothes
  },
}

const Clothes: ClothesResolvers = {
  __resolveType(obj) {
    console.log(obj.__typename)
    if ((obj as any).size) {
      return 'Shirt'
    }
    return 'Pants'
  },
}

const Mutation: MutationResolvers = {
  createShirt: async (_, { input }) => {
    const shirt = {
      ...input,
      id: Date.now().toString(),
    }
    clothes.push(shirt)

    return shirt
  },

  createPants: async (_, { input }) => {
    const pants = {
      ...input,
      id: Date.now().toString(),
    }
    clothes.push(pants)

    return pants
  },
}

const map = {
  Clothes,
  Query,
  Mutation,
}
export default map
