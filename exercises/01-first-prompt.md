# Ejercicio 01 — Tu primer prompt con Claude Code

**Tiempo estimado:** 10-15 minutos  
**Objetivo:** Hacer tu primer cambio real a la API usando Claude Code.

---

## Contexto

La API ya tiene un campo `priority` en las tareas (low, medium, high). Pero no tiene forma de ordenar las tareas por prioridad al listarlas.

---

## Tarea

Pide a Claude Code que agregue un parámetro `?sort=priority` al endpoint `GET /api/tasks`.

Cuando se pase `?sort=priority`, las tareas deben devolverse ordenadas:
1. `high` primero
2. `medium` segundo  
3. `low` último

---

## Pasos

1. Abre una sesión de Claude Code:
   ```bash
   cd claude-code-starter
   claude
   ```

2. Usa `/plan` primero para revisar qué va a cambiar:
   ```
   /plan Agrega soporte para ?sort=priority en GET /api/tasks. 
   Las tareas deben ordenarse: high primero, medium segundo, low último.
   ```

3. Revisa el plan. Si estás de acuerdo, apruébalo.

4. Verifica que Claude modificó `backend/src/routes/tasks.js`.

5. Prueba en el navegador o con curl:
   ```bash
   curl "http://localhost:3000/api/tasks?sort=priority"
   ```

---

## Cómo saber si lo hiciste bien

✅ Las tareas `high` aparecen primero en la respuesta  
✅ El orden no se rompe si hay tareas sin `priority`  
✅ Si no pasas `?sort=priority`, las tareas siguen en el orden original  

---

## Reflexión

- ¿Claude entendió bien el requerimiento sin que lo explicaras con detalle?
- ¿Qué hubiera pasado si no hubieras usado `/plan` primero?
