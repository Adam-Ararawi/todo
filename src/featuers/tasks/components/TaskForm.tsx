import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../tasksSlice"
import { AppDispatch } from "../../../app/store"

export default function TasksForm() {
    const dispatch = useDispatch<AppDispatch>()
    const [title, setTitle] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createTask(title))
        setTitle('')
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={title} onChange={onChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}