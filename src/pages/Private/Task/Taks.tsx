import AddTask from "./components/AddTask";
import ListTask from './components/ListTask';

import style from './Task.module.scss';
import axios from "axios";
import { useContext, useEffect } from 'react';
import { URL_API, URL_API2 } from "../../../helpers/constants/env";
import { TaskContext } from "../../../context/TaskProvider";
import { currentAction } from "../../../services/task/TaskAction";




const Taks = () => {

  const { dispatch } = useContext(TaskContext);

  useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data)

        dispatch({ type: currentAction.GET_TASK, task: res.data })
      })
      .catch(e => console.log(e))
    
  }, [dispatch]);



  return (
    <div className={style.Task}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <AddTask />
        </div>
        <div className="col-8 ">
          <ListTask />
        </div>
      </div>
    </div>
  )
}


export default Taks;