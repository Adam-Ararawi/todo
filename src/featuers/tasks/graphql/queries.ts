import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  {
    findAll {
        id
        title
        completed
        createdAt
    }
}
`;

export const CREATE_TASK = gql`
  mutation createTask($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      title
      completed
      createdAt
      }
    }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(updateTaskInput: $updateTaskInput) {
      id
      title
      completed
      createdAt
      }
    }
`;

export const DELETE_TASK = gql`
  mutation removeTask($id: String!) {
    removeTask(id: $id) {
      id
      title
      completed
      createdAt
}
}
`;