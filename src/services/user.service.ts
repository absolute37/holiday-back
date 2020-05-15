import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '~/entity/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find()
  }

  async findById(id): Promise<UserEntity> {
    return await this.repository.findOne(id)
  }

  async saveUser(payload: UserEntity): Promise<UserEntity> {
    return await this.repository.save(payload)
  }

  async deleteUser(id) {
    await this.repository.softDelete(id)
  }
}
