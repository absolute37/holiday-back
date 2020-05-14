import { CatService } from '~/services'
import { Controller, Get } from '@nestjs/common'

@Controller('/api/v1/cats')
export class CatController {
  constructor(private readonly service: CatService) {}
  @Get()
  findAll(): string {
    return this.service.getCats()
  }
}
