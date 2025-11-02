# 🖼️ Instrucciones Rápidas: Agregar Imagen a Post/Writeup

## Para Blog Posts

1. **Coloca tu imagen** en:
   ```
   public/images/blog/nombre-del-post.jpg
   ```

2. **Agrega en el frontmatter**:
   ```yaml
   ---
   title: "Mi Post"
   heroImage: "/images/blog/nombre-del-post.jpg"
   ---
   ```

## Para Writeups

1. **Coloca tu imagen** en:
   ```
   public/images/writeups/{plataforma}/nombre-maquina.jpg
   ```
   Ejemplo: `public/images/writeups/htb/lame.jpg`

2. **Agrega en el frontmatter**:
   ```yaml
   ---
   title: "Máquina - Plataforma"
   platform: "htb"
   heroImage: "/images/writeups/htb/nombre-maquina.jpg"
   ---
   ```

## Especificaciones de Imagen

- **Tamaño**: 1200x630px
- **Formato**: JPG o PNG
- **Peso**: < 200KB (optimizado)

## Optimizar Imagen Online

1. Ve a [TinyPNG](https://tinypng.com/)
2. Sube tu imagen
3. Descarga la versión optimizada
4. Coloca en el directorio correspondiente

## ✅ Listo!

La imagen aparecerá automáticamente en:
- ✓ Tarjeta de vista previa
- ✓ Posts relacionados
- ✓ (Opcional) Página del post

---

**Consulta la guía completa**: `doc/GUIA_IMAGENES.md`
