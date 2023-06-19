import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get<string>('USER_HOST'),
  port: +configService.get<number>('USER_PORT'),
  username: configService.get<string>('USER_NAME'),
  password: configService.get<string>('USER_PASSWORD'),
  database: configService.get<string>('USER_DB'),
  entities: [__dirname + '../**/*.entity.{js,ts}'],
  synchronize: true,
};
