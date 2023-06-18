import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get<string>('USER_HOST'),
  port: configService.get<number>('USER_PORT'),
  username: configService.get<string>('USER_USERNAME'),
  password: configService.get<string>('USER_PASSWORD'),
  database: 'board-app',
  entities: [__dirname + '../**/*.entity.{js,ts}'],
  synchronize: true,
};
