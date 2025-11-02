import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    draft: z.boolean().default(false),
  }),
});

const writeups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['htb', 'tryhackme', 'vulnhub', 'hackmyvm', 'portswigger']),
    category: z.enum(['machines', 'fortresses', 'endgames', 'prolabs', 'challenges', 'rooms', 'paths', 'other']).optional(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'insane']),
    os: z.enum(['linux', 'windows', 'other']),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    logo: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    retired: z.boolean().default(false),
    // Nuevos campos para categorización avanzada
    attackVectors: z.array(z.enum([
      'web', 'network', 'binary', 'crypto', 'forensics', 'steganography',
      'reverse-engineering', 'pwn', 'osint', 'wireless', 'mobile', 'cloud',
      'active-directory', 'privilege-escalation', 'lateral-movement'
    ])).optional(),
    techniques: z.array(z.string()).optional(), // MITRE ATT&CK techniques
    vulnerabilities: z.array(z.string()).optional(), // CVEs, CWEs
    certifications: z.array(z.enum([
      'OSCP', 'OSWE', 'OSEP', 'OSED', 'OSMR', 'OSDA',
      'eJPT', 'eCPPT', 'eWPT', 'CEH', 'PNPT', 'CRTP', 'CRTE'
    ])).optional(),
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    estimatedTime: z.string().optional(), // "2-3 hours", "1 day", etc.
    points: z.number().optional(), // HTB points
    rating: z.number().min(1).max(5).optional(), // User rating
  }),
});

const ctf = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ctfName: z.string(), // Nombre del CTF (e.g., "PicoCTF 2023")
    category: z.enum(['web', 'pwn', 'crypto', 'forensics', 'reversing', 'misc', 'osint', 'stego', 'binary']),
    difficulty: z.enum(['easy', 'medium', 'hard', 'insane']),
    points: z.number().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    solves: z.number().optional(),
    flag: z.string().optional(), // Flag del reto (opcional por spoilers)
    tools: z.array(z.string()).optional(), // Herramientas usadas
    author: z.string().optional(), // Autor del reto
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    estimatedTime: z.string().optional(),
  }),
});

const archive = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['tutorial', 'cheatsheet', 'guide', 'tool', 'resource', 'note', 'research']),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    topic: z.enum([
      'web-security', 'network-security', 'binary-exploitation', 'cryptography',
      'forensics', 'reverse-engineering', 'osint', 'active-directory', 'linux',
      'windows', 'tools', 'methodology', 'privilege-escalation', 'other'
    ]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, writeups, ctf, archive };
