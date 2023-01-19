import { pool } from "../db.js"


//obtener datos
export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

    //si no se encuentra dato enviar 404
    if (rows.length <= 0) return res.status(404).json({
        message: 'No se encontro ningún empleado'})

    console.log(rows);
    res.json(rows[0]);
}
//crear datos
export const postEmployees = async (req, res) => {

    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    console.log(req.body)   
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

//modificar datos
export const updateEmployees = async(req, res) => {
    const id = req.params.id
    const {name, salary} = req.body
    console.log(id,name,salary)
    
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    console.log(result)
    
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'No se encontro ningún empleado'
    })
    const [rows] = await pool.query('SELECT* FROM employee WHERE id = ?', [id])
    res.json(rows[0])
}

//eliminar datos
export const deleteEmployees = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    console.log(result)
    if (result.affectedRows > 0)
    {
        res.sendStatus(204)
    }
    else
    {
        res.send('no employee was deleted')
    }
}

