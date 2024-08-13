const express = require('express');
const cors = require('cors');
const pool = require('./db');


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

app.listen(5000, () => {
    console.log('Server has started on port 5000');
}); 