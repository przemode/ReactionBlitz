export default class Block {
  id?: string;
  row?: number;
  col?: number;
  color?: string;

  constructor(id?: string, row?: number, col?: number, color?: string) {
      this.id = id;
      this.row = row;
      this.col = col;
      this.color = '#000'
  }
}