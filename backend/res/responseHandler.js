export const handleResponse = (res, statusCode = 200, data, message) => {
  const success = statusCode >= 200 && statusCode < 300;

  return res.status(statusCode).json({
    success,
    status: statusCode,
    message: message || getDefaultMessage(statusCode),
    data,
  });
};

export const handleError = (res, statusCode = 500, error) => {
  console.error(`[Error ${statusCode}]`, error?.message || error);

  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: error?.message || getDefaultMessage(statusCode),
    data: null,
  });
};

const getDefaultMessage = (statusCode) => {
  const messages = {
    200: "Solicitud exitosa",
    201: "Recurso creado correctamente",
    204: "Sin contenido",
    400: "Solicitud incorrecta",
    401: "No autorizado",
    403: "Prohibido",
    404: "Recurso no encontrado",
    409: "Conflicto de datos",
    500: "Error interno del servidor",
  };
  return messages[statusCode] || "Respuesta desconocida";
};
