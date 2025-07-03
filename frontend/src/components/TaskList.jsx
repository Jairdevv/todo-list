import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const tasksPut = tasks.map((task, index) => (
    <TaskItem
      key={task.id}
      task={task}
      onEdit={() => onEdit(index)}
      onDelete={() => onDelete(index)}
    />
  ));

  return <div className="task-list">{tasksPut}</div>;
};

export default TaskList;
