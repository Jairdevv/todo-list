import { pool } from "../database/db.js";
import { handleError, handleResponse } from "../res/responseHandler.js";

export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks order by created_at");
    console.log("pidiendo tareas");
    return handleResponse(res, 200, rows);
  } catch (error) {
    return handleError(res, 500, error);
  }
};

export const getTask = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return handleResponse(res, 404, null, "Task not found");
    }
    return handleResponse(res, 200, rows[0], "Task encontrada");
  } catch (error) {
    return handleError(res, 500, error);
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );

    console.log("tarea creada");
    return handleResponse(
      res,
      201,
      { id: rows.insertId, title, description },
      "Task created"
    );
  } catch (error) {
    return handleError(res, 500, error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);

    if (result.affectedRows === 0) {
      return handleResponse(res, 404, null, "Task not found");
    }

    console.log("tarea actualizada");
    return handleResponse(res, 200, result, "Task updated");
  } catch (error) {
    return handleError(res, 500, error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return handleResponse(res, 404, null, "Task not found");
    }

    console.log("tarea eliminada");
    return handleResponse(res, 200, result, "Delete process successful");
  } catch (error) {
    return handleError(res, 500, error);
  }
};
