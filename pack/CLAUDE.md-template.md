# CLAUDE.md — Template para tu proyecto

Copia este archivo a la raíz de tu proyecto y personalízalo.

---

## Stack del Proyecto

- **Frontend:** [ej. React 18 / Next.js 14 / Vanilla HTML]
- **Backend:** [ej. Node.js 20 + Express / FastAPI / Django]
- **Base de datos:** [ej. PostgreSQL 16 / MongoDB / SQLite]
- **Testing:** [ej. Jest + Supertest / Pytest / Vitest + Playwright]
- **Infra:** [ej. Docker + GitHub Actions + Vercel]

---

## Convenciones de Código

### Nombres
- Variables y funciones: **camelCase** (JS) / **snake_case** (Python)
- Constantes: **UPPER_SNAKE_CASE**
- Archivos de componentes: **PascalCase.jsx**
- Archivos de rutas y utils: **kebab-case.js**

### Estilo
- Indentación: **2 espacios** (JS) / **4 espacios** (Python)
- Punto y coma: [sí / no]
- Comillas: [simples / dobles]

### API REST
- Rutas en **kebab-case**: `/api/user-settings`
- Respuestas con estructura fija:
  ```json
  { "success": true, "data": {} }
  { "success": false, "error": "mensaje" }
  ```

---

## Estructura del Proyecto

```
src/
  routes/      ← un archivo por recurso
  middleware/  ← middleware reutilizable
  services/    ← lógica de negocio
  utils/       ← helpers reutilizables
tests/         ← espejo de src/
```

---

## Restricciones

- ❌ NUNCA pongas API keys o passwords en el código
- ❌ NUNCA hagas `console.log` de datos sensibles
- ❌ NUNCA uses `eval()` con input del usuario
- ✅ Siempre valida input antes de procesarlo
- ✅ Usa `.env` para todas las configuraciones
- ✅ Cada feature nueva necesita tests

---

## Commits

Formato: `tipo: descripción corta`

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `test:` solo tests
- `docs:` solo documentación
- `refactor:` sin cambio de comportamiento

---

## Comandos principales

```bash
npm run dev       # desarrollo
npm test          # tests
npm run build     # producción
docker-compose up # todo en Docker
```
