import axios from 'axios'
import { URL_API } from '../../helpers/constants/env';


axios.defaults.baseURL = `${URL_API}`;

export const getTaskAPI = async () => axios.get('/task')

export const getTaskByIdAPI = async (id: any) => axios.get(`/task/${id}`)

export const createTaskAPI = async (task: any) => axios.post(`/task`, task)

export const updateTaskAPI = async (task: any) => axios.put(`/task/${task.id}`, task)

export const deleteTaskByIdAPI = async (id: any) => axios.delete(`/task/${id}`)