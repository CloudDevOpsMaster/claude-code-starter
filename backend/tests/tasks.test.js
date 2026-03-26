const request = require('supertest');
const app = require('../src/index');
const tasksRouter = require('../src/routes/tasks');

// Resetear datos antes de cada test para tener estado predecible
beforeEach(() => {
    tasksRouter.resetTasks();
});

describe('GET /api/tasks', () => {
    test('devuelve lista de todas las tareas', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.total).toBeGreaterThan(0);
    });

    test('filtra por done=true', async () => {
        const res = await request(app).get('/api/tasks?done=true');
        expect(res.status).toBe(200);
        expect(res.body.data.every(t => t.done === true)).toBe(true);
    });

    test('filtra por done=false', async () => {
        const res = await request(app).get('/api/tasks?done=false');
        expect(res.status).toBe(200);
        expect(res.body.data.every(t => t.done === false)).toBe(true);
    });

    test('ordena por prioridad con ?sort=priority', async () => {
        const res = await request(app).get('/api/tasks?sort=priority');
        expect(res.status).toBe(200);
        const priorities = res.body.data.map(t => t.priority);
        const order = { high: 0, medium: 1, low: 2 };
        for (let i = 0; i < priorities.length - 1; i++) {
            expect(order[priorities[i]]).toBeLessThanOrEqual(order[priorities[i + 1]]);
        }
    });

    test('ignora sort inválido y devuelve lista normal', async () => {
        const res = await request(app).get('/api/tasks?sort=unknown');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    test('combina ?done=false con ?sort=priority', async () => {
        const res = await request(app).get('/api/tasks?done=false&sort=priority');
        expect(res.status).toBe(200);
        expect(res.body.data.every(t => t.done === false)).toBe(true);
        const priorities = res.body.data.map(t => t.priority);
        const order = { high: 0, medium: 1, low: 2 };
        for (let i = 0; i < priorities.length - 1; i++) {
            expect(order[priorities[i]]).toBeLessThanOrEqual(order[priorities[i + 1]]);
        }
    });
});

describe('GET /api/tasks/:id', () => {
    test('devuelve una tarea por id', async () => {
        const res = await request(app).get('/api/tasks/1');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.id).toBe(1);
    });

    test('devuelve 404 si la tarea no existe', async () => {
        const res = await request(app).get('/api/tasks/9999');
        expect(res.status).toBe(404);
        expect(res.body.success).toBe(false);
        expect(res.body.error).toContain('9999');
    });
});

describe('POST /api/tasks', () => {
    test('crea una nueva tarea', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: 'Nueva tarea de test', priority: 'high' });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data.title).toBe('Nueva tarea de test');
        expect(res.body.data.done).toBe(false);
        expect(res.body.data.priority).toBe('high');
        expect(res.body.data.id).toBeDefined();
    });

    test('usa priority "medium" por defecto', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: 'Tarea sin priority' });

        expect(res.status).toBe(201);
        expect(res.body.data.priority).toBe('medium');
    });

    test('devuelve 400 si falta el title', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ priority: 'high' });

        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
        expect(res.body.error).toContain('title');
    });

    test('devuelve 400 si priority es inválido', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: 'Tarea', priority: 'urgente' });

        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
    });

    test('devuelve 400 si el title está vacío', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: '   ' });

        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
    });
});

describe('PUT /api/tasks/:id', () => {
    test('actualiza el title de una tarea', async () => {
        const res = await request(app)
            .put('/api/tasks/1')
            .send({ title: 'Título actualizado' });

        expect(res.status).toBe(200);
        expect(res.body.data.title).toBe('Título actualizado');
    });

    test('marca una tarea como completada', async () => {
        const res = await request(app)
            .put('/api/tasks/1')
            .send({ done: true });

        expect(res.status).toBe(200);
        expect(res.body.data.done).toBe(true);
    });

    test('devuelve 404 si la tarea no existe', async () => {
        const res = await request(app)
            .put('/api/tasks/9999')
            .send({ title: 'No importa' });

        expect(res.status).toBe(404);
        expect(res.body.success).toBe(false);
    });

    test('devuelve 400 si done no es boolean', async () => {
        const res = await request(app)
            .put('/api/tasks/1')
            .send({ done: 'sí' });

        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
    });
});

describe('DELETE /api/tasks/:id', () => {
    test('elimina una tarea existente', async () => {
        const res = await request(app).delete('/api/tasks/1');
        expect(res.status).toBe(204);

        // Verificar que ya no existe
        const checkRes = await request(app).get('/api/tasks/1');
        expect(checkRes.status).toBe(404);
    });

    test('devuelve 404 si la tarea no existe', async () => {
        const res = await request(app).delete('/api/tasks/9999');
        expect(res.status).toBe(404);
        expect(res.body.success).toBe(false);
    });
});

describe('GET /health', () => {
    test('responde con status ok', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toBe(200);
        expect(res.body.data.status).toBe('ok');
    });
});
