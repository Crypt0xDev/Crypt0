# Imágenes de Writeups

Coloca aquí las imágenes para tus writeups de máquinas.

## Uso

En el frontmatter de tu writeup markdown, añade:

```markdown
---
title: 'Nombre Máquina'
heroImage: '/images/writeups/htb-machine.png'
---
```

## Organización Sugerida

```
public/images/writeups/
├── htb/
│   ├── machine-name-card.png
│   └── machine-name-screenshot.png
├── tryhackme/
│   └── room-name.png
└── vulnhub/
    └── vm-name.png
```

## Tipos de Imágenes

- **Card Image:** Logo o card de la máquina (usar de la plataforma)
- **Screenshots:** Capturas de pantalla del proceso
- **Diagramas:** Esquemas de la infraestructura

## Formato Recomendado

- **Formato:** PNG para screenshots, JPG para photos
- **Dimensiones:** Variable según necesidad
- **Tamaño:** < 500KB por imagen
- **Nomenclatura:** `plataforma-nombre-tipo.ext` (ej: `htb-lame-card.png`)
