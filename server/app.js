const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

// Routes

// Get all todos
app.get('/tasks', async (req, res) => {
    try{
        const allTasks = await pool.query('SELECT * FROM tasks');
        res.json(allTasks.rows);
        console.log(allTasks.rows);
    }catch (err){
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log('Server has started on port 5000');
}); 