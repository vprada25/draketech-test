import { currentAction } from './TaskAction'
import { basicTask } from './type'

export const taskReducer = (
    state: any,
    action: { type: string; task: basicTask | any }
) => {
    switch (action.type) {
        case currentAction.ADD: {
            return [...state, action.task]
        }

        case currentAction.DELETE: {
            const newTaskList = state.filter(
                (task: basicTask) => task.id !== action.task.id
            )
            return [newTaskList]
        }

        case currentAction.UPDATE: {
            const taskListUpdate = state.filter(
                (task: basicTask) => task.id !== action.task.id
            )
            return [...taskListUpdate, action.task]
        }

        case currentAction.GET: {
            return action.task
        }

        default: {
            return state
        }
    }
}