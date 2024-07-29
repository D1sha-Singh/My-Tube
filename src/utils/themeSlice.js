import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themeDark: false
    },
    reducers: {
        setThemeDark: (state) => {
            // console.log('disha ', state.themeDark)
            state.themeDark = !state.themeDark
        }
    },
});

export const { setThemeDark } = themeSlice.actions;
export default themeSlice.reducer