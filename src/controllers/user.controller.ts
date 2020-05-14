import { Controller, Get } from '@nestjs/common'
import { UserService } from '~/services'

@Controller('/api/v1/cats')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  findAll(): string {
    return this.service.getCats()
  }
}
