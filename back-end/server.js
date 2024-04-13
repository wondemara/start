const express =require('express')
const cors =require('cors')


const app = express()

app.use(cors())
app.use(express.json())



app.use("/gete",require("./routes/get.routes.js"))

// app.use("/auth",require("./routes/auth.routes.js"))

module.exports = app;
