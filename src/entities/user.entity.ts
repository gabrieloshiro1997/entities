import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from '../models/base'
import { Role } from './role.entity'

@Entity('user')
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar', unique: true })
  email: string

  @Column({ type: 'varchar', nullable: true })
  password?: string

  @OneToMany((_) => Role, (role) => role.user, { eager: true })
  rolePermissions: Role[]

  constructor (partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
