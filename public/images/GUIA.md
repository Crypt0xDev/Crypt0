# Guía de Imágenes

## Problema Resuelto ✅

Los warnings sobre imágenes faltantes han sido resueltos al remover las referencias a `heroImage` de los posts de ejemplo.

## Cómo Agregar Imágenes a tus Posts

### Opción 1: Sin Imagen (Recomendado para empezar)

Simplemente omite el campo `heroImage` en el frontmatter:

```markdown
---
title: 'Mi Post'
description: 'Descripción'
pubDate: 2024-11-01
tags: ['tag1']
lang: 'es'
draft: false
---
```

### Opción 2: Usar Placeholder

```markdown
---
title: 'Mi Post'
heroImage: '/images/blog/placeholder.svg'
---
```

### Opción 3: Imagen Personalizada

1. Coloca tu imagen en `public/images/blog/` o `public/images/writeups/`
2. Referénciala en el frontmatter:

```markdown
---
title: 'Mi Post'
heroImage: '/images/blog/mi-imagen.jpg'
---
```

## Estructura de Carpetas

```
public/images/
├── blog/
│   ├── placeholder.svg          # Placeholder por defecto
│   ├── README.md                # Guía de uso
│   └── [tus-imagenes.jpg]       # Tus imágenes personalizadas
└── writeups/
    ├── placeholder.svg          # Placeholder por defecto
    ├── README.md                # Guía de uso
    └── [tus-imagenes.jpg]       # Tus imágenes personalizadas
```

## Recomendaciones

### Para Blog Posts
- **Dimensiones:** 1200x630px (ideal para redes sociales)
- **Formato:** JPG (fotos), PNG (gráficos), SVG (vectores)
- **Tamaño:** < 200KB

### Para Writeups
- **Screenshots:** PNG con buena calidad
- **Cards de máquinas:** Usar las oficiales de HTB/THM
- **Diagramas:** SVG cuando sea posible

## Optimización de Imágenes

Herramientas recomendadas:
- **[TinyPNG](https://tinypng.com/)** - Compresión automática
- **[Squoosh](https://squoosh.app/)** - Control fino de compresión
- **[ImageOptim](https://imageoptim.com/)** - Para macOS

## Ejemplos de Uso

### Blog con imagen personalizada
```markdown
---
title: 'Tutorial de Nmap'
description: 'Aprende a usar Nmap'
pubDate: 2024-11-02
heroImage: '/images/blog/nmap-tutorial.jpg'
tags: ['nmap', 'scanning']
lang: 'es'
---
```

### Writeup con card de HTB
```markdown
---
title: 'Lame - HTB'
platform: 'htb'
difficulty: 'easy'
heroImage: '/images/writeups/htb-lame-card.png'
---
```

## Notas

- Las imágenes en `public/` son servidas directamente
- No necesitas importar las imágenes, solo referenciarlas
- El path siempre empieza con `/images/...`
- Las imágenes son opcionales, el sitio funciona perfectamente sin ellas
