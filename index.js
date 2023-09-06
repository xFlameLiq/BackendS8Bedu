const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World!!!");
});

app.listen(8010, () => {
    console.log(">>> Servidor escuchando en el puerto 8010");
});