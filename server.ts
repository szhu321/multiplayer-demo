import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello from Colyseus server!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on https://localhost:${PORT}`)
});