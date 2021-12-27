import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  highScores: []
}

export const breakTheHeckOutSlice = createSlice({
  name: 'breakTheHeckOut',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateScores: (state, action) => {
      // TODO: add score to database, even if not high score

      // see if score is eligible
      const isTopScore = !state.highScores.some(
        (s) => s.score < action.payload.score
      )

      if (isTopScore) {
        const newScores = [
          ...state.highScores,
          {
            name: action.payload.name,
            score: action.payload.score,
            level: action.payload.level
          }
        ].sort((a, b) => b.score - a.score)
        state.highScores = newScores.slice(0, 5)
      }
    }
  }
})

export const { updateName, updateScores } = breakTheHeckOutSlice.actions

export default breakTheHeckOutSlice.reducer
