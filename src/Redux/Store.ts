import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/Services/createApi";
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,//this configuration for storing states globally
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware),
    
})
setupListeners(store.dispatch); // this for handling automatic refetch when the tab gain refocus and comes online after going offline