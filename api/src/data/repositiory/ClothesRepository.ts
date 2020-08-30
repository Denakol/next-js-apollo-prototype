import { EntityRepository, Repository } from 'typeorm'
import { Clothes } from '../entity/Clothes'
import { PantsInput, ShirtInput } from '../../generated/graphql'

@EntityRepository(Clothes)
export class ClothesRepository extends Repository<Clothes> {
  async createShirt(shirt: ShirtInput): Promise<Clothes> {
    const clothes = new Clothes({
      name: shirt.name || '',
      color: shirt.color,
      size: shirt.size,
    })
    return await this.save(clothes)
  }

  async createPants(pants: PantsInput): Promise<Clothes> {
    const clothes = new Clothes({
      name: pants.name || '',
      color: pants.color,
      W: pants.W,
      L: pants.L,
    })
    return await this.save(clothes)
  }
}
