# Skill: add-endpoint

Usa este patrón cuando el usuario pida agregar un nuevo endpoint a la API.

## Pasos

1. **Define el endpoint** en `backend/src/routes/<recurso>.js`:
   - Si el archivo del recurso no existe, créalo siguiendo el patrón de `tasks.js`
   - Registra la ruta en `backend/src/index.js` con `app.use('/api/<recurso>', router)`

2. **Estructura del handler:**
```javascript
router.<método>('/<ruta>', (req, res) => {
  // 1. Validar input
  // 2. Lógica de negocio
  // 3. Responder con { success: true, data: ... } o { success: false, error: '...' }
});
```

3. **Códigos HTTP correctos:**
   - GET: 200
   - POST: 201
   - PUT: 200
   - DELETE: 204 (sin body)
   - Error de cliente: 400
   - No encontrado: 404
   - Error de servidor: 500

4. **Agrega el test** en `backend/tests/<recurso>.test.js`:
   - Caso feliz
   - 404 o input inválido
   - Validación de campos requeridos

5. **Corre los tests** para confirmar que todo pasa:
```bash
cd backend && npm test
```

## Ejemplo de prompt para usar este skill

> "Agrega un endpoint GET /api/tasks?done=true para filtrar tareas completadas. Usa el skill add-endpoint."
