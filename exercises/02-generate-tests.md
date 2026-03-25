# Ejercicio 02 — Generar tests automáticamente

**Tiempo estimado:** 10-15 minutos  
**Objetivo:** Usar Claude Code para generar tests de un endpoint.

---

## Contexto

El endpoint `PUT /api/tasks/:id` tiene tests, pero le falta un caso: **¿qué pasa si intentas actualizar el `priority` con un valor inválido?**

---

## Tarea

Parte 1: Pide a Claude Code que genere el test faltante.

Parte 2: Pide que también agregue un test para verificar que `updatedAt` se actualiza correctamente.

---

## Pasos

1. Abre Claude Code:
   ```bash
   claude
   ```

2. Ejecuta este prompt:
   ```
   En el archivo backend/tests/tasks.test.js, agrega dos tests que faltan para PUT /api/tasks/:id:
   1. Que devuelva 400 si priority tiene un valor no válido (por ejemplo "urgente")
   2. Que el campo updatedAt esté presente en la respuesta después de actualizar
   
   Usa el skill add-test.
   ```

3. Revisa los tests generados.

4. Corre los tests para confirmar que pasan:
   ```bash
   cd backend && npm test
   ```

---

## Bonus

Pide a Claude Code que genere el reporte de cobertura:
```
cd backend && npm run test:coverage
```

¿Qué porcentaje de cobertura tienes ahora?

---

## Cómo saber si lo hiciste bien

✅ Los 2 nuevos tests están en `backend/tests/tasks.test.js`  
✅ `npm test` pasa sin errores  
✅ Los tests verifican exactamente los casos descritos  
