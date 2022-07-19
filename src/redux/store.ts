import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './reducers/features';



const store = configureStore({
    reducer: {
        features: featureReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;