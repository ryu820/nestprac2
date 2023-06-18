import { IsNotEmpty } from 'class-validator';

export class CeateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
