import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: '', nullable: true, type: 'nvarchar' })
  name: string

  @Column()
  color: string

  @Column({ nullable: true })
  size: number

  @Column({ nullable: true })
  W: number

  @Column({ nullable: true })
  L: number

  public constructor(init?: Partial<Clothes>) {
    Object.assign(this, init)
  }
}
