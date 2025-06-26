import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchTasksAPI, createTaskAPI, deleteTaskAPI, updateTaskAPI } from "./tasksAPI"
import { Task } from "./types";

export const fetchTasks = createAsyncThunk('tasks/fetch', fetchTasksAPI);
export const createTask = createAsyncThunk('tasks/create', createTaskAPI)
export const updateTask = createAsyncThunk('tasks/update', updateTaskAPI)
export const deleteTask = createAsyncThunk('tasks/delete', deleteTaskAPI)

interface tasksState { tasks: Task[], loading: boolean, error: string | null }

const initialState: tasksState = { tasks: [], loading: false, error: null }

const isPendingAction = (action: any) => action.type.endsWith('/pending')

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = action.payload
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false
                state.tasks.push(action.payload)
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.loading = false
                const index = state.tasks.findIndex(task => task.id === action.payload.id)
                if (index !== -1) {
                    state.tasks[index] = action.payload
                }
            })
            .addMatcher(isPendingAction, (state) => {
                state.loading = true
            })
    }
})


export default tasksSlice.reducer