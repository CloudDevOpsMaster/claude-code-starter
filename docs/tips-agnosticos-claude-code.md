# Tips Agnósticos: CLAUDE.md, Skills, Subagents, Plan Mode y Build

## Introducción: El Desarrollador de la Nueva Generación

Estamos en un punto de inflexión.

Durante décadas, programar significó escribir cada línea a mano, dominar la sintaxis de memoria y resolver bugs solo, a las 2am. Ese desarrollador existe y seguirá existiendo. Pero hoy aparece una nueva figura: el **desarrollador aumentado**.

No es el desarrollador que es reemplazado por la IA. Es el que aprende a *dirigirla*. El que sabe formular preguntas precisas, diseñar sistemas con intención, y revisar el código que genera un agente con el ojo crítico de quien entiende qué está pasando realmente.

**El cambio no es de herramienta. Es de mentalidad.**

Antes: escribo código.  
Ahora: diseño soluciones y el agente me ayuda a construirlas.

Los conceptos que verás en este documento —CLAUDE.md, Skills, Subagents, Plan Mode, Build— no son trucos de productividad. Son los pilares de un nuevo flujo de trabajo donde el desarrollador **orquesta**, no solo ejecuta.

Si estás leyendo esto, ya eres parte de esa nueva generación.

---

## Vibe Coding vs SPEC DRIVEN — Dos Formas de Trabajar con IA

No todos usan IA de la misma forma. Hay un espectro, y entender dónde estás te ayuda a saber hacia dónde crecer.

---

### Vibe Coding

> "Le pido a la IA que haga algo y veo qué sale."

Es el punto de entrada natural. Prompt libre, iteración rápida, resultado inmediato. Funciona bien para prototipos, exploración y aprendizaje inicial.

| Característica | Descripción |
|----------------|-------------|
| **Prompt** | Informal, sin estructura |
| **Control** | Bajo — el agente decide mucho |
| **Resultado** | Impredecible, a veces brillante, a veces roto |
| **Velocidad** | Alta para prototipos |
| **Escalabilidad** | Baja — difícil de mantener |
| **Ideal para** | Demos, exploración, aprendizaje rápido |

**Señales de que estás en Vibe Coding:**
- No sabes exactamente qué generó el agente
- No tienes tests
- El proyecto "funciona" pero no sabes por qué
- Cada sesión empieza desde cero

---

### SPEC DRIVEN Development

> "Le digo a la IA exactamente qué construir, cómo, y con qué restricciones."

Es el modo profesional. El desarrollador diseña el sistema, el agente implementa dentro de un marco claro. Más lento al inicio, pero escalable y mantenible.

| Característica | Descripción |
|----------------|-------------|
| **Prompt** | Estructurado, con contexto y restricciones |
| **Control** | Alto — el dev dirige, el agente ejecuta |
| **Resultado** | Predecible, revisable, testeable |
| **Velocidad** | Moderada — invertir en diseño paga después |
| **Escalabilidad** | Alta — equipos enteros pueden colaborar |
| **Ideal para** | Proyectos reales, producción, equipos |

**Herramientas del SPEC DRIVEN:**
- `CLAUDE.md` — las reglas del proyecto
- `Skills` — patrones estandarizados
- `Plan Mode` — diseño antes de implementar
- `Tests` — verificación automática del contrato
- `Conventional Commits` — historial legible

**Señales de que estás en SPEC DRIVEN:**
- El agente sigue tus convenciones sin que se las repitas
- Tienes tests que validan el comportamiento
- Otro developer (o el agente en otra sesión) puede continuar tu trabajo
- Los commits cuentan una historia coherente

---

### La Transición

```
Vibe Coding ──────────────────────────► SPEC DRIVEN
   [explorar]   [aprender]   [producir]   [escalar]
```

No es binario. Puedes hacer Vibe Coding para explorar una idea y luego formalizar con SPEC DRIVEN cuando decides construirla en serio.

**La pregunta clave:** ¿Podría otro desarrollador (o tú en 3 meses) entender y extender lo que el agente generó?

Si la respuesta es no → es momento de moverse hacia SPEC DRIVEN.

---

## 1. CLAUDE.md — La "Constitución" del Proyecto

### Tips Equivalentes (agnóstico)

**Qué documentar en tu CLAUDE.md:**

```markdown
# CLAUDE.md — [Tu Proyecto]

## Stack del Proyecto
[Lenguaje(s), frameworks, bases de datos, herramientas críticas]

## Convenciones Universales
- **Nombres:** camelCase, snake_case, SCREAMING_SNAKE_CASE (define cuál por contexto)
- **Estructura de directorios:** Muestra la jerarquía esperada
- **Imports/módulos:** Cómo se organizan las dependencias

## Restricciones de Seguridad
- ❌ Lo que NUNCA se permite (secrets, eval, logs sensibles, etc.)
- ✅ Lo que SIEMPRE se debe hacer (validación, sanitización, etc.)

## Testing Obligatorio
- Cobertura mínima, tipos de tests, herramientas, ubicación

## API/Interfaz Estándar
- Formato de respuestas (REST, gRPC, GraphQL, CLI output)
- Códigos de error/estado esperados

## Commits y Versionado
- Formato de mensaje: Conventional Commits, Semantic Versioning
- Rama por defecto, política de PRs

## Comandos Clave
npm/pip/go/cargo/make — qué comando hace qué
```

**Por qué importa:**
- El agente no necesita preguntar → trabajo más rápido
- Evita inconsistencias en todo el código
- Es la "fuente de verdad" para cualquier colaborador humano

---

## 2. Skills — Patrones Reutilizables

### Tips Equivalentes (agnóstico)

**Un skill es un template de solución para un problema recurrente.** No es código; es un patrón verbal.

### Estructura de un Skill

```markdown
# Skill: [nombre]

## Cuándo usar
[Describe el problema que resuelve]

## Pasos
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]
...

## Checklist de validación
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Ejemplo
[Código o salida esperada]

## Variaciones
[Si aplica a múltiples contextos]
```

### Ejemplos de Skills Agnósticos

**Skill: Agregar un endpoint**
1. Define método HTTP (GET/POST/PUT/DELETE)
2. Define ruta (pattern de URL)
3. Implementa handler (validación → lógica → respuesta)
4. Registra en router principal
5. Escribe 3 tests mínimo
6. Prueba con herramienta HTTP (curl, Postman, etc.)

**Skill: Agregar un test**
1. Describe bloque (happy path)
2. Test 1: caso exitoso
3. Test 2: error/excepción esperada
4. Test 3: entrada inválida
5. Correr suite y verificar cobertura

**Skill: Refactor de función**
1. Entiende el comportamiento actual (qué hace)
2. Diseña la nueva estructura
3. Implementa sin romper tests existentes
4. Corre suite → verde
5. Elimina código muerto

**Skill: Agregar logging/observabilidad**
1. Identifica puntos críticos (entrada, salida, errores)
2. Estructura log (timestamp, nivel, contexto, mensaje)
3. Evita logs sensibles (no passwords, tokens, PII)
4. Nivel apropiado: DEBUG, INFO, WARN, ERROR
5. Verifica que los logs sean parseables (JSON, structured)

---

## 3. Subagents — Divide y Vencerás

### Tips Equivalentes (agnóstico)

**Cuándo lanzar subagentes:**

| Escenario | Opción |
|-----------|--------|
| **Tarea simple y acotada** | 1 agente (o ninguno, hazlo directo) |
| **Necesitas investigación en paralelo** | 3 agentes Explore en simultáneo |
| **Tarea muy grande y compleja** | 1 agente Plan + 1 agente Implementation |
| **Necesitas revisión/segunda opinión** | 1 agente adicional independiente |
| **Testing paralelo** | 1 agente Unit Tests + 1 agente Integration Tests |

