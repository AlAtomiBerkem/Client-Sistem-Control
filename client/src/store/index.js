import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice/projectsSlice';
import workerReducer from './workerSlice/workerSlice';

const store = configureStore({
    reducer: {
        project: projectReducer,
        worker: workerReducer,
    },
});

export default store;