const express = require("express");
const { auth } = require('express-oauth2-jwt-bearer');

const productosRouter = require("./routes/productos");
const errorHandler = require('./middlewares/errorHandler');

const jwtCheck = auth({
    audience: 'https://api.example.com/api/productos',
    issuerBaseURL: 'https://dev-hdaogwsqsutayp8p.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

const app = express();
app.use(express.json());


// Validar en todas las rutas
// enforce on all endpoints
//app.use(jwtCheck);

// Ruta base
app.get("/", (req, res) => {
    res.send("API de productos");
});

// Ruta de productos
app.use("/api/productos", jwtCheck, productosRouter);

app.use(errorHandler);

app.use(errorHandler);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API de productos escuchando en el puerto ${PORT}`);
});