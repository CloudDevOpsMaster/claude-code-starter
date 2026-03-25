# 20 Prompts Listos para Claude Code

Cópialos tal cual o adáptalos a tu proyecto.

---

## Setup y Contexto

1. `Lee el CLAUDE.md de este proyecto y confirma que lo entendiste.`
2. `Analiza la estructura del proyecto y dame un resumen de cómo está organizado.`
3. `¿Qué dependencias están instaladas y para qué sirve cada una?`

---

## Desarrollo

4. `/plan Necesito agregar [feature]. Analiza el código existente y dame un plan antes de tocar nada.`
5. `Agrega un endpoint POST /api/[recurso] con validación de input. Sigue las convenciones del CLAUDE.md.`
6. `Agrega paginación al endpoint GET /api/[recurso]. Parámetros: ?page=1&limit=10`
7. `Implementa middleware de logging que registre método, ruta, status y tiempo de respuesta.`
8. `Agrega manejo de errores global que capture excepciones no manejadas.`
9. `Refactoriza [nombre de función] para que sea más legible. No cambies el comportamiento.`
10. `Convierte esta función a async/await: [pega la función]`

---

## Testing

11. `Genera tests para el endpoint [método] /api/[ruta]. Cubre: caso feliz, 404, y validación de input.`
12. `¿Cuáles son las rutas o funciones con menos cobertura? Agrégales tests.`
13. `Uno de los tests falla con este error: [pega el error]. Diagnostica y corrígelo.`
14. `Agrega un test de integración que pruebe el flujo completo: crear → actualizar → eliminar.`

---

## Code Review

15. `Revisa este código y encuentra: bugs, problemas de seguridad, y código que no sigue las convenciones: [pega el código]`
16. `¿Este endpoint maneja correctamente todos los edge cases? [pega el endpoint]`
17. `¿Hay secrets hardcodeados, console.logs de datos sensibles, o variables de entorno mal usadas en este proyecto?`

---

## Debugging

18. `Tengo este error: [pega el error y el stack trace]. Analiza qué lo causa y propón un fix.`
19. `El endpoint [ruta] devuelve [respuesta inesperada] cuando debería [comportamiento esperado]. Investiga.`
20. `Los tests pasan localmente pero fallan en CI con este error: [pega el error]. ¿Qué puede ser?`
