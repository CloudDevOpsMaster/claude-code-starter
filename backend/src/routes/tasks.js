const express = require('express');
const router = express.Router();

// Almacenamiento en memoria (simula una base de datos)
let tasks = [
    { id: 1, title: 'Instalar Claude Code', done: true, priority: 'high', createdAt: '2026-01-01T10:00:00Z' },
    { id: 2, title: 'Leer el CLAUDE.md del proyecto', done: true, priority: 'high', createdAt: '2026-01-01T10:05:00Z' },
    { id: 3, title: 'Hacer el ejercicio 01', done: false, priority: 'medium', createdAt: '2026-01-01T10:10:00Z' },
    { id: 4, title: 'Hacer el ejercicio 02', done: false, priority: 'medium', createdAt: '2026-01-01T10:15:00Z' },
];
let nextId = 5;

// GET /api/tasks — Lista todas las tareas
router.get('/', (req, res) => {
    const { done } = req.query;
    let result = tasks;

    if (done !== undefined) {
        const isDone = done === 'true';
        result = tasks.filter(t => t.done === isDone);
    }

    res.json({ success: true, data: result, total: result.length });
});

// GET /api/tasks/:id — Obtiene una tarea por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ success: false, error: `Tarea con id ${id} no encontrada` });
    }

    res.json({ success: true, data: task });
});

// POST /api/tasks — Crea una nueva tarea
router.post('/', (req, res) => {
    const { title, priority = 'medium' } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ success: false, error: 'El campo "title" es requerido y debe ser texto' });
    }

    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(priority)) {
        return res.status(400).json({ success: false, error: `"priority" debe ser: ${validPriorities.join(', ')}` });
    }

    const newTask = {
        id: nextId++,
        title: title.trim(),
        done: false,
        priority,
        createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    res.status(201).json({ success: true, data: newTask });
});

// PUT /api/tasks/:id — Actualiza una tarea
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ success: false, error: `Tarea con id ${id} no encontrada` });
    }

    const { title, done, priority } = req.body;
    const task = tasks[taskIndex];

    if (title !== undefined) {
        if (typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ success: false, error: '"title" debe ser texto no vacío' });
        }
        task.title = title.trim();
    }

    if (done !== undefined) {
        if (typeof done !== 'boolean') {
            return res.status(400).json({ success: false, error: '"done" debe ser true o false' });
        }
        task.done = done;
    }

    if (priority !== undefined) {
        const validPriorities = ['low', 'medium', 'high'];
        if (!validPriorities.includes(priority)) {
            return res.status(400).json({ success: false, error: `"priority" debe ser: ${validPriorities.join(', ')}` });
        }
        task.priority = priority;
    }

    task.updatedAt = new Date().toISOString();
    tasks[taskIndex] = task;

    res.json({ success: true, data: task });
});

// DELETE /api/tasks/:id — Elimina una tarea
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ success: false, error: `Tarea con id ${id} no encontrada` });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Exportamos tasks para poder resetearlos en tests
router.resetTasks = () => {
    tasks = [
        { id: 1, title: 'Tarea de prueba 1', done: false, priority: 'medium', createdAt: '2026-01-01T10:00:00Z' },
        { id: 2, title: 'Tarea de prueba 2', done: true, priority: 'high', createdAt: '2026-01-01T10:05:00Z' },
    ];
    nextId = 3;
};

module.exports = router;
