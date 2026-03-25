# 🚀 claude-code-starter

> Repo sandbox para el curso **Ciclo de Desarrollo Moderno con Claude Code**.  
> Clona, instala y empieza a usar Claude Code en menos de 5 minutos.

---

## ¿Qué es este repo?

Una **ToDo API** simple construida con Node.js + Express, lista para usar como sandbox donde practicarás Claude Code. Incluye:

- ✅ API REST con 5 endpoints (CRUD de tareas)
- ✅ Frontend básico que consume la API
- ✅ Tests listos con Jest + Supertest
- ✅ `CLAUDE.md` pre-configurado (el agente ya conoce las reglas)
- ✅ 2 Skills de Claude Code (`add-endpoint`, `add-test`)
- ✅ 4 Ejercicios guiados para practicar
- ✅ Docker Compose para levantar todo con 1 comando

---

## Instalación rápida

### Prerrequisitos
- Node.js 20+
- Claude Code: `npm install -g @anthropic-ai/claude-code`

### Pasos

```bash
# 1. Clona el repo
git clone https://github.com/TU_USUARIO/claude-code-starter.git
cd claude-code-starter

# 2. Instala dependencias
cd backend && npm install

# 3. Corre el backend
npm run dev
# → API corriendo en http://localhost:3000

# 4. Abre el frontend
open ../frontend/index.html

# 5. Inicia Claude Code
claude
```

Con Docker:
```bash
docker-compose up
# → Todo levanta automáticamente
```

---

## API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/tasks` | Lista todas las tareas |
| GET | `/api/tasks/:id` | Obtiene una tarea |
| POST | `/api/tasks` | Crea una tarea |
| PUT | `/api/tasks/:id` | Actualiza una tarea |
| DELETE | `/api/tasks/:id` | Elimina una tarea |

**Ejemplo:**
```bash
# Crear una tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Mi primera tarea", "done": false}'
```

---

## Ejercicios

Están en la carpeta `exercises/`. Hazlos en orden:

1. [`01-first-prompt.md`](exercises/01-first-prompt.md) — Tu primer prompt con Claude Code
2. [`02-generate-tests.md`](exercises/02-generate-tests.md) — Generar tests automáticamente
3. [`03-review-code.md`](exercises/03-review-code.md) — Revisar código con el agente
4. [`04-add-feature.md`](exercises/04-add-feature.md) — Agregar una feature completa

---

## Skills disponibles

En `.claude/skills/`:

- **`add-endpoint`** — Patrón para agregar un nuevo endpoint a la API
- **`add-test`** — Patrón para generar tests de un endpoint

Úsalos con: `claude "usa el skill add-endpoint para crear GET /api/tags"`

---

## Correr tests

```bash
cd backend
npm test              # todos los tests
npm test -- --watch   # modo watch
npm run test:coverage # con cobertura
```

---

## Estructura del proyecto

```
claude-code-starter/
├── CLAUDE.md                  ← reglas para el agente
├── README.md
├── docker-compose.yml
├── .claude/
│   └── skills/
│       ├── add-endpoint.md
│       └── add-test.md
├── backend/
│   ├── src/
│   │   ├── routes/tasks.js
│   │   ├── data/tasks.json
│   │   └── index.js
│   ├── tests/
│   │   └── tasks.test.js
│   └── package.json
├── frontend/
│   └── index.html
└── exercises/
    ├── 01-first-prompt.md
    ├── 02-generate-tests.md
    ├── 03-review-code.md
    └── 04-add-feature.md
```

---

## Recursos del curso

- 📄 [Guía rápida de comandos](../pack/guia-rapida.md)
- 📄 [20 prompts útiles](../pack/prompts-utiles.md)
- 📄 [Template CLAUDE.md](../pack/CLAUDE.md-template.md)
