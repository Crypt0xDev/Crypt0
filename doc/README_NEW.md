# 🛡️ Crypt0xDev - Cybersecurity Blog & Writeups

Blog personal y colección de writeups sobre ciberseguridad, pentesting y desarrollo. Construido con Astro y soporte multiidioma (español/inglés).

## ✨ Características

- 🌍 **Multiidioma**: Soporte completo para español e inglés
- 🌙 **Modo Oscuro**: Sistema de temas claro/oscuro con detección automática
- 📝 **Blog**: Sistema de blog con markdown
- 🎯 **Writeups**: Organización de writeups por plataforma (HTB, TryHackMe, VulnHub, PortSwigger)
- 🚀 **Performance**: Generación estática con Astro
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- 🎨 **Diseño Moderno**: UI limpia y profesional con gradientes y animaciones

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Preview de producción
pnpm preview
```

## 📁 Estructura del Proyecto

```
├── public/
│   ├── theme.js                      # Script para modo oscuro
│   └── robots.txt                    # SEO
├── src/
│   ├── components/ui/               # Componentes reutilizables
│   ├── content/                     # Contenido del sitio
│   │   ├── blog/                    # Posts del blog
│   │   └── writeups/                # Writeups de máquinas
│   ├── i18n/translations/           # Traducciones
│   ├── layouts/                     # Layouts de páginas
│   ├── pages/                       # Rutas del sitio
│   ├── styles/                      # Estilos globales
│   └── utils/                       # Utilidades
└── astro.config.mjs
```

## 📝 Crear Contenido

### Blog Post

Crea un archivo en `src/content/blog/{lang}/{nombre}.md`:

```markdown
---
title: 'Título del Post'
description: 'Descripción breve'
pubDate: 2024-11-01
heroImage: '/images/blog/image.jpg'
tags: ['tag1', 'tag2']
lang: 'es'  # o 'en'
draft: false
---

# Contenido del post aquí...
```

### Writeup

Crea un archivo en `src/content/writeups/{lang}/{platform}/{nombre}.md`:

```markdown
---
title: 'Nombre de la Máquina'
description: 'Descripción del writeup'
platform: 'htb'  # htb, tryhackme, vulnhub, portswigger
difficulty: 'easy'  # easy, medium, hard, insane
os: 'linux'  # linux, windows, other
pubDate: 2024-11-01
tags: ['web', 'sqli']
lang: 'es'
retired: false
---

# Writeup contenido aquí...
```

## 🎨 Personalización

### Colores y Tema

Edita `src/styles/global.css`:

```css
:root {
  --accent-color: #667eea;
  --accent-hover: #764ba2;
}
```

### Configuración del Sitio

Edita `src/content/site.ts`:

```typescript
const site = {
  siteTitle: 'Tu Nombre',
  description: 'Tu descripción',
  siteUrl: 'https://tudominio.com',
  twitter: '@tuusuario',
};
```

## 🌐 Idiomas Soportados

- 🇪🇸 Español (por defecto)
- 🇬🇧 Inglés

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework
- TypeScript - Type safety
- CSS Variables - Theming
- Markdown - Contenido

## 📦 Comandos

| Comando          | Acción                                    |
| :--------------- | :---------------------------------------- |
| `pnpm install`   | Instala las dependencias                  |
| `pnpm dev`       | Servidor de desarrollo en `localhost:4321`|
| `pnpm build`     | Compila para producción en `./dist/`      |
| `pnpm preview`   | Preview local antes de desplegar          |

## 📄 Licencia

MIT

## 👤 Autor

**Crypt0xDev**

---

⭐ ¡Dale una estrella si te ha sido útil!
