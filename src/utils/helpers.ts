/**
 * Formatea una fecha en formato legible
 */
export function formatDate(date: Date, lang: string = 'es'): string {
  return new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Genera un slug a partir de un string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Obtiene el tiempo de lectura estimado
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Trunca un texto a una longitud máxima
 */
export function truncate(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Agrupa items por una propiedad
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Ordena posts por fecha (más reciente primero)
 */
export function sortByDate<T extends { data: { pubDate: Date } }>(posts: T[]): T[] {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Filtra posts por idioma
 */
export function filterByLang<T extends { data: { lang: string } }>(
  posts: T[],
  lang: string
): T[] {
  return posts.filter(post => post.data.lang === lang);
}

/**
 * Obtiene posts únicos por slug (para evitar duplicados entre idiomas)
 */
export function getUniqueBySlug<T extends { slug: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter(item => {
    const slug = item.slug;
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}
