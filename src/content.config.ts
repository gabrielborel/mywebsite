import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada post do blog e um arquivo .md em src/content/blog/.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // draft: true -> o post nao aparece em lugar nenhum do site.
    draft: z.boolean().default(false),
  }),
});

// Cada projeto e um arquivo .md em src/content/projects/.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    status: z.enum(['planejado', 'em-andamento', 'concluido']),
    repo: z.string().url().optional(),
    // Pecas principais, mostradas no card (part numbers reais).
    parts: z.array(z.string()).default([]),
    // Tabela de especificacoes da pagina do projeto.
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

export const collections = { blog, projects };
