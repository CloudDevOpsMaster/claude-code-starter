# Workshop: Ejercicios de 1 Hora en Teams para Líderes de Desarrollo

**Perfil objetivo:** Líderes técnicos, CTOs, arquitectos que no necesariamente escriben código día a día. Reconocen patrones, toman decisiones de arquitectura, gestionan equipos.

**Regla de oro:** Cada ejercicio dura **5-8 min máximo** y se puede hacer en el chat de Teams o en un doc compartido. **Sin instalaciones, sin IDE, sin correr código.**

---

## Estructura de la Sesión (60 min)

| Tiempo | Bloque | Ejercicio | Herramienta |
|--------|--------|-----------|-------------|
| 0-5 min | Intro | Encuesta Vibe vs SPEC | Poll Teams |
| 5-15 min | CLAUDE.md | Escribe tu CLAUDE.md en 5 min | Chat/Doc |
| 15-25 min | Skills | Identifica un skill de tu equipo | Chat |
| 25-35 min | Plan Mode | El juego del "Plan primero" | Chat/Doc |
| 35-45 min | Subagents | Divide la tarea | Whiteboard/Chat |
| 45-52 min | Build | ¿Cuál es tu Definition of Done? | Chat |
| 52-60 min | Cierre | Reflexión: ¿Vibe o SPEC mañana? | Poll + Debrief |

---

## Ejercicio 0 — Encuesta de Apertura (5 min)
**Herramienta:** Poll de Teams o chat

Lanza esta pregunta al grupo:

```
Hoy, ¿cómo describe mejor cómo tu equipo usa IA?

A) Vibe Coding — le pedimos y vemos qué sale
B) Híbrido — a veces con estructura, a veces no
C) SPEC DRIVEN — tenemos reglas claras antes de pedirle
D) No usamos IA todavía
```

**Por qué funciona:** Rompe el hielo, genera datos reales y conecta directamente con la sección Vibe vs SPEC. Los resultados se retoman al final.

---

## Ejercicio 1 — CLAUDE.md en 5 minutos (10 min)
**Herramienta:** Notas de Teams / doc compartido

> "Tienes 5 minutos para escribir el CLAUDE.md de tu equipo. Solo 3 secciones obligatorias."

Plantilla mínima:
```markdown
# CLAUDE.md — [Mi Equipo]

## Stack
[Qué lenguajes, frameworks y herramientas usamos]

## Lo que NUNCA hacemos
- ❌ [Restricción 1]
- ❌ [Restricción 2]

## Lo que SIEMPRE hacemos
- ✅ [Convención 1]
- ✅ [Convención 2]
```

**Debriefing (2 min):** Pide a 2-3 voluntarios que lean su "Lo que NUNCA hacemos". Suelen salir las discusiones más interesantes del curso.

---

## Ejercicio 2 — Identifica un Skill (10 min)
**Herramienta:** Chat de Teams

> "¿Qué hace tu equipo de forma repetitiva que podría convertirse en un skill de Claude Code?"

Cada participante escribe en el chat:
```
MI SKILL:
Nombre: [ej: "agregar-migracion-db"]
Cuándo usarlo: [ej: "cada vez que hay un cambio de schema"]
Pasos clave: [3 pasos máximo]
```

**Objetivo:** Identificar que los skills ya existen en la mente del equipo (como "cómo hacemos los PRs", "cómo nombramos las tablas"). Solo hay que documentarlos.

**Debriefing (2 min):** ¿Cuántos skills identificaron? ¿Cuál es el más urgente de documentar?

---

## Ejercicio 3 — El Juego del "Plan Primero" (10 min)
**Herramienta:** Chat o documento

Presenta este escenario:

> **Escenario:** Tu equipo recibió este prompt de un desarrollador:
> *"Agrega autenticación con Google al sistema de reservas."*

Pregunta al grupo:
```
Antes de que el agente escriba una sola línea de código,
¿qué preguntas deberías responder en el PLAN?

Escribe tus 3 preguntas más importantes en el chat.
```

Ejemplos esperados:
- ¿Dónde se almacenan los tokens?
- ¿Hay sesiones existentes que migrar?
- ¿Qué endpoints quedan protegidos?

**Debriefing:** El plan no es un lujo — es el momento donde el líder agrega más valor. El agente puede escribir el código; el líder define las restricciones.

---

## Ejercicio 4 — Divide la Tarea (10 min)
**Herramienta:** Whiteboard de Teams o chat

> "Si tuvieras 3 subagentes disponibles ahora mismo, ¿cómo dividirías esta tarea?"

**Tarea:** *"Auditar la seguridad del módulo de pagos"*

