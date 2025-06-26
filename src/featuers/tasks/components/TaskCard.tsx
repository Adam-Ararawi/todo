import { useMutation } from "@apollo/client";
import { Task } from "../types";
import React, { useState } from "react";
import { DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../graphql/queries";

export default function TaskCard({ task }: { task: Task }) {
    const [updateTaskInput, { loading: loading_update, error: error_update }] = useMutation(UPDATE_TASK, {
        refetchQueries: [{ query: GET_TASKS }],
    })

    const [deleteTask, { loading: loading_delete, error: error_delete }] = useMutation(DELETE_TASK, {
        refetchQueries: [{ query: GET_TASKS }],
    })

    const [title, setTitle] = useState('')

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleComplete = () => {
        updateTaskInput({
            variables: {
                updateTaskInput: {
                    id: task.id,
                    title: task.title,
                    completed: !task.completed
                }
            }
        })
    }
    const handleDelete = () => {
        deleteTask({
            variables: {
                id: task.id
            }
        })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateTaskInput({
            variables: {
                updateTaskInput: {
                    id: task.id,
                    title: title,
                    completed: task.completed
                }
            }
        })
        setTitle('')
    }
    return (
        <div>

            <h1>{task.title}</h1>
            <p>Completed : {task.completed ? "Yes" : "NO"}</p>
            <p>Created At : {task.createdAt.toLocaleString()}</p>
            <div>
                <form onSubmit={onSubmit}>
                    <input value={title} onChange={handleTitle} />
                    <button type="submit">Update</button>
                </form>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <input type={"checkbox"} checked={task.completed} onChange={handleComplete} />
            </div>
        </div>
    )
}