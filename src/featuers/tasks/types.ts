export interface Task {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export interface TaskUpdate {
    id: string;
    title?: string;
    completed?: boolean;
}