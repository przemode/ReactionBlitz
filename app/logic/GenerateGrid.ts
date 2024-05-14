import Block from "../models/Block"
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';

export default function GenerateGrid(columns: number, rows: number): Block[][] {
    let gridArray2D: any = []
    for (let i = 0; i < rows; i++) {
        let tempRow: any = []
        for (let j = 0; j < columns; j++) {
            let block = new Block(uuidv1(), i, j, '#000')
            tempRow.push(block)
        }
        gridArray2D.push(tempRow)
    }
    return gridArray2D
}