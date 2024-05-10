export default class Block {
  id?: string;
  row?: number;
  col?: number;

  constructor(id?: string, row?: number, col?: number) {
      this.id = id;
      this.row = row;
      this.col = col;
  }
}