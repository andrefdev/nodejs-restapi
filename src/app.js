import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

//para poder hacer peticiones json
app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes)

export default app;