Cada participante responde:
```
Agente A investiga: _______________
Agente B investiga: _______________
Agente C investiga: _______________
¿Cuál va primero o son en paralelo?: ___
```

**Por qué funciona:** Los líderes ya piensan en paralelo (dividen trabajo entre personas). El ejercicio solo cambia "personas" por "agentes". Emerge naturalmente la conversación sobre dependencias entre tareas.

---

## Ejercicio 5 — Definition of Done (7 min)
**Herramienta:** Chat

> "Antes de mergear un PR generado por IA, ¿qué tiene que ser verdad?"

Pide que voten cuáles de estos criterios **ya tienen** y cuáles **no**:

```
¿Tu equipo YA valida esto antes de mergear? (sí/no/parcial)

□ Tests pasan (unit + integration)
□ Cobertura ≥ umbral definido
□ Linting sin errores
□ Revisión humana del diff completo
□ No hay secrets hardcodeados
□ Documentación actualizada
□ El autor entiende el código generado
```

**El debate que emerge solo:** "¿El autor entiende el código generado?" — este punto siempre genera discusión sobre la responsabilidad cuando el agente escribe el código.

---

## Ejercicio 6 — Cierre: ¿Dónde Estás y Dónde Quieres Estar? (8 min)

Retoma la encuesta inicial y pregunta:

> "Después de este workshop, ¿qué es lo primero que harías mañana con tu equipo?"

Opciones sugeridas:
```
A) Crear nuestro CLAUDE.md esta semana
B) Documentar 3 skills del equipo
C) Introducir Plan Mode antes del próximo sprint
D) Hacer la encuesta Vibe vs SPEC con todo el equipo
E) Nada todavía, necesito más contexto
```

**Cierre verbal (2 min):**
> "No necesitan implementar todo a la vez. Un CLAUDE.md bien hecho ya cambia la calidad de lo que produce el agente. Empiecen por uno."

---

## Tips para el Facilitador

| Riesgo | Cómo manejarlo |
|--------|---------------|
| Alguien sin contexto de Claude Code | El ejercicio de CLAUDE.md funciona con **cualquier agente de IA** |
| Debate muy largo en un ejercicio | "Lo anotamos y seguimos — esto merece su propio workshop" |
| Perfil muy técnico que quiere profundidad | Invitarlos a hacer los ejercicios del repo (01-04) por su cuenta |
| Perfil no técnico que se pierde | Enfocar en **Vibe vs SPEC** — es conceptual, no requiere código |
| Falta de engagement al inicio | La **Encuesta 0** genera participación inmediata |

---

## Adaptaciones por Audiencia

### Si tu equipo es muy técnico
Salta algunos ejercicios y profundiza en **Subagents + Plan Mode**. Plantea un caso de uso real (ej: "migramos nuestra auth a Keycloak, ¿cómo lo harían con 3 agentes en paralelo?").

### Si tu equipo NO usa código
Enfoca el workshop en **Vibe vs SPEC** y **CLAUDE.md**. Ignora detalles técnicos como "cobertura de tests" y habla de "qué entiendes del resultado".

### Si tienes 90 minutos
Agrega una **demo en vivo:** levanta Claude Code, muestra un prompt → plan → código en tiempo real. Los ejercicios no tienen que ser impresionantes; lo importante es que vean el ciclo completo.

---

## Checklist Pre-Workshop

- [ ] Documento compartido en Teams para ejercicios colaborativos
- [ ] Poll tool disponible (Teams nativo o Mentimeter)
- [ ] Whiteboard (Teams o Miro) para visualizar "divide la tarea"
- [ ] 15 min antes: prueba que Teams funciona (audio, video, chat)
- [ ] Slide o nota con: Vibe Coding vs SPEC DRIVEN (para referencia visual)
- [ ] Link a este documento en la invitación

---

## Material de Seguimiento

Después del workshop, envía a los participantes:
- Documento principal: [`tips-agnosticos-claude-code.md`](./tips-agnosticos-claude-code.md)
- Link al repo `claude-code-starter` para que exploren los 4 ejercicios (01-04)
- Template de CLAUDE.md para que lo adapten a su equipo
- Invitación a una segunda sesión: "Implementando SPEC DRIVEN en tu proyecto"

---

## Notas de Facilitación

**Timing:** Es más importante **terminar con debate abierto** que completar todos los ejercicios al minuto exacto.

**Engagement:** Los mejores momentos son cuando alguien dice "en mi equipo hacemos X" — eso significa que el concepto conectó.

**Próximos pasos:** Después del workshop, el 80% del valor está en que implementen el CLAUDE.md en la próxima semana. Eso es lo que hay que enfatizar en el cierre.
