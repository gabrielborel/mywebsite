// Slug de URL a partir de um texto: "Eletrônica" -> "eletronica".
export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Data em formato fixo (AAAA-MM-DD), como o Horizonte pede para valores numericos.
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const STATUS_LABEL = {
  planejado: 'Planejado',
  'em-andamento': 'Em andamento',
  concluido: 'Concluído',
} as const;

export type Status = keyof typeof STATUS_LABEL;
