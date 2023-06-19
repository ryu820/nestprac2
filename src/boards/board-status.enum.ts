//데이터베이스에 연결할꺼니까 필요없음
// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
