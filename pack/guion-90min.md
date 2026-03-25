# Roadmap — Sesión Práctica Claude Code (90 min)

---

## ⏱ BLOQUE 1 — Setup (0:00–15:00)

**Objetivo:** Todos con Claude Code corriendo antes del minuto 15.

> "Antes de cualquier teoría, quiero que lo tengan instalado. Si algo falla, lo resolvemos en vivo."

```bash
npm install -g @anthropic-ai/claude-code
claude --version   # verificar instalación
```

- Si alguien no tiene Node 20+: `nvm install 20`
- Conectar API key: `claude` → seguir el flujo de autenticación

**Luego:**
```bash
git clone https://github.com/TU_USUARIO/claude-code-starter.git
cd claude-code-starter/backend
npm install
npm run dev        # API corriendo en localhost:3000
```

Abrir `frontend/index.html` en el browser. Mostrar la app funcionando.

> "Ya tienen una API real con tests. Esto es su sandbox para hoy."

Mostrar el `CLAUDE.md` en el editor:
> "Este archivo es la memoria del proyecto. El agente lo lee automáticamente. Más adelante van a crear el suyo."

---

## ⏱ BLOQUE 2 — Primer uso real (15:00–35:00)

**Objetivo:** Ver el ciclo completo: prompt → plan → aprobar → código.

```bash
claude    # abrir sesión interactiva
```

Escribir en vivo:
```
/plan Agrega soporte para ?sort=priority en GET /api/tasks.
Las tareas deben ordenarse: high primero, medium segundo, low último.
```

**Pausar y mostrar el plan a la audiencia:**
> "Noten que no ejecutó nada todavía. Está esperando que yo apruebe.
> Esto es la diferencia entre un autocomplete y un agente."

Aprobar → ver los cambios en el editor → correr tests:
```bash
npm test
```

> "El agente modificó el código Y los tests pasan. Eso es lo que queremos."

Probar en el browser o curl:
```bash
curl "http://localhost:3000/api/tasks?sort=priority"
```

**Punto de reflexión (2 min):**
> "¿Cuánto tiempo hubiera tomado eso manualmente? ¿5 minutos? ¿10?
> Lo hicimos en 3. Y el agente no se equivocó en la validación ni en los tests."

---

## ⏱ BLOQUE 3 — Ejercicios guiados (35:00–85:00)

> "Ahora trabajan ustedes. Yo estoy aquí para desbloquear, no para hacer el trabajo."

### Ejercicio 2 — Generar tests (35:00–50:00)

Abrir `exercises/02-generate-tests.md`. Leerlo en voz alta. Lanzar.

Prompt de ejemplo:
```
Agrega dos tests que faltan en PUT /api/tasks/:id:
1. Que devuelva 400 si priority tiene valor inválido
2. Que updatedAt esté presente en la respuesta
Usa el skill add-test.
```

Mientras trabajan, preguntar al grupo:
> "¿Alguien está viendo algo inesperado en lo que genera el agente?"

### Ejercicio 3 — Code review (50:00–65:00)

Abrir `exercises/03-review-code.md`. Este ejercicio no requiere instalar nada nuevo.

> "Este código tiene 4 problemas intencionales. Vean qué tan rápido los encuentra Claude."

Hacer el prompt en vivo primero, luego dejar que experimenten.

### Ejercicio 4 — Feature completa (65:00–85:00)

Abrir `exercises/04-add-feature.md`. Este es el más complejo.

> "Aquí se juntan todo: /plan, skills, tests, e iteración.
> Si el agente no hace exactamente lo que esperan en el primer intento, ajusten el prompt. Eso es parte del proceso."

Circular entre participantes. Objetivo: que cada uno llegue al menos hasta que `npm test` pase.

---

## ⏱ CIERRE (85:00–90:00)

> "Hicieron en 90 minutos lo que normalmente toma medio día.
> Llevaron esto a un proyecto real la próxima semana y noten la diferencia."

**Recursos que ya tienen en el repo:**
- `pack/guia-rapida.md` — comandos de referencia
- `pack/prompts-utiles.md` — 20 prompts para copiar
- `pack/CLAUDE.md-template.md` — plantilla para sus proyectos

**El próximo paso concreto:**
> "Tomen un ticket pendiente en su trabajo. Abran Claude Code. Usen `/plan`.
> No necesitan más contexto que ese para empezar."

Preguntas — máximo 5 min.

---

## Notas para el instructor

- **Si alguien se traba en la instalación:** Continúa el demo tú solo, ellos siguen en su máquina en paralelo.
- **Si el agente genera algo incorrecto:** No lo ocultes — muéstralo. Es una oportunidad de mostrar cómo se itera.
- **Ritmo:** Los ejercicios 2 y 3 son rápidos. El 4 es donde la gente se queda. Deja tiempo ahí.
- **Pantalla:** Terminal grande, tema oscuro, letra mínimo 18px.
