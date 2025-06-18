const ModalAddTask = ({
  editIndex,
  handleSaveTask,
  task,
  handleInputChange,
  toggleModal,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editIndex !== null ? "Editar Tarea" : "Nueva Tarea"}</h2>
        <form onSubmit={handleSaveTask}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Escribe tu tarea..."
            className="inputModal"
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
  );
};

export default ModalAddTask;
