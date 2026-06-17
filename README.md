# Portfólio — Heigon Soldera

Site pessoal bilíngue (🇬🇧 inglês principal + 🇧🇷 português), feito com [Astro](https://astro.build).
Tem seções de **Sobre / Formação**, **Projetos**, **Publicações** e **Contato**, com links para
GitHub, LinkedIn e Lattes, tema claro/escuro e seletor de idioma.

- Inglês: `/` &nbsp;•&nbsp; Português: `/pt/`

---

## 🚀 Rodar localmente

> O Node foi instalado em `~/.local/node` e já está no seu `~/.bashrc`.
> Se `node -v` não funcionar num terminal novo, rode: `export PATH="$HOME/.local/node/bin:$PATH"`

```bash
npm install      # só na primeira vez
npm run dev      # servidor de desenvolvimento → http://localhost:4321
npm run build    # gera o site estático em dist/
npm run preview  # pré-visualiza o build de produção
```

---

## ✏️ Onde editar o conteúdo

Quase tudo fica em **dois arquivos** — não precisa mexer no HTML:

| Arquivo | O que editar |
|---|---|
| [`src/data/content.ts`](src/data/content.ts) | Seu nome, bio, formação, **links (LinkedIn/Lattes)**, projetos e publicações |
| [`src/i18n/ui.ts`](src/i18n/ui.ts) | Textos da interface (botões, nomes das seções) em EN e PT |

Cada texto tem versão `en` e `pt` lado a lado. Para adicionar um projeto ou publicação,
copie um item da lista e troque os campos.

### ⚠️ Placeholders que VOCÊ precisa preencher

- [ ] Confirmar o **nome** (deduzi `Heigon Soldera`) em `content.ts → profile.name`
- [ ] **LinkedIn** real em `content.ts → social.linkedin`
- [ ] **Lattes** real (URL do seu currículo) em `content.ts → social.lattes`
- [ ] **Formação** real em `content.ts → education`
- [ ] **Publicações** reais em `content.ts → publications` (ou apague a lista se não quiser a seção)
- [ ] Revisar/ajustar as descrições dos projetos e a bio

---

## 🌐 Hospedagem grátis — Cloudflare Pages

1. Suba este projeto pro GitHub (o repositório já existe: `heigon77/My-Personal-Website-for-Portfolio`):
   ```bash
   git add -A
   git commit -m "Build bilingual Astro portfolio"
   git push
   ```
2. Acesse **https://dash.cloudflare.com** → *Workers & Pages* → *Create* → *Pages* → *Connect to Git*.
3. Selecione o repositório e configure o build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. *Save and Deploy*. Em ~1 min seu site fica no ar em `https://<nome>.pages.dev`.
   Cada `git push` faz deploy automático.

> Alternativas equivalentes: **Vercel** ou **Netlify** (mesmos 3 campos de build).

### Depois: URL profissional (opcional)
Em *Pages → seu projeto → Custom domains* você pode plugar um domínio próprio
(ex.: `heigonsoldera.dev`, ~R$60/ano). Aí fica `heigonsoldera.dev` em vez de `*.pages.dev`.

---

## 🎨 Migrar o VisionArtAI pra algo mais profissional

O VisionArtAI (Angular) hoje está no GitHub Pages. Pra deixar mais profissional, crie
**outro** projeto no Cloudflare Pages apontando pro repo `VisionArtAI-Frontend`:

- **Build command:** `npm run build`
- **Build output directory:** `dist/vision-art-ai-frontend/browser` *(confira o caminho real em `angular.json`)*

Fica em `https://visionartai.pages.dev` (ou um subdomínio do seu domínio, ex.: `visionart.heigonsoldera.dev`).
Mais rápido (CDN global), HTTPS e deploy automático.

---

Feito com Astro · estrutura pronta, é só preencher seus dados.
