# Ejercicio 03 — Revisar código con el agente

**Tiempo estimado:** 10 minutos  
**Objetivo:** Usar Claude Code como code reviewer.

---

## Contexto

Este es un bloque de código con varios problemas intencionales. Tu trabajo es pedirle a Claude que lo analice.

---

## Código con problemas (NO lo pongas en el proyecto)

```javascript
// ❌ Este código tiene problemas — úsalo como input para el review
router.post('/tasks', (req, res) => {
  const title = req.body.title
  const apiKey = "sk-abc123-super-secret-key"  // problema 1
  
  if (!title) {
    res.send("error: title required")  // problema 2
    return
  }
  
  const newTask = {
    id: Math.random(),  // problema 3
    title: title,
    done: false
  }
  
  tasks.push(newTask)
  res.send(newTask)  // problema 4
})
```

---

## Pasos

1. Abre Claude Code:
   ```bash
   claude
   ```

2. Pega el código y pide un review:
   ```
   Revisa este código y dime todos los problemas que encuentras. 
   Sé específico: explica por qué cada cosa es un problema y cómo corregirla.
   [pega el código aquí]
   ```

3. Lee la respuesta de Claude. ¿Encontró los 4 problemas?

4. Pide que lo corrija:
   ```
   Ahora corrígelo siguiendo las convenciones del CLAUDE.md de este proyecto.
   ```

---

## Los 4 problemas (no hagas trampa)

<details>
<summary>Ver respuesta</summary>

1. **Secret hardcodeado** — `apiKey = "sk-abc..."` en el código fuente (debe ir en `.env`)
2. **Respuesta incorrecta en error** — `res.send("error...")` debería ser `res.status(400).json({ success: false, error: '...' })`
3. **ID no confiable** — `Math.random()` puede generar duplicados (usar un contador incremental)
4. **Status HTTP incorrecto** — `res.send(newTask)` debería ser `res.status(201).json({ success: true, data: newTask })`

</details>

---

## Reflexión

- ¿Claude encontró todos los problemas sin que tú los mencionaras?
- ¿Cuánto tiempo te hubiera tomado encontrarlos manualmente en un PR real?
