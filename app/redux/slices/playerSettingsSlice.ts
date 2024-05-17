import { createSlice, current } from '@reduxjs/toolkit'
import EDificultLevel from '../../enums/EDificultLevel'
import Block from '../../models/Block';
import LevelConfig from '../../LevelConfig.json'
import Ranking from '../../models/Ranking';

interface RankingRecord {
    level: number;
    avgTime: number;
}

interface SetRankingAction {
    type: string;
    payload: RankingRecord;
}

export const playerSettingsSlice = createSlice({
  name: 'playerSettings',
  initialState: {
    dificultyLevel: EDificultLevel.Easy,
    delayTime: LevelConfig.dificultyLevel.Easy.delayTime,
    gridSize: {
        col: LevelConfig.dificultyLevel.Easy.col,
        row: LevelConfig.dificultyLevel.Easy.row,
    },
    currentLevel:{
        currentLevel: LevelConfig.firstLevelConfig.currentLevel,
        avgReactionTime: LevelConfig.firstLevelConfig.minAvgTime,
        iterations: LevelConfig.firstLevelConfig.iterations,
    },
    ranking:[] as Ranking[]
  },
  reducers: {
    changeDifficultLevel: (state) => {
        const levels = Object.values(EDificultLevel);
        const currentIndex = levels.indexOf(state.dificultyLevel)
        const nextIndex = (currentIndex + 1) % levels.length
        state.dificultyLevel = EDificultLevel[levels[nextIndex]]
    },
    changeGridSize: (state) => {
        switch(state.dificultyLevel){
            case EDificultLevel.Easy:
                state.gridSize.col = LevelConfig.dificultyLevel.Easy.col
                state.gridSize.row = LevelConfig.dificultyLevel.Easy.row
                state.delayTime = LevelConfig.dificultyLevel.Easy.delayTime
                break;
            case EDificultLevel.Medium:
                state.gridSize.col = LevelConfig.dificultyLevel.Medium.col
                state.gridSize.row = LevelConfig.dificultyLevel.Medium.row
                state.delayTime = LevelConfig.dificultyLevel.Medium.delayTime
                break;
            case EDificultLevel.Hard:
                state.gridSize.col = LevelConfig.dificultyLevel.Hard.col
                state.gridSize.row = LevelConfig.dificultyLevel.Hard.row
                state.delayTime = LevelConfig.dificultyLevel.Hard.delayTime
                break;
            case EDificultLevel.Extreme:
                state.gridSize.col = LevelConfig.dificultyLevel.Extreme.col
                state.gridSize.row = LevelConfig.dificultyLevel.Extreme.row
                state.delayTime = LevelConfig.dificultyLevel.Extreme.delayTime
                break;
            default:
                state.gridSize.col = LevelConfig.dificultyLevel.Easy.col
                state.gridSize.row = LevelConfig.dificultyLevel.Easy.row
                state.delayTime = LevelConfig.dificultyLevel.Easy.delayTime
                break;
        }
    },
    setupNextLevel: (state) => {
        state.currentLevel.currentLevel += 1
        state.currentLevel.iterations += LevelConfig.iterationRatio
        state.currentLevel.avgReactionTime =  state.currentLevel.avgReactionTime * LevelConfig.minAvgRatio
    },
    setRanking: (state, action: SetRankingAction) => {
        let rankingRecord = [ ...state?.ranking, action.payload ]
        state.ranking = rankingRecord
    }
  }
})

export const { changeDifficultLevel, changeGridSize, setupNextLevel, setRanking } = playerSettingsSlice.actions

export default playerSettingsSlice.reducer