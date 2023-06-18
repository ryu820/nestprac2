import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CeateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  //다른 컨퍼넌트에서 boards를 수정하지 못하게 하기 위함
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoard: CeateBoardDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, description } = createBoard;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
