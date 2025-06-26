import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_TASK, GET_TASKS } from "../graphql/queries"

export default function TasksForm() {

    const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
        refetchQueries: [{ query: GET_TASKS }]
    })
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createTask({ variables: { createTaskInput: { title } } })
        setTitle('')
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={onChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}