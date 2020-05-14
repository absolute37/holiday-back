import { Module } from '@nestjs/common'
import { AppController, CatController } from '~/controllers'
import { CatService, AppService } from '~/services'

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
