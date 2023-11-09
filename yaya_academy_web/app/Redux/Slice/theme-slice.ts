import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    theme: 'light' | 'dark'
}

const initialState = {
    theme: 'dark'
} as initialStateType;

// creating the theme slice
export const toggleTheme = createSlice({
    name: 'toggleTheme',
    initialState: initialState,
    reducers: {
        switchTheme: (state: initialStateType) => {
            state.theme === "light" ? state.theme = "dark" : state.theme = "light";
        },
    }
})

export const { switchTheme } = toggleTheme.actions;
export default toggleTheme.reducer;
