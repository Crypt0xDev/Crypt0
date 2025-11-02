# Guía: Agregar Imágenes a Posts y Writeups

## 📝 Resumen

Ahora todos los posts de blog y writeups soportan imágenes hero (imágenes de portada) que se muestran en:
- ✅ Tarjetas de vista previa (índice de blog/writeups)
- ✅ Posts relacionados
- ✅ Página individual del post/writeup

## 📁 Estructura de Directorios

```
public/images/
├── blog/                    # Imágenes de posts de blog
│   ├── criptografia-basica.jpg
│   ├── python-hacking.jpg
│   ├── docker-seguridad.jpg
│   └── ...
│
└── writeups/                # Imágenes de writeups
    ├── htb/
    │   ├── lame.jpg
    │   ├── beep.jpg
    │   └── ...
    ├── tryhackme/
    │   ├── blue.jpg
    │   ├── kenobi.jpg
    │   └── ...
    ├── vulnhub/
    │   ├── mrrobot.jpg
    │   ├── brainpan.jpg
    │   └── ...
    └── hackmyvm/
        ├── literal.jpg
        ├── quick.jpg
        └── ...
```

## 🖼️ Especificaciones de Imágenes

### Para Blog Posts
- **Dimensiones**: 1200x630px (ratio 1.9:1) o superior
- **Formato**: JPG, PNG o WebP
- **Tamaño**: < 200KB (optimizado)
- **Altura en tarjetas**: 220px
- **Resolución mínima**: 1200x630px para evitar pixelación

### Para Writeups
- **Dimensiones**: 1200x630px (ratio 1.9:1) o superior
- **Formato**: JPG, PNG o WebP
- **Tamaño**: < 200KB (optimizado)
- **Altura en tarjetas**: 220px
- **Resolución mínima**: 1200x630px para evitar pixelación

## ✍️ Cómo Usar en Frontmatter

### En Posts de Blog

```markdown
---
title: "Mi Post de Blog"
description: "Descripción del post"
pubDate: 2024-11-02
author: "Crypt0xDev"
lang: es
tags: ["tag1", "tag2"]
heroImage: "/images/blog/mi-post.jpg"
---

# Contenido del post...
```

### En Writeups

```markdown
---
title: "Máquina - Plataforma"
description: "Descripción del writeup"
pubDate: 2024-11-02
platform: "htb"
category: "machines"
difficulty: "easy"
os: "linux"
lang: es
tags: ["tag1", "tag2"]
heroImage: "/images/writeups/htb/maquina.jpg"
---

# Contenido del writeup...
```

## 🎨 Dónde Obtener Imágenes

### Sitios de Imágenes Gratuitas
- [Unsplash](https://unsplash.com/) - Fotografías de alta calidad
- [Pexels](https://pexels.com/) - Imágenes gratuitas
- [Pixabay](https://pixabay.com/) - Contenido libre de derechos

### Crear Imágenes Personalizadas
- **Canva** - Plantillas y diseño fácil
- **Figma** - Diseño profesional
- **Photopea** - Editor online tipo Photoshop

### Capturas de Pantalla
- Para writeups, puedes usar capturas de la máquina (con marca de agua si es necesaria)
- Capturas del dashboard de la plataforma
- Logo de la plataforma + nombre de la máquina

## 🛠️ Optimización de Imágenes

### Herramientas Online
- [TinyPNG](https://tinypng.com/) - Compresión de PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimizador de Google
- [Compressor.io](https://compressor.io/) - Compresión de imágenes

### Comando de línea (ImageMagick)
```bash
# Redimensionar a 1200x630
magick input.jpg -resize 1200x630^ -gravity center -extent 1200x630 output.jpg

# Optimizar JPG
magick input.jpg -quality 85 -strip output.jpg
```

## 📋 Ejemplos de Temas de Imágenes

### Para Blog de Ciberseguridad
- 🔒 Candados y seguridad
- 💻 Código en pantalla
- 🖥️ Terminal/consola
- 🌐 Redes y conexiones
- 🔐 Cifrado y criptografía
- 🛡️ Escudos de protección
- 👨‍💻 Hacking ético (abstracto)

### Para Writeups CTF
- 📊 Logo de la plataforma (HTB, THM, etc.)
- 🖼️ Captura de la máquina en el dashboard
- 🎯 Banner personalizado con:
  - Nombre de la máquina
  - Dificultad
  - Sistema operativo
  - Plataforma

## ✅ Estado Actual

Todos los posts y writeups ya tienen el campo `heroImage` agregado en el frontmatter apuntando a las rutas correspondientes:

### Blog (12 posts actualizados)
- ✅ Criptografía Básica (ES/EN)
- ✅ Python Hacking (ES/EN)
- ✅ Introducción Pentesting (ES/EN)
- ✅ Docker Seguridad (ES/EN)
- ✅ OWASP Top 10 (ES/EN)
- ✅ Entorno (ES/EN)

### Writeups (16 writeups actualizados)
- ✅ HTB: Lame, Beep (ES/EN)
- ✅ TryHackMe: Blue, Kenobi (ES/EN)
- ✅ VulnHub: Mr-Robot, Brainpan (ES/EN)
- ✅ HackMyVM: Literal, Quick (ES/EN)

## 🚀 Próximos Pasos

1. **Buscar o crear imágenes** para cada post/writeup
2. **Optimizar las imágenes** (< 200KB)
3. **Colocar las imágenes** en los directorios correspondientes
4. **Verificar** que los nombres coincidan con los paths en el frontmatter

## 💡 Consejos

- Usa nombres descriptivos y en minúsculas
- Mantén consistencia en el formato (preferible JPG para fotos)
- Usa WebP si quieres mejor compresión (navegadores modernos)
- Las imágenes son **opcionales** - si no hay heroImage, la tarjeta se mostrará sin imagen
- El componente es responsive y se adapta a móviles automáticamente

## 🎨 Efectos Visuales

Las imágenes tienen efectos interactivos:
- **Hover**: Zoom suave (scale 1.05)
- **Transición**: 0.3s ease
- **Object-fit**: cover (mantiene proporción)
- **Loading**: lazy (carga diferida)

## 📖 Ejemplo Completo

```bash
# 1. Descargar imagen de Unsplash
# 2. Optimizar con TinyPNG
# 3. Guardar como: public/images/blog/mi-nuevo-post.jpg
# 4. En el frontmatter:
```

```markdown
---
title: "Mi Nuevo Post"
description: "Descripción"
pubDate: 2024-11-02
heroImage: "/images/blog/mi-nuevo-post.jpg"
---
```

¡Y listo! La imagen se mostrará automáticamente en todas partes 🎉
