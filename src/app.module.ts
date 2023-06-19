import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  //모듈에 typeormconfig 추가해주기!
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('USER_HOST'),
        port: configService.get<number>('USER_PORT'),
        username: configService.get<string>('USER_USERNAME'),
        password: configService.get<string>('USER_PASSWORD'),
        database: 'board-app',
        entities: [__dirname + '../**/*.entity.{js,ts}'],
        synchronize: false,
      }),
    }),
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
