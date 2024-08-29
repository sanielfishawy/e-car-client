import { createSlice } from '@reduxjs/toolkit';

export class NavTabNames {
    static TAB_NAMES = ['Speedo', 'Tuning']

    static getTabNameWithIndex(index) {
        return this.TAB_NAMES[index]
    }

    static getIndexWithTabName(tabName) {
        return this.TAB_NAMES.indexOf(tabName)
    }
}

export const navigationSlice = createSlice({
    name: 'navigation',

    initialState: {
        currentNavIndex: 0,
    },

    reducers: {
        setCurrentNavIndex: (state, action) => {
            state.currentNavIndex = action.payload
        },
        setCurrentNavIndexWithTabName: (state, action) => {
            const idx = NavTabNames.getIndexWithTabName(action.payload)
            state.currentNavIndex = idx
        },
    },
});

export const selectCurrentNavIndex = state => state.navigation.currentNavIndex  
export const selectCurrentNavTabName = state => NavTabNames.getTabNameWithIndex(state.navigation.currentNavIndex)

export const {
    setCurrentNavIndex,
    setCurrentNavIndexWithTabName,
    getCurrentNavTabName,
} = navigationSlice.actions;

export default navigationSlice.reducer;

