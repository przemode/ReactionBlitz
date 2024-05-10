import { createSlice } from '@reduxjs/toolkit'
import EDificultLevel from '../../enums/EDificultLevel'
import Block from '../../models/Block';

export const playerSettingsSlice = createSlice({
  name: 'playerSettings',
  initialState: {
    level: EDificultLevel.Easy,
    gridSize: {
        col: 4,
        row: 4,
    }
  },
  reducers: {
    changeDifficultLevel: (state) => {
        const levels = Object.values(EDificultLevel);
        const currentIndex = levels.indexOf(state.level)
        const nextIndex = (currentIndex + 1) % levels.length
        state.level = EDificultLevel[levels[nextIndex]]
    },
    changeGridSize: (state) => {
        switch(state.level){
            case EDificultLevel.Easy:
                state.gridSize.col = 4
                state.gridSize.row = 4
                break;
            case EDificultLevel.Medium:
                state.gridSize.col = 5
                state.gridSize.row = 5
                break;
            case EDificultLevel.Hard:
                state.gridSize.col = 6
                state.gridSize.row = 6
                break;
            case EDificultLevel.Extreme:
                state.gridSize.col = 7
                state.gridSize.row = 7
                break;
            default:
                state.gridSize.col = 4
                state.gridSize.row = 4
                break;
        }
    }
  }
})

export const { changeDifficultLevel, changeGridSize } = playerSettingsSlice.actions

export default playerSettingsSlice.reducer