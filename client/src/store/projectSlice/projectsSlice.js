import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [
            {
                id: 1,
                name: "Проект 1",
                description: "Описание проекта 1",
                curator: "Иван Иванов",
                executor: "Петр Петров",
                status: "Активный",
            },
            {
                id: 2,
                name: "Проект 2",
                description: "Описание проекта 2",
                curator: "Анна Сидорова",
                executor: "Мария Кузнецова",
                status: "Завершен",
            },
        ],
    },
    reducers: {
        addProject: (state, action) => {
            const newProject = {
                ...action.payload,
                id: state.projects.length + 1,
            };
            state.projects.push(newProject)
        },
        deleteProjects: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload);

        },
        editProject: (state, action) => {
            const index = state.projects.findIndex(project => project.id === action.payload.id);
            if (index !== -1) {
                state.projects[index] = action.payload;
            }
        }
    }
})

export const { addProject, deleteProjects, editProject} = projectSlice.actions
export default projectSlice.reducer
