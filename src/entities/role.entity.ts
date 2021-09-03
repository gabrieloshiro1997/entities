import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../models/base'
import { User } from './user.entity'

@Entity('roles')
export class Role extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  description: string

  @Column({ type: 'uuid' })
  userId: string

  @ManyToOne((_) => User, (user) => user.rolePermissions, { nullable: true })
  user: User

  constructor (partial: Partial<Role>) {
    super()
    Object.assign(this, partial)
  }
}
