import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Controla el modal
  const [tasks, setTasks] = useState([
    "Hacer la limpieza",
    "Preparar la comida",
    "Comprar suministros",
    "Estudiar programación",
  ]);
  const [task, setTask] = useState(""); // Almacena la tarea actual
  const [searchValue, setSearchValue] = useState(""); // Filtrar tareas
  const [editIndex, setEditIndex] = useState(null); // Índice de la tarea en edición

  // Filtrar tareas según el valor de búsqueda
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Abrir el modal para agregar o editar
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Manejar el cambio de la entrada del modal
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Manejar la acción de guardar una tarea (nueva o editada)
  const handleSaveTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editIndex !== null) {
        // Actualizar tarea existente
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // Agregar nueva tarea
        setTasks([...tasks, task]);
      }
      setTask("");
      toggleModal(); // Cerrar el modal
    } else {
      alert("Por favor, escribe una tarea válida.");
    }
  };

  // Manejar la acción de editar una tarea
  const handleEditTask = (index) => {
    setEditIndex(index); // Establece el índice de la tarea a editar
    setTask(tasks[index]); // Precarga la tarea en el modal
    toggleModal(); // Abre el modal
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        {tasks.length ? (
          filteredTasks.length ? (
            <TaskList tasks={filteredTasks} onEdit={handleEditTask} />
          ) : (
            "Tarea no existente"
          )
        ) : (
          "No hay tareas aún"
        )}
        <button
          className="add-task"
          onClick={() => {
            setEditIndex(null); // Resetea el índice de edición
            setTask(""); // Limpia la entrada
            toggleModal(); // Abre el modal
          }}
        >
          +
        </button>
      </main>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editIndex !== null ? "Editar Tarea" : "Nueva Tarea"}</h2>
            <form onSubmit={handleSaveTask}>
              <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Escribe tu tarea..."
              />
              <div className="modal-actions">
                <button type="button" onClick={toggleModal}>
                  Cancelar
                </button>
                <button type="submit">
                  {editIndex !== null ? "Actualizar" : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
