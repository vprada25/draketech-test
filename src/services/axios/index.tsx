import axios from 'axios'
import { URL_API, URL_API2 } from '../../helpers/constants/env';


axios.defaults.baseURL = `${URL_API2}`;

export const getTaskAPI = async () => axios.get('/todos')

export const getTaskByIdAPI = async (id: number) => axios.get(`/todos/${id}`)

export const createTaskAPI = async (task: any) => axios.post(`/todos`, JSON.stringify(task))

export const updateTaskAPI = async (task: any) => axios.put(`/todos/${task.id}`, task)

export const deleteTaskByIdAPI = async (id: any) => axios.delete(`/todos/${id}`)