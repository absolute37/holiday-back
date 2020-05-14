import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
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
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
    name: 'status',
    lenght: 10,
  })
  status: boolean
}
