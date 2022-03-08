import AddTask from "./components/AddTask";
import ListTask from './components/ListTask';
import style from './Task.module.scss';

const Taks = () => {
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