**Patrón: investigación paralela (Explore)**
```
Lanza 3 agentes en paralelo:
- Agente A: busca implementaciones existentes
- Agente B: analiza patrón de error/bug
- Agente C: revisa convenciones del proyecto
→ Espera los 3 → sintetiza → decisión
```

**Patrón: plan + ejecución**
```
- Agente Plan: diseña solución
  → retorna plan detallado
- Agente Implementation: ejecuta plan
  → retorna código/cambios
```

**Costo-beneficio:**
- ✅ Paraleliza investigación (3 búsquedas en tiempo de 1)
- ✅ Segunda opinión sin sesgos
- ✅ Escalabilidad en proyectos grandes
- ❌ Overhead de contexto si la tarea es tiny
- ❌ No usa output de agente B en agente A (no comparten memoria en vivo)

---

## 4. Plan Mode — Diseño Antes de Código

### Tips Equivalentes (agnóstico)

**Cuándo entrar en plan mode:**

```
✅ Usa plan mode si:
- Hay múltiples enfoques posibles (elegir uno es no trivial)
- La tarea toca > 2 archivos
- Afecta arquitectura o convenciones del proyecto
- El usuario no fue explícito sobre el "cómo"

❌ Salta plan mode si:
- Es un typo o fix de 1 línea
- El usuario dijo explícitamente "hazlo así"
- Ya hay un patrón 100% claro en el código
```

### Estructura de un Plan Agnóstico

```markdown
# Plan: [Descripción corta]

## Contexto
[Por qué se hace, problema que resuelve, restricciones]

## Enfoque Elegido
[De las opciones, cuál y por qué]

## Pasos (numerados)
1. [Paso 1: qué archivo, qué cambio]
2. [Paso 2: ...]
3. ...

## Archivos a Modificar
| Archivo | Cambio |
|---------|--------|
| `src/foo.js` | Agregar función X |
| `tests/foo.test.js` | Agregar 3 tests |

## Verificación
- [ ] Todos los tests pasan
- [ ] Cobertura ≥ X%
- [ ] Sin breaking changes
- [ ] CLAUDE.md actualizado (si aplica)

## Riesgos
[Si hay, listarlos]
```

### Ciclo de Plan Mode

```
1. Leo CLAUDE.md + contexto
2. Exploro código existente (Glob/Grep/Agents)
3. Diseño en plan file
4. Pregunto al user si hay ambigüedad (AskUserQuestion)
5. Llamo ExitPlanMode cuando el plan está listo
6. User aprueba → salgo del plan mode
7. Implemento
```

---

## 5. Build — Construcción Agnóstica

### Tips Equivalentes

**"Build" no significa solo `npm run build`.** Es todo lo que convierte "especificación" en "ejecutable."

### Pipeline de Build Agnóstico

```
CÓDIGO FUENTE
    ↓
COMPILACIÓN (opcional)
    ↓ (Java, Go, Rust, TypeScript → transpile)
EMPAQUETADO
    ↓ (JAR, binario, bundle, dist/)
TESTING
    ↓ (unit, integration, smoke)
VALIDACIÓN
    ↓ (lint, type check, security scan)
ARTEFACTO FINAL
    ↓
DESPLEGABLE (Docker, NPM pkg, ejecutable)
```

### Checklist de Build Agnóstico

**Antes de considerar una feature "lista":**

- [ ] **Compila/syntaxis** sin errores
- [ ] **Linting** pasa (estilo de código consistente)
- [ ] **Type checking** pasa (si aplica: TypeScript, mypy, etc.)
- [ ] **Tests locales** pasan (unit + integration)
- [ ] **Cobertura** ≥ threshold configurado
- [ ] **No regresiones** (prueba casos existentes)
- [ ] **Security scan** (busca secrets, dependencias vulnerables)
- [ ] **Performance** aceptable (no empeora benchmarks)
- [ ] **Documentación** actualizada (README, CLAUDE.md, docstrings si aplica)
- [ ] **Commit** con mensaje claro (Conventional Commits)

