# Site pessoal

Site e blog em [Astro](https://astro.build), com o visual baseado no design system Horizonte. Gera HTML estático: não precisa de servidor.

## Rodando

Precisa de Node 22 ou mais novo (o `.nvmrc` já aponta para isso).

```bash
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site final na pasta dist/
npm run preview  # abre o resultado do build
```

## Onde fica cada coisa

| Caminho | O que é |
| --- | --- |
| `src/config.ts` | Nome, descrição e link do GitHub. Troque aqui. |
| `src/content/blog/` | Um arquivo `.md` por post. |
| `src/content/projects/` | Um arquivo `.md` por projeto. |
| `src/pages/` | As páginas e as rotas (`/blog/`, `/projetos/`, `/sobre/`). |
| `src/components/` | Pedaços reutilizáveis (barra superior, card de projeto, linha de post). |
| `src/layouts/Base.astro` | Estrutura comum a todas as páginas. |
| `src/styles/tokens.css` | Tokens do Horizonte (cores, espaçamento, raios), tema claro e escuro. |
| `src/styles/global.css` | Estilos globais e dos componentes. |

## Novo post

Crie `src/content/blog/nome-do-post.md`. O nome do arquivo vira o endereço (`/blog/nome-do-post/`).

```markdown
---
title: "Título do post"
description: "Uma frase que resume o post."
date: 2026-11-20
tags: ["firmware", "stm32"]
draft: false
---

Texto em Markdown. Blocos de código com ``` e a linguagem ganham destaque de sintaxe.
```

Com `draft: true` o post fica escondido de todo o site. As tags geram as páginas `/blog/tags/<tag>/` sozinhas.

## Novo projeto

Crie `src/content/projects/nome-do-projeto.md` seguindo o formato de `fc-stm32f405.md`. Os campos `status`, `parts` e `specs` alimentam o card e a tabela da página.

## Domínio

Quando o endereço final existir, descomente a linha `site:` em `astro.config.mjs`.
