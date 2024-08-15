const express = require('express');
const cors = require('cors');
const pool = require('./db');
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(express.json());
app.use(cors());

// Routes

// Get all todos
app.get('/tasks', async (req, res) => {
    try{
        const allTasks = await pool.query('SELECT * FROM tasks');
        res.json(allTasks.rows);
        console.log('Tasks fetched');
        console.log(allTasks.rows);
    }catch (err){
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
})

//add a todo
app.post('/tasks/:id', async (req, res) => {
    const { title, progress, date} = req.body;
    const id = uuidv4();
    try {
        const newTask = await pool.query('INSERT INTO tasks (id, title, progress) VALUES ($1, $2),', [id, title, progress]);
        res.json(newTask);
    } catch(error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('Server has started on port 5000');
}); 