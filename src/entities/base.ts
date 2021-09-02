import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Entity } from '../interfaces/entity'

export abstract class BaseEntity implements Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'varchar', length: 300, default: 'system' })
  createdBy: string

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date

  @Column({ type: 'varchar', length: 300, default: 'system' })
  updatedBy: string
}
