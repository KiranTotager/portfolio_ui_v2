import { configureStore } from "@reduxjs/toolkit";
import {contactApi} from "../Services/ContactService"
import { setupListeners } from "@reduxjs/toolkit/query";
export const store=configureStore({
    reducer:{
        [contactApi.reducerPath]:contactApi.reducer
    },
    middleware:(getDefualtMiddleware)=>getDefualtMiddleware().concat(contactApi.middleware)
})
setupListeners(store.dispatch)