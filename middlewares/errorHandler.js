// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
    // verificar si el error tiene un codigo definido sino establecer
    const statusCode = err.status || 500;

    // Construir objeto de respuesta de error
    const errorResponse = {
        error: {
            message: err.message || "Error del servidor",
            code: err.code || "internal error",
        },
    };

    // Enviar respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;