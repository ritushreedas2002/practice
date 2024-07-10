import TaskColumn from './TaskColumn';
import { taskTypes } from '../utils/transition';

const TaskContainer=()=>{
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="flex justify-around gap-6">
        {taskTypes.map((type, index) => (
          <TaskColumn key={index} type={type} />
        ))}
      </div>
    </div>
      );
}
export default TaskContainer;