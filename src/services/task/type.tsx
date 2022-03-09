export type basicTask = {
  id: string
  description: string
  title: string
  createAt: string
  user: string
}

export type addTask = {
  task: basicTask
}

export type updateTask = {
  task: basicTask
}

export type deleteTask = Pick<basicTask, 'id'>

export const GET_TASKS = 'GET_TASKS'
export const GET_TASK_BY_ID = 'GET_TASK_BYid'
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK_BY_ID = 'UPDATE_TASK_BYid'
export const DELETE_TASK_BY_ID = 'DELETE_TASK_BYid'
