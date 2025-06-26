import axios from "axios"
import { Task, TaskUpdate } from "./types";

export const fetchTasksAPI = async () => {
    const res = await axios.get<Task[]>('http://localhost:3000/tasks');
    return res.data;
}

export const createTaskAPI = async (title: string) => {
    const res = await axios.post<Task>('http://localhost:3000/tasks', { title });
    return res.data;
}

export const deleteTaskAPI = async (id: string) => {
    const res = await axios.delete<Task>(`http://localhost:3000/tasks/${id}`);
    return { id };
}

export const updateTaskAPI = async ({ id, title, completed }: TaskUpdate): Promise<Task> => {
    return (await axios.patch(`http://localhost:3000/tasks/${id}`, {
        ...(title !== undefined && { title }),
        ...(completed !== undefined && { completed }),
    })).data;
};