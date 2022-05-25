import { configureStore } from "@reduxjs/toolkit";

import shortenedLinkReducer from "./shortenedLink-slice";


const store = configureStore({
    reducer: {
        shortenedLink: shortenedLinkReducer,
    }
})


export default store;