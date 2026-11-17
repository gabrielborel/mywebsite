# Site pessoal

Site e blog em [Astro](https://astro.build), com o visual baseado no design system Horizonte. Gera HTML estático: não precisa de servidor.

## Rodando

Precisa de Node 22.23.4 ou mais novo. O `.nvmrc` aponta para o Node 24, que é a versão que a Cloudflare usa no build.

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

## Publicação e domínio

O site é publicado na Cloudflare, como Worker com static assets. A Cloudflare lê o repositório do GitHub, roda o build e publica a cada push na `main`, então não existe workflow no GitHub. A configuração fica em `wrangler.jsonc`, e o domínio `borelgabriel.com` em `site:` no `astro.config.mjs`. Com domínio próprio não se usa `base`.

Configuração única, no painel da Cloudflare:

1. Em **Workers & Pages > Create > Import a repository**, autorize o app da Cloudflare no GitHub e escolha só este repositório.
2. Nome do projeto: `borelgabriel`, igual ao `name` do `wrangler.jsonc`.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
4. **Save and Deploy**. O site abre primeiro num endereço `workers.dev`.
5. No Worker, vá em **Settings > Domains & Routes > Add > Custom Domain** e adicione `borelgabriel.com`. Repita com `www.borelgabriel.com`. A Cloudflare cria o DNS e o certificado sozinha.

O build usa a versão do Node do `.nvmrc`. Se mudar de versão, confira se o Astro ainda suporta.

Deploy manual, se precisar: `npx wrangler login` uma vez e depois `npm run build && npx wrangler deploy`.
