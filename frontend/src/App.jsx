import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
import ModalAddTask from "./components/ModalAddTask";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([
    "Hacer la limpieza",
    "Preparar la comida",
    "Comprar suministros",
    "Estudiar programación",
  ]);
  const [task, setTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
      toggleModal();
    } else {
      alert("Por favor, escribe una tarea válida.");
    }
  };

  const handleDeleteTask = (index) => {
    const taskdeleted = tasks.filter((_, i) => i !== index);
    setTasks(taskdeleted);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setTask(tasks[index]);
    toggleModal();
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        {tasks.length ? (
          filteredTasks.length ? (
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ) : (
            "Tarea no existente"
          )
        ) : (
          "No hay tareas aún"
        )}
        <button
          className="add-task"
          onClick={() => {
            setEditIndex(null);
            setTask("");
            toggleModal();
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
      </main>

      {isOpen && (
        <ModalAddTask
          editIndex={editIndex}
          handleInputChange={handleInputChange}
          task={task}
          handleSaveTask={handleSaveTask}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

export default App;
