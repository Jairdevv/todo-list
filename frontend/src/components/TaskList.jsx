import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const tasksPut = tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onEdit={() => onEdit(task.id)}
      onDelete={() => onDelete(task.id)}
    />
  ));

  return <div className="task-list">{tasksPut}</div>;
};

export default TaskList;
