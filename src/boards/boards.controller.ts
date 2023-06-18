import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CeateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe) //dto에 설정되어있는 validation 자동 체크(핸들러레벨)
  createBoard(@Body() createBoard: CeateBoardDto): Board {
    return this.boardsService.createBoard(createBoard);
  }

  //localhost:3000/boards/:id
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardByID(id);
  }

  @Delete(':/id')
  deleteBoardById(@Param('id') id: string): void {
    return this.boardsService.deleteBoard(id);
  }
}
