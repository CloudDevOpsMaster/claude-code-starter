# CLAUDE CODE — Guía Rápida

## Instalación

```bash
npm install -g @anthropic-ai/claude-code
```

---

## Uso diario

| Comando | Qué hace |
|---------|----------|
| `claude` | Abre sesión interactiva |
| `/plan` | Planea antes de ejecutar (recomendado para features) |
| `/compact` | Resume el contexto cuando es muy largo |
| `Ctrl+C` | Cancela la acción actual |
| `/exit` | Cierra la sesión |

---

## Modos de permisos

```bash
# Interactivo (te pide aprobación siempre — recomendado)
claude

# Solo ciertas herramientas
claude --allowedTools "Read,Edit,Bash"

# Headless — para CI/CD (¡cuidado!)
claude -p "tu prompt aquí" --allowedTools "Read,Edit"
```

---

## CLAUDE.md — lo que debes incluir

```markdown
## Stack
- Node.js 20, Express 4, Jest

## Convenciones
- camelCase en JS, kebab-case en rutas
- Respuestas: { success, data } o { success, error }

## Restricciones
- ❌ Nunca secrets en código
- ✅ Siempre tests para endpoints nuevos
```

---

## Skills

```bash
# Referencia un skill en tu prompt:
"Agrega un endpoint GET /api/users. Usa el skill add-endpoint."

# Dónde van los skills:
.claude/skills/<nombre>.md
```

---

## Prompts de inicio rápido

```
/plan Necesito agregar autenticación básica con JWT. Analiza el código actual y dame un plan.

Genera tests para todos los endpoints que aún no tienen cobertura.

Revisa este código y encuentra problemas de seguridad o malas prácticas: [pega el código]

Explica qué hace este archivo y si hay algo que mejorar: [nombre del archivo]
```
