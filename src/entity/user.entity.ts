/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'
import { UserStatus } from '~/constant'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: number

  @Column({ type: 'varchar', name: 'username', length: 50 })
  username: string

  @Column({ type: 'varchar', name: 'password', length: 50 })
  password: string

  @Column({ type: 'varchar', name: 'first_name', length: 50 })
  firstname: string

  @Column({ type: 'varchar', name: 'last_name', length: 50 })
  lastname: string

  @Column({ type: 'varchar', name: 'display_name', length: 50 })
  displayname: string

  @Column({
    type: 'varchar',
    default: UserStatus.ACTIVE
  })
  status: string

  @CreateDateColumn({
    type: 'timestamp with local time zone',
    name: 'created_date'
  })
  createdDate: Date

  @UpdateDateColumn({
    type: 'timestamp with local time zone',
    name: 'updated_date'
  })
  updatedDate: Date

  @DeleteDateColumn({
    type: 'timestamp with local time zone',
    name: 'deleted_date'
  })
  deletedDate: Date
}
