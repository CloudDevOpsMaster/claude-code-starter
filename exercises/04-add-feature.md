# Ejercicio 04 — Agregar una feature completa

**Tiempo estimado:** 20-30 minutos  
**Nivel:** Avanzado  
**Objetivo:** Usar Claude Code para implementar una feature end-to-end: código + tests.

---

## La Feature: Categorías de Tareas

Las tareas actualmente tienen `title`, `done`, y `priority`.  
Vamos a agregar **categorías** (trabajo, personal, estudio, otro).

---

## Requerimientos

### Backend
- `category` es un campo opcional (default: `"otro"`)
- Valores permitidos: `trabajo`, `personal`, `estudio`, `otro`
- El endpoint `GET /api/tasks` debe soportar `?category=trabajo` para filtrar
- Validar el valor al crear (`POST`) y actualizar (`PUT`)

### Tests
- Test: crear tarea con categoría válida
- Test: crear tarea con categoría inválida → 400
- Test: filtrar por `?category=personal`
- Test: tarea sin categoría usa `"otro"` por default

---

## Pasos

1. Abre Claude Code con `/plan` primero:
   ```
   /plan Agrega un campo "category" a las tareas de la API. 
   
   Requerimientos:
   - Valores permitidos: trabajo, personal, estudio, otro
   - Default: "otro"
   - GET /api/tasks?category=trabajo debe filtrar
   - Validar en POST y PUT
   - Agregar tests para todos los casos
   
   Usa el skill add-endpoint y add-test.
   ```

2. Revisa el plan antes de aprobar. Verifica:
   - ¿Modificará las rutas correctas?
   - ¿Generará los tests que pediste?
   - ¿Respeta las convenciones del CLAUDE.md?

3. Aprueba y deja que Claude implemente.

4. Corre los tests:
   ```bash
   cd backend && npm test
   ```

5. Prueba la feature manualmente:
   ```bash
   # Crear tarea con categoría
   curl -X POST http://localhost:3000/api/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Estudiar Claude Code", "category": "estudio"}'

   # Filtrar por categoría
   curl "http://localhost:3000/api/tasks?category=estudio"
   ```

---

## Cómo saber si lo hiciste bien

✅ `npm test` pasa al 100%  
✅ `POST` con `category: "invalido"` devuelve 400  
✅ `GET ?category=estudio` solo devuelve tareas de esa categoría  
✅ Tarea sin `category` usa `"otro"` automáticamente  

---

## Reflexión

- ¿Cuánto código escribiste tú vs Claude?
- ¿El plan que generó Claude era lo que esperabas?
- ¿Qué harías diferente en el prompt para mejorar el resultado?

---

## Bonus: actualiza el frontend

Cuando termines el backend, pide a Claude que actualice `frontend/index.html` para mostrar la categoría junto con el badge de prioridad.
