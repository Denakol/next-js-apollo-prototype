import { Clothes, Pants, Shirt } from '../../api/graphql'

function isShirt(clothes: Clothes): clothes is Shirt {
  return (clothes as Shirt).size !== undefined
}

function isPants(clothes: Clothes): clothes is Pants {
  return (clothes as Pants).W !== undefined
}

export { isShirt, isPants }
