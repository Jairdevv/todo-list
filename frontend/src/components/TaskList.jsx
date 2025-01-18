import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const tasksPut = tasks.map((task, index) => (
    <TaskItem key={index} task={task} />
  ));

  return <div className="task-list">{tasksPut}</div>;
};

export default TaskList;
