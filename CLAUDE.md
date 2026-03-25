# CLAUDE.md — claude-code-starter

Este archivo define las reglas y convenciones del proyecto para el agente Claude Code.
Léelo antes de ejecutar cualquier tarea.

---

## Stack del Proyecto

- **Backend:** Node.js 20 + Express 4
- **Base de datos:** Archivo JSON en memoria (sin DB externa, para simplicidad)
- **Testing:** Jest + Supertest
- **Frontend:** HTML + Vanilla JS (sin frameworks)
- **Contenedores:** Docker + docker-compose

---

## Convenciones de Código

### JavaScript
- Usa **camelCase** para variables y funciones
- Usa **UPPER_SNAKE_CASE** para constantes
- Usa `const` por defecto, `let` solo si la variable cambia
- Prefiere funciones flecha: `const fn = () => {}`
- Siempre maneja errores con `try/catch` en rutas async

### Estructura de archivos
```
backend/src/
  routes/      ← un archivo por recurso (tasks.js, users.js)
  middleware/  ← middleware reutilizable
  data/        ← almacenamiento en memoria (tasks.json como seed)
  index.js     ← punto de entrada
```

### API REST
- Rutas en **kebab-case**: `/api/tasks`, `/api/user-settings`
- Respuestas siempre en JSON con esta estructura:
  ```json
  { "success": true, "data": {...} }
  { "success": false, "error": "mensaje claro" }
  ```
- Códigos HTTP correctos: 200 GET/PUT, 201 POST, 204 DELETE, 400 error cliente, 404 not found, 500 error servidor

---

## Restricciones de Seguridad

- ❌ NUNCA pongas secrets o API keys en el código fuente
- ❌ NUNCA hagas `console.log` de datos sensibles de usuario
- ❌ NUNCA uses `eval()` o `Function()` con input del usuario
- ✅ Siempre valida el input antes de procesarlo
- ✅ Usa variables de entorno (`.env`) para configuración

---

## Testing

- Cada ruta nueva debe tener al menos **3 tests**: caso feliz, 404, y payload inválido
- Los tests van en `backend/tests/`
- Correr tests: `npm test`
- Cobertura mínima esperada: **70%**

---

## Commits

Formato: `tipo: descripción corta`

Tipos permitidos:
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `test:` solo tests
- `docs:` solo documentación
- `refactor:` cambio de código sin cambio de comportamiento

Ejemplo: `feat: agregar endpoint DELETE /api/tasks/:id`

---

## Comandos útiles

```bash
# Instalar dependencias
npm install

# Correr backend en desarrollo
npm run dev

# Correr tests
npm test

# Levantar todo con Docker
docker-compose up

# Claude Code — primer uso
claude
```
