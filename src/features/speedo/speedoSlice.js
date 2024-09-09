import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import MotorApi from '../../api/MotorApi';
import MotorStatus from './models/MotorStatus';

const initialState = {
  status: {},
};

export const fetchStatus = createAsyncThunk(
  'motor/fetchStatus',
  async () => {
    return MotorApi.fetchStatus();
  }
);

export const speedoSlice = createSlice({
  name: 'speedo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchStatus.fulfilled, (state, action) => {
        if(!action.payload.ok) return console.error(action.payload)
        state.status = action.payload.results
    })
  },
});

// export const { } = speedoSlice.actions;

/**
 * @returns {MotorStatus}
 */
export const selectMotorStatus = state => new MotorStatus(state.speedo.status)
export const selectMotorStatusParams = state => state.speedo.status

export const selectIsActive = createSelector(
    selectMotorStatus,
    ms => ms.isActive
)
export const selectAmplitudeFract = createSelector(
    selectMotorStatus,
    ms => ms.amplitudeFract
)
export const selectFreqHz = createSelector(
    selectMotorStatus,
    ms => ms.freqHz
)
export const selectRotorSpeedHz = createSelector(
    selectMotorStatus,
    ms => ms.rotorSpeedHz
)
export const selectElectricalEquivalentSpeedHz = createSelector(
    selectMotorStatus,
    ms => ms.electricalEquivalentSpeedHz
)
export const selectSlipHz = createSelector(
    selectMotorStatus,
    ms => ms.slipHz
)
export const selectSlipFract = createSelector(
    selectMotorStatus,
    ms => ms.slipFract
)
export const selectTorqueFract = createSelector(
    selectMotorStatus,
    ms => ms.torqueFract
)
export const selectUseGoPedal = createSelector(
    selectMotorStatus,
    ms => ms.useGoPedal
)
export const selectGoPedalStatus = createSelector(
    selectMotorStatus,
    ms => ms.goPedalStatus
)
export const selectActTorque = createSelector(
    selectMotorStatus,
    ms => ms.actTorque
)
export const selectRotorRpm = createSelector(
    selectMotorStatus,
    ms => ms.rotorRpm
)

export const selectAverageRotorRpm = createSelector(
    selectMotorStatus,
    ms => ms.averageRpm
)

export default speedoSlice.reducer;
