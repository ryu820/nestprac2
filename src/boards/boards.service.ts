import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
// import { v1 as uuid } from 'uuid';
import { CeateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });
    console.log(found);
    if (!found) {
      throw new NotFoundException('찾을 수 없습니다.');
    }
    return found;
  }

  async createBoard(createBoard: CeateBoardDto): Promise<Board> {
    const { title, description } = createBoard;
    console.log(title, description);
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    console.log(board);
    await this.boardRepository.save(board);
    return board;
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoard: CeateBoardDto) {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { title, description } = createBoard;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardByID(id: string): Board {
  //   const found = this.boards.find((board) => {
  //     board.id === id;
  //   });
  //   if (!found) {
  //     throw new NotFoundException('해당 게시물이 없습니다.');
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardByID(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardByID(id);
  //   board.status = status;
  //   return board;
  // }
}
