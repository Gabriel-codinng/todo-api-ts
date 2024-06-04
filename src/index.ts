import express from 'express'

const app = express()

app.use(express.json()) // Middleware transform reqbody into json.

const PORT = 3000;

app.get("/salute", (_req, res) => {
    console.log("lol")
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log('App listen in port: 3000')
})