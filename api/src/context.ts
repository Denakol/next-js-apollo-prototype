import { Connection } from 'typeorm'
import { ObjectType } from 'typeorm/common/ObjectType'

export interface IContext {
  connection: Connection
  getRepository<T>(customRepository: ObjectType<T>): T
}

export class Context implements IContext {
  constructor(public connection: Connection) {}

  getRepository<T>(customRepository: ObjectType<T>) {
    return this.connection.getCustomRepository(customRepository)
  }
}
