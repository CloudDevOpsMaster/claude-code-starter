# Guía del Facilitador — Workshop de 1 hora en Teams
## Claude Code para Líderes de Desarrollo

**Duración total:** 60 minutos | **Audiencia:** Líderes técnicos, CTOs, arquitectos

---

## 📝 Cómo usar esta guía

Cada slide tiene un **"Qué decir"** escrito como hablarías en una reunión — conversacional, simple, sin florituras. Lee desde aquí o cópialo a PowerPoint/Google Slides. El objetivo es que **suene natural**, no como un discurso.

---

## Slide 1 — Bienvenida 
**Tiempo:** 2 min | **Acumulado:** 2 min

### Qué mostrar
Pantalla con título y logo/colores del proyecto (morado/azul)

### Qué decir
"Hola a todos. Hoy quiero compartirles lo que he aprendido de IA estos últimos meses — no de cómo programar, sino de cómo hacer trabajo interligente con menos esfuerzo y mas calidad. la dinamica es muy simple y ejercicios cortos. Empecemos."

### Notas
- Mantén el tono conversacional, no académico
- Si hay gente nueva, presenta brevemente quiénes son los presentes (máx 30 segundos)
- Asegúrate de que todos ven tu pantalla correctamente

---

## Slide 2 — ¿Por Qué Hablar de Esto Hoy?
**Tiempo:** 3 min | **Acumulado:** 5 min

### Qué mostrar
Tres puntos en pantalla:
```
⏱️ La IA escribe código en segundos, pero los equipos están listos para crecer exponencialmente
🎯 El problema NO es cómo escribir. Es QUÉ escribir
👥 Tu ventaja real está en decidir bien qué construir
```

### Qué decir
"Tenemos herramientas que generan código en segundos. Y los equipos tienen el potencial de crecer exponencialmente. ¿Saben por qué? Porque el problema nunca fue escribir código — fue decidir **qué** código escribir. Eso sigue siendo nuestro trabajo. Hoy aprendemos a hacerlo mejor y desbloquear ese potencial."

### Notas
- Si alguien dice "en mi equipo también pasa", valida la observación: "exacto, eso es lo que arreglamos hoy"
- Este slide es de contexto: prepara mentalmente al grupo para cambiar de mentalidad

---

## Slide 3 — Encuesta: ¿Dónde Estamos Hoy?
**Tiempo:** 5 min | **Acumulado:** 10 min

### Qué mostrar
Poll en Teams o Mentimeter:
```
Hoy, ¿cómo describe mejor cómo tu equipo usa IA?

A) Vibe Coding — le pedimos y vemos qué sale
B) Híbrido — a veces con estructura, a veces no
C) SPEC DRIVEN — tenemos reglas claras antes de pedirle
D) No usamos IA todavía
```

### Qué decir
"Primero quiero saber dónde están hoy. Una pregunta simple: ¿cómo usa IA su equipo? ¿Exploran y ven qué sale, o tienen reglas claras antes? Voten sin drama — no hay respuestas correctas, es un snapshot."

### Ejercicio
1. Lanza el poll
2. Espera 20-30 segundos a que voten
3. Muestra los resultados
4. Lee dos o tres en voz alta (ej: "Vemos que el 40% está en Híbrido...")

### Notas
- Los resultados ahora son tu baseline — vuelves a esto al final del workshop
- No juzgues ninguna respuesta ("la gente en Vibe Coding no está mal, está aprendiendo")
- Si nadie vota, da tú el ejemplo: "en mi equipo somos 70% Vibe Coding todavía"

---

## Slide 4 — El Desarrollador Aumentado
**Tiempo:** 3 min | **Acumulado:** 13 min

### Qué mostrar
Dos frases grandes en pantalla:
```
ANTES:    yo escribo cada línea → tengo control total
AHORA:    yo diseño, el agente construye → tengo menos código pero más alcance
```

### Qué decir
"Antes, ser buen dev era escribir mucho código, rápido. Ahora? Saber qué pedirle a la IA y revisar lo que te devuelve. El rol cambia. Tú diseñas, el agente construye. Menos teclas, más decisiones. Algunos dicen que eso es malo. Lo que hemos visto es que es evolución."

### Notas
- Pausa después de la segunda frase, déjala resonar
- Busca asentimientos en las caras — eso significa que conectó
- Si alguien levanta la mano, escúchalo brevemente (máx 30 seg)

---

## Slide 5 — Vibe Coding vs SPEC DRIVEN
**Tiempo:** 4 min | **Acumulado:** 17 min

### Qué mostrar
Tabla de dos columnas con comparación visual (colores diferentes para cada columna)

```
VIBE CODING                        | SPEC DRIVEN
================================== | ==================================
"Le pido y veo qué sale"          | "Diseño primero, después código"
Sin estructura clara               | CLAUDE.md + Skills + Plan Mode
Iteración rápida                   | Diseño deliberado
Impredecible (ideal para explorar) | Predecible y testeable
Ideal para: prototipos, exploración| Ideal para: producción, equipos
```

### Qué decir
"Hay dos formas de trabajar con IA. Vibe Coding: le preguntas algo, ves qué sale. Rápido para explorar. Pero si otro dev necesita continuar tu trabajo — o tu en 3 meses — se pierde. SPEC DRIVEN: defines reglas primero. El agente sigue tus convenciones automáticamente. Toma 10 minutos más al inicio, pero después escala solo. La diferencia real? En SPEC DRIVEN, otro dev continúa sin explicaciones."

### Ejercicio
Pregunta retórica: "Pregunten: ¿podría otro developer (o yo en 3 meses) entender lo que el agente generó?"

### Notas
- Señal de buen engagement: alguien dice "en mi equipo hacemos Vibe Coding"
- Enfatiza que no hay culpa — Vibe Coding es válido para exploración
- La pregunta retórica es la "pregunta clave" del workshop — repítela al final

---

## Slide 6 — La Transición (Diagrama)
**Tiempo:** 2 min | **Acumulado:** 19 min

### Qué mostrar
Diagrama visual:
```
Vibe Coding ──────────────────────► SPEC DRIVEN
[explorar]  [aprender]  [producir]  [escalar]
```

### Qué decir
"No es uno u otro. Hemos visto que muchos equipos hacen Vibe Coding para explorar y SPEC DRIVEN cuando formalizan. Es un proceso que funciona — exploras, aprendes, formalizas cuando decides que va a producción."

### Notas
- Muy corto, solo de transición
- Si alguien pregunta, acepta la pregunta pero dile "lo cubrimos en los próximos slides"

---

## Slide 7 — CLAUDE.md: La Constitución del Proyecto
**Tiempo:** 10 min | **Acumulado:** 29 min

### Qué mostrar
Código pequeño de CLAUDE.md mínimo:
```markdown
# CLAUDE.md — [Mi Equipo]

## Stack
Node.js 20, Express, Jest

## Lo que NUNCA hacemos
- ❌ Secrets en el código
- ❌ console.log de datos sensibles

## Lo que SIEMPRE hacemos
- ✅ Validar input
- ✅ Escribir 3 tests mínimo por endpoint
```

### Qué decir
"CLAUDE.md es una hoja con las reglas del proyecto. Lo escribe una sola vez. El agente lo lee antes de empezar cualquier cosa. Pones: qué lenguajes usas, qué no se puede hacer, qué siempre se hace. Eso es todo. No tiene que ser perfecto. Tiene que existir."

### Ejercicio
**VIVO:** "Ahora viene el ejercicio. Abran un doc compartido en Teams. Voy a escribir el CLAUDE.md de mi equipo en 5 minutos — solo para que vean cómo se ve. Ustedes hacen lo suyo. 5 minutos. Reloj. Adelante."

**Duración del ejercicio:** 5 min

**Cómo guiar:**
- Comparte tu pantalla escribiendo el CLAUDE.md
- Dicta en voz alta mientras escribes ("Stack: Python, Django... Lo que NUNCA hacemos...")
- Pide que al menos escriban Stack + Lo que NUNCA hacemos (el resto es bonus)
- A los 5 min: "Listo. ¿Alguien quiere leer su 'Lo que NUNCA hacemos'?"

### Debriefing (después del ejercicio)
Pide a 2-3 voluntarios que lean su "Lo que NUNCA hacemos". Suelen salir historias reales ("nos quemamos con secrets en el pasado, por eso está ahí"). **Eso es lo importante.**

### Notas
- **TIP CRÍTICO:** El ejercicio es lo importante, no el slide
- Si nadie levanta la mano en el debriefing, tú cuenta una anécdota de tu equipo
- Objetivo: que vean que esto **ya existe en su cabeza**, solo hay que escribirlo

---

## Slide 8 — Skills: Patrones Reutilizables
**Tiempo:** 10 min | **Acumulado:** 39 min

### Qué mostrar
Definición simple:
```
SKILL = Patrón reutilizable que el agente aplica cuando se lo indicas

Ejemplos:
• "Agregar un endpoint" → 5 pasos estándar
• "Escribir un test" → 3 casos obligatorios
• "Refactorizar una función" → pasos claros
```

### Qué decir
"Un skill es la forma estándar que ya usan para hacer algo. Pasos claros. Lo documentan una vez, el agente lo sigue siempre que se lo piden. Cero repetición. Ejemplos: cómo agregan endpoints en tu equipo, cómo hacen tests, cómo documentan. Lo escriben ustedes, el agente lo sigue."

### Ejercicio
**EN CHAT:** "Escriban en el chat: ¿qué hace tu equipo de forma repetitiva que podrías documentar como un skill?"

Ejemplos que suelen salir:
- Cómo hacemos PRs
- Cómo nombramos variables
- Cómo estructuramos funciones
- Cómo documentamos APIs

**Duración del ejercicio:** 5 min

**Cómo guiar:**
- Lee algunos del chat en voz alta
- Conecta con CLAUDE.md: "Muchos de estos van en el CLAUDE.md. Algunos merecen su propio skill si son complejos."

### Debriefing
"¿Cuál es el skill más urgente de documentar en tu equipo? Recuerda eso. Lo implementas esta semana."

### Notas
- Los skills **ya existen** en la mente del equipo — solo documentarlos acelera todo
- No necesitas que sean perfectos — un skill "agregar test" de 5 lineas es valioso

---

## Slide 9 — Plan Mode: El Juego del "Plan Primero"
**Tiempo:** 10 min | **Acumulado:** 49 min

### Qué mostrar
Escenario en pantalla:
```
ESCENARIO:
Tu equipo recibió este prompt:
"Agrega autenticación con Google al sistema de reservas"

PREGUNTA:
¿Qué tienes que decidir ANTES de que el agente escriba código?
```

### Qué decir
"Antes de pedirle algo al agente, hay preguntas que solo ustedes pueden responder. Dónde van los tokens. Qué pasa con los usuarios existentes. Qué no debe tocar. Eso es el plan. Ustedes lo diseñan, el agente lo ejecuta. Sin plan, el agente genera código al azar. Con plan, generan lo que ustedes quisieron."

### Ejercicio
**EN CHAT:** "Escriban 3 preguntas que harían ANTES de pedirle al agente que code autenticación."

**Duración del ejercicio:** 5 min

**Cómo guiar:**
- Lee algunos del chat
- Destaca los que son buenos: "Excelente pregunta, eso afecta la arquitectura"
- Conecta con visión: "Eso es liderazgo técnico. No es escribir código; es diseñar bien para que el agente implemente bien."

### Debriefing
"El plan no es un lujo. Es el lugar donde **tú** agregas más valor. El agente puede escribir. Tú decides. Plan primero, código segundo."

### Notas
- Las preguntas que salgan van a variar — eso es bueno, significa que piensan diferente
- **Ojo:** Si nadie responde, da tú 3 preguntas tuyas primero como ejemplo

---

## Slide 10 — Subagents: Divide la Tarea
**Tiempo:** 10 min | **Acumulado:** 59 min

### Qué mostrar
Concepto simple:
```
En lugar de 1 agente haciendo TODO:
→ 3 agentes EN PARALELO, cada uno en un área

Tarea: "Auditar la seguridad del módulo de pagos"
Agente A: busca vulnerabilidades comunes
Agente B: revisa dependencias con security scan
Agente C: verifica que no hay secrets hardcodeados
→ Resultados en tiempo de 1 búsqueda
```

### Qué decir
"Ustedes ya dividen trabajo entre personas. Acá es igual pero con agentes. En vez de pedirle todo a uno, divides la tarea. Tres agentes en paralelo es como tres personas trabajando al mismo tiempo en areas diferentes. Más rápido. Eso es todo."

