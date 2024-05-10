import { combineReducers } from '@reduxjs/toolkit';
import playerSettingsSlice from './slices/playerSettingsSlice';

const rootReducer = combineReducers({
    playerSettings: playerSettingsSlice,
})

export default rootReducer