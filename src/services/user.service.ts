import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getCats(): string {
    return 'CAT NUMBA1'
  }
}
