import { createSlice } from '@reduxjs/toolkit'

const workerSlice = createSlice({
    name: 'worker',
    initialState: {
        workers: [
            {
                id: 1,
                name: "Евгений Пиедин",
                position: "Маркетинг",
                email: "ev@gmail.com",
                phone: "<0000000@0.00",
                city: "Москва",
                dob: "13.05.1993"
            },
            {
                id: 2,
                name: "Иван Иванов",
                position: "Разработчик",
                email: "ivan@example.com",
                phone: "+7 999 123 45 67",
                city: "Санкт-Петербург",
                dob: "20.10.1985"
            },
            {
                id: 3,
                name: "Мария Сидорова",
                position: "Дизайнер",
                email: "maria@example.com",
                phone: "+7 999 987 65 43",
                city: "Казань",
                dob: "15.03.1990"
            },
            {
                id: 4,
                name: "Мари Филипова",
                position: "Дизайнер",
                email: "maria@example.com",
                phone: "+7 999 987 65 43",
                city: "Казань",
                dob: "15.03.1990"
            },
            {
                id: 5,
                name: "Семен Петров",
                position: "Дизайнер",
                email: "maria@example.com",
                phone: "+7 999 987 65 43",
                city: "Казань",
                dob: "15.03.1990"
            },
        ]
    },
    reducers: {
        addWorker: (state, action) => {
            const newWorker = {
                ...action.payload,
                id: state.workers.length + 1,
            };
            state.workers.push(newWorker);
        }
    }
})

export const { addWorker } = workerSlice.actions;
export default workerSlice.reducer