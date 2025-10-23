import { useRef, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
import ModalAddTask from "./components/ModalAddTask";

function App() {
  const nextId = useRef(1);
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      alert("Por favor, escribe una tarea válida.");
      return;
    }

    const duplicate = tasks.some(
      (t) => t.text.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (duplicate && editTaskId === null) {
      alert("La tarea ya existe.");
      return;
    }

    if (editTaskId !== null) {
      // const updatedTasks = [...tasks];
      // updatedTasks[editTaskId] = {
      //   ...updatedTasks[editTaskId],
      //   text: trimmedTask,
      // };
      const updatedTasks = tasks.map((t) =>
        t.id === editTaskId ? { ...t, text: trimmedTask } : t
      );
      setTasks(updatedTasks);
      setEditTaskId(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: nextId.current++,
          text: trimmedTask,
          completed: false,
        },
      ]);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEditTask = (index) => {
    setEditTaskId(index);
    setTask(tasks[index].text);
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
            setEditTaskId(null);
            setTask("");
            toggleModal();
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
      </main>

      {isOpen && (
        <ModalAddTask
          editTaskId={editTaskId}
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
