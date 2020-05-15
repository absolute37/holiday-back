import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'
import { UserService } from '~/services'
import { UserEntity } from '~/entity/user.entity'

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getAllUser(): Promise<UserEntity[]> {
    return this.service.findAll()
  }

  @Get('/:id')
  getUserById(@Param() param): Promise<UserEntity> {
    console.info(`UserController.getUserById id :  ${param.id}`)

    return this.service.findById(param.id)
  }

  @Post()
  createUser(@Body() user: UserEntity): Promise<UserEntity> {
    return this.service.saveUser(user)
  }

  @Put()
  editUser(@Body() user: UserEntity): Pormise<UserEntity> {
    return this.service.saveUser(user)
  }

  @Delete('/:id')
  deleteUser(@Param() param) {
    this.service.deleteUser(param.id)
  }
}
