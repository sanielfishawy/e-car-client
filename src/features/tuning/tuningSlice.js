import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import TuningApi from '../../api/TuningApi';
import SlipGroups from './models/SlipGroups.js';
import SlipGroup from './models/SlipGroup.js';

const initialState = {
  slipGroups: [],
};

export const fetchSlipGroups = createAsyncThunk(
  'tuning/fetchSlipGroups',
  async () => {
    return TuningApi.fetchSlipGroups();
  }
);

export const tuningSlice = createSlice({
  name: 'tuning',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchSlipGroups.fulfilled, (state, action) => {
        if(!action.payload.ok) return console.error(action.payload)
        state.slipGroups = action.payload.results
    })
  },
});

// export const { } = tuningSlice.actions;

const selectSlipGroupsObj = state => state.tuning.slipGroups

/**
 * @returns {SlipGroups}
 */
export const selectSlipGroups = createSelector([selectSlipGroupsObj], (slipGroupsObj) => {
    const slipGroups = slipGroupsObj.map(sg => new SlipGroup(sg))
    return new SlipGroups(slipGroups)
})

export default tuningSlice.reducer;
