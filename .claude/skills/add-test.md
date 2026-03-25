# Skill: add-test

Usa este patrón cuando el usuario pida generar tests para un endpoint existente.

## Pasos

1. **Identifica el endpoint** a testear (método, ruta, comportamiento esperado).

2. **Crea o actualiza** el archivo `backend/tests/<recurso>.test.js`.

3. **Estructura mínima por endpoint:**
```javascript
describe('<MÉTODO> /api/<ruta>', () => {
  test('<caso feliz>', async () => {
    const res = await request(app).<método>('<ruta>').send({ /* payload */ });
    expect(res.status).toBe(<código>);
    expect(res.body.success).toBe(true);
    // Validar campos clave del response
  });

  test('devuelve 404 si el recurso no existe', async () => {
    const res = await request(app).<método>('/api/<ruta>/9999');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  test('devuelve 400 con payload inválido', async () => {
    const res = await request(app).<método>('<ruta>').send({});
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBeDefined();
  });
});
```

4. **Recuerda** agregar `beforeEach(() => router.resetTasks())` para limpiar estado entre tests.

5. **Corre los tests:**
```bash
cd backend && npm test
```

## Ejemplo de prompt para usar este skill

> "Genera tests para el endpoint DELETE /api/tasks/:id. Usa el skill add-test."
