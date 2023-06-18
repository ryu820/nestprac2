import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //모듈에 typeormconfig 추가해주기!
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
