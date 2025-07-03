import { useState } from "react";
import useHover from "../hooks/useHover";
import "./TaskItem.css";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const { isHover, handlerMouseEnter, handlerMouseLeave } = useHover();
  const [isChecked, setIsChecked] = useState(false);

  const handlerToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="task-item"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div className="task-item-header" onClick={handlerToggle}>
        <input type="checkbox" checked={isChecked} onChange={handlerToggle} />
        <h2>{task.text}</h2>
      </div>
      {isHover && (
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ cursor: "pointer" }} onClick={onEdit}>
            Actualizar
          </button>
          <button style={{ cursor: "pointer" }} onClick={onDelete}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
