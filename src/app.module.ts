import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Board } from './boards/board.entity';
import { config } from 'dotenv';
config();

@Module({
  //모듈에 typeormconfig 추가해주기!
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('USER_HOST'),
        port: +configService.get<number>('USER_PORT'),
        username: configService.get<string>('USER_NAME'),
        password: configService.get<string>('USER_PASSWORD'),
        database: configService.get<string>('USER_DB'),
        entities: [Board],
        synchronize: true,
      }),
    }),
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