### Ejercicio
**EN WHITEBOARD O CHAT:** "Si tuvieran 3 subagentes ahora mismo: ¿cómo dividirían esta tarea de auditoría de seguridad?"

**Duración del ejercicio:** 5 min

**Cómo guiar:**
- Pide que escriban: Agente A hace ____, Agente B hace ____, Agente C hace ____
- Lee algunas respuestas
- Pregunta: "¿Cuál creen que tiene que terminar primero?" — emerge la conversación sobre dependencias

### Debriefing
"Eso que acaban de pensar — paralelo vs secuencial, dependencias — eso es arquitectura de tareas. Lo mismo aplica con agentes."

### Notas
- **PROBLEMA:** Slide 9 es la última grande, y si van retrasados, pueden saltar esto brevemente
- Objetivo: que vean que es **una extensión de cómo ya piensan**

---

## Slide 11 — Definition of Done: ¿Cuándo Está Listo?
**Tiempo:** 7 min | **Acumulado:** 66 min ⚠️ (2 min fuera de tiempo)

### Qué mostrar
Checklist visual:
```
ANTES DE MERGEAR UN PR GENERADO POR IA:

□ Tests pasan (unit + integration)
□ Cobertura ≥ umbral (70%+)
□ Linting sin errores
□ Revisión humana del diff
□ No hay secrets hardcodeados
□ Documentación actualizada
□ El autor entiende el código
```

### Qué decir
"Antes de mergear un PR que generó la IA — ¿qué validan? Miren esta lista. Tests, linting, review humana. El punto que siempre genera debate: 'El autor entiende el código'. Si el agente lo escribió, ¿de quién es la responsabilidad? De ustedes. Siempre. Por eso lo entienden antes de mergear."

### Ejercicio
**EN CHAT (rápido):** "¿Cuál de estos criterios YA tienen en su equipo? ¿Cuál es el que les falta?"

**Duración del ejercicio:** 3 min (comprimido porque vamos atrasados)

### Debriefing (breve)
Si hay tiempo: "El debate que importa es responsabilidad. Quien mergea es responsable, agente o no."

### Notas
- ⚠️ **TIMING AJUSTADO:** Este slide puede comprimir si van atrasados
- Si hay que saltar algo, que sea el ejercicio y mantén el checklist visual

---

## Slide 12 — ¿Qué Harías Mañana? (Cierre)
**Tiempo:** 6 min | **Acumulado:** 60 min ✓

### Qué mostrar
Poll o chat:
```
Después de hoy, ¿qué es lo PRIMERO que harías en tu equipo?

A) Crear nuestro CLAUDE.md esta semana
B) Documentar 3 skills del equipo
C) Introducir Plan Mode antes del próximo sprint
D) Hacer la encuesta Vibe vs SPEC con todo el equipo
E) Nada todavía, necesito más contexto
```

### Qué decir
"Ya cubrimos todo. La pregunta es: ¿qué hacen mañana? No todo a la vez. Elijan una cosa. Voten."

### Ejercicio
Lanza poll o chat — espera votos

### Debriefing (cierre verbal, 2 min)
Lean algunos votos en voz alta. Luego:

**MENSAJE FINAL:**
> "No busquen perfección. Hemos visto que un CLAUDE.md básico cambia lo que genera el agente. Si no saben por dónde empezar: CLAUDE.md. Esta semana. Tres secciones: Stack, NUNCA, SIEMPRE. Eso basta. Listo."

### Notas
- **CIERRE FUERTE:** No dejes dudas — deja dirección clara
- Retoma la encuesta del Slide 2: "Al inicio, muchos votaban Vibe Coding. Ahora tienen herramientas para escalar cuando lo necesiten — eso es todo."
- Opcional: pregunta si quieren una sesión de 90 minutos implementando en vivo

---

## Slide 13 — Recursos y Siguientes Pasos
**Tiempo:** 3 min | **Acumulado:** 63 min (postítulo, no cuenta en 60)

### Qué mostrar
Links y documentos:
```
📚 Documentos del workshop:
- tips-agnosticos-claude-code.md (concepto)
- workshop-ejercicios-1hr.md (ejercicios)
- estudiante-cheatsheet.html (referencia visual)

🔗 Repo del proyecto:
github.com/[usuario]/claude-code-starter

📖 Template de CLAUDE.md:
[link al archivo]

💬 Siguientes pasos:
- Implementa CLAUDE.md esta semana
- Reúnete con tu equipo: comparte estos docs
- Segunda sesión (opcional): "Implementando SPEC DRIVEN en vivo"
```

