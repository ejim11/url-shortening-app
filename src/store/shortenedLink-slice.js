import { createSlice } from "@reduxjs/toolkit";

const shortenedLinkSlice = createSlice({
  name: "link",
  initialState: {
    links: [],
    changed: false,
  },

  reducers: {
    convertLink(state, action) {
      const data = action.payload;

      state.links.push(data);
      state.changed = true;
    },
    replaceLinks(state, action) {
      state.links = action.payload.links;
    },
  },
});

export const shortenedLinkActions = shortenedLinkSlice.actions;

export default shortenedLinkSlice.reducer;
