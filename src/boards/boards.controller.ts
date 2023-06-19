import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
// import { BoardStatus } from './board-status.enum';
import { CeateBoardDto } from './dto/create-board.dto';
// import { BoardsStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  @Post()
  @UsePipes(ValidationPipe) //dto에 설정되어있는 validation 자동 체크(핸들러레벨)
  createBoard(@Body() createBoard: CeateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoard);
  }

  // //localhost:3000/boards/:id
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  // @Delete(':/id')
  // deleteBoardById(@Param('id') id: string): void {
  //   return this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardsStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
