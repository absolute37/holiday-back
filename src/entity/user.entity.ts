import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number

  @Column('varchar', { length: 50 })
  username: string

  @Column('varchar', { length: 50 })
  password: string

  @Column('varchar', { length: 50 })
  firstname: string

  @Column('varchar', { length: 50 })
  lastname: string

  @Column('varchar', { length: 50 })
  displayname: string
}
