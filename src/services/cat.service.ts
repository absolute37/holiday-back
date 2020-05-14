import { Injectable } from '@nestjs/common'

@Injectable()
export class CatService {
  getCats(): string {
    return 'CAT NUMBA1'
  }
}
