import { useState } from "react";
import useHover from "../hooks/useHover";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
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
      onClick={handlerToggle}
    >
      <div className="task-item-header">
        <input type="checkbox" checked={isChecked} onChange={handlerToggle} />
        <h2>{task}</h2>
      </div>
      {isHover && (
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ cursor: "pointer" }}>Actualizar</button>
          <button style={{ cursor: "pointer" }}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