### Qué decir
"Todos estos materiales están en el chat. Template de CLAUDE.md, ejercicios, todo. Cópienlo y adapten. Si quieren una sesión de 90 minutos implementando en vivo, me avisan. Gracias."

### Notas
- Comparte los links en el chat de Teams DESPUÉS de que termines de hablar
- Ojo: no lea los links en voz alta (aburre) — solo muéstralos en pantalla

---

## Resumen de Timing

| Slide | Título | Duración | Acumulado |
|-------|--------|----------|-----------|
| 0 | Bienvenida | 2 min | 2 min |
| 1 | ¿Por qué? | 3 min | 5 min |
| 2 | Encuesta Vibe vs SPEC | 5 min | 10 min |
| 3 | Developer Aumentado | 3 min | 13 min |
| 4 | Vibe vs SPEC (tabla) | 4 min | 17 min |
| 5 | Transición | 2 min | 19 min |
| 6 | CLAUDE.md + Ejercicio | 10 min | 29 min |
| 7 | Skills + Ejercicio | 10 min | 39 min |
| 8 | Plan Mode + Ejercicio | 10 min | 49 min |
| 9 | Subagents + Ejercicio | 10 min | 59 min |
| 10 | DoD + Ejercicio | 7 min | 66 min ⚠️ |
| 11 | Cierre | 6 min | 60 min ✓ |
| 12 | Recursos | 3 min | 63 min (post-sesión) |

**⚠️ Nota:** Si vas retrasado, comprime Slide 10 (DoD).

---

## Tips Generales de Facilitación

### Gestión del tiempo
- **Minuto 30 (mitad):** Verifica que vas a tiempo. Si atrasado, salta el ejercicio de Slide 9 o 10
- **Minuto 50:** Ya deberías estar en Slide 10 como máximo
- **Minuto 55:** Prepárate para el cierre (Slide 11)

### Engagement
- **Señales de buen engagement:** Gente escribiendo en chat, haciendo preguntas, compartiendo experiencias
- **Señales de aburrimiento:** Silencio de 30+ segundos, nadie responde polls
- **Qué hacer si silencio:** Cuenta una anécdota de tu equipo. Rompe el hielo tú.

### Si algo no funciona
- **Poll no abre:** usa el chat del Teams en su lugar
- **Alguien se pierde:** repite brevemente el concepto en diferentes palabras
- **Debate se va de control:** "Buena pregunta, anotamos eso para la segunda sesión"

### Momentum
- Los Ejercicios 1, 3, 8 son los más fuertes (generan debate)
- Mantén energía en el tono de voz
- Sonríe. El tono importa.

---

## Preguntas frecuentes para anticipar

**P: "¿Cuál es la diferencia entre CLAUDE.md y Skills?"**
R: "CLAUDE.md son reglas globales del proyecto. Skills son patrones específicos para una tarea. Los dos existen."

**P: "¿Si usamos otro agente de IA (no Claude)?"**
R: "CLAUDE.md y el concepto funcionan con cualquier agente. El nombre puede cambiar, el principio es igual."

**P: "¿Cuánto tiempo toma implementar SPEC DRIVEN?"**
R: "CLAUDE.md: 30 minutos. Skills: una semana (uno por vez). Plan Mode: integrado al workflow, ya. No es a la vez."

**P: "¿Plan Mode vs Plan del proyecto?"**
R: "Plan Mode es para tareas de código. El plan del proyecto es más grande. Complementarios."

---

## Material de Apoyo que Necesitas

✅ Este documento (facilitador-guia-slides.md)
✅ estudiante-cheatsheet.html (abierto en browser en otra ventana)
✅ workshop-ejercicios-1hr.md (referencia si alguien pregunta)
✅ tips-agnosticos-claude-code.md (para profundidad si lo piden)
✅ Doc de Teams compartido (para ejercicios colaborativos)
✅ Poll tool lista (Teams nativo o Mentimeter)
✅ Whiteboard de Teams o Miro (para Slide 9)