### Herramientas Agnósticas

| Aspecto | Herramientas |
|---------|-------------|
| Linting | ESLint, Pylint, golangci-lint, clippy (Rust) |
| Type checking | TypeScript, mypy, Go compiler |
| Testing | Jest/Mocha, pytest, Go test, Cargo test |
| Coverage | nyc, coverage.py, codecov |
| Security | Snyk, npm audit, bandit, cargo-audit |
| Build | npm, pip, go build, cargo, make |
| Containerización | Docker, docker-compose, Kubernetes |

---

## 6. Combo: CLAUDE.md + Skills + Plan Mode

### Flujo Recomendado

```
1. Lee CLAUDE.md
   → Entiendes convenciones, testing, commits

2. Mira skills disponibles
   → ¿Hay un patrón preexistente? Úsalo

3. Tarea nueva/grande → Plan Mode
   → Diseña antes de implementar
   → ExitPlanMode cuando esté listo

4. Implementa con skill (si aplica) o custom
   → Sigue el plan
   → Respeta CLAUDE.md

5. Build/Validación
   → Tests, lint, coverage
   → Commit con formato correcto
   → Listo
```

### Ejemplo Concreto (Agnóstico)

**Escenario:** Agregar autenticación OAuth2 a un proyecto.

```
1. CLAUDE.md dice: "Usa .env para secrets, NO console.log datos sensibles, ✅ validar input siempre"

2. Mira skills: ¿Hay uno de "agregar middleware"? Si no, anotalo.

3. Plan Mode:
   - Investiga: ¿Dónde van las rutas de auth? ¿Qué estructura?
   - Diseña: oauth.js → verificador → middleware → rutas públicas vs privadas
   - Plan file: lista 5 archivos a cambiar, 3 tests, validaciones

4. ExitPlanMode → usuario aprueba

5. Implementa:
   - Crea oauth.js (patrón de middleware)
   - Registra en index.js
   - Actualiza CLAUDE.md (nueva restricción: no logs de tokens)
   - Tests: caso feliz, token inválido, token expirado

6. Build:
   - npm test ✓
   - npm run lint ✓
   - npm run security-scan ✓
   - Commit: "feat: agregar autenticación OAuth2"
```

---

## 7. Tips de Oro

| Concepto | Tip |
|----------|-----|
| **CLAUDE.md** | Actualízalo cada vez que cambies una convención |
| **Skills** | Crea uno cuando hayas hecho 2x la misma tarea |
| **Subagents** | Lánzalos en paralelo, no secuencial, a menos que haya dependencia |
| **Plan Mode** | Entra si hay ambigüedad → sale cuando tengas la solución clara |
| **Build** | Automatiza todo lo que puedas (CI/CD, pre-commit hooks, etc.) |
| **Testing** | 70% cobertura es mínimo; 90%+ es excelente |
| **Commits** | Pequeños + frecuentes + descriptivos > raros + gigantes |

---

## Resumen Rápido

**CLAUDE.md** = Memoria del proyecto (convenciones, restricciones)  
**Skills** = Patrones reutilizables (templates de solución)  
**Subagents** = Divide y vencerás (paraleliza investigación)  
**Plan Mode** = Diseña antes de implementar (big picture)  
**Build** = Automatiza todo (tests, lint, coverage)  

Juntos = **Flujo de trabajo moderno con Claude Code**

---

## Próximos Pasos

📚 **Quieres implementar esto con ejercicios?** → Lee [`workshop-ejercicios-1hr.md`](./workshop-ejercicios-1hr.md)

Este documento contiene 6 ejercicios listos para un workshop de 1 hora en Teams, diseñados para líderes de desarrollo.
