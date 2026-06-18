// Strings de interface (botões, navegação, títulos de seção).
// O conteúdo pessoal (bio, projetos, publicações) fica em src/data/content.ts

export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'about.title': 'About me',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'projects.title': 'Projects',
    'projects.subtitle':
      "A few highlights below. On my GitHub you'll find these and many other projects I've built, the full record of everything I've worked on.",
    'projects.more': 'All my projects on GitHub',
    'projects.wip': 'In progress',
    'projects.github': 'See the full project on GitHub',
    'link.frontend': 'Frontend',
    'link.code': 'Code',
    'link.demo': 'Live demo',
    'link.backend': 'Backend (HF Space)',
    'link.training': 'Training',
    'link.full': 'Full project',
    'link.paper': 'Paper',
    'publications.title': 'Publications',
    'publications.subtitle': 'Academic and research output.',
    'publications.read': 'Read',
    'contact.title': 'Contact',
    'contact.subtitle': "Let's talk. I'm open to collaboration and new opportunities.",
    'contact.email': 'Email me',
    'footer.built': 'Built with Astro.',
    'theme.toggle': 'Toggle theme',
    'lang.label': 'Language',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contato',
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Fale comigo',
    'about.title': 'Sobre mim',
    'about.education': 'Formação',
    'about.languages': 'Idiomas',
    'projects.title': 'Projetos',
    'projects.subtitle':
      'Alguns destaques abaixo. No meu GitHub você encontra estes e vários outros projetos que desenvolvi, o registro completo de tudo em que já trabalhei.',
    'projects.more': 'Todos os meus projetos no GitHub',
    'projects.wip': 'Em desenvolvimento',
    'projects.github': 'Ver o projeto completo no GitHub',
    'link.frontend': 'Frontend',
    'link.code': 'Código',
    'link.demo': 'Demo ao vivo',
    'link.backend': 'Backend (HF Space)',
    'link.training': 'Treinamento',
    'link.full': 'Projeto completo',
    'link.paper': 'Artigo',
    'publications.title': 'Publicações',
    'publications.subtitle': 'Produção acadêmica e de pesquisa.',
    'publications.read': 'Ler',
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar. Estou aberto a colaborações e novas oportunidades.',
    'contact.email': 'Enviar email',
    'footer.built': 'Feito com Astro.',
    'theme.toggle': 'Alternar tema',
    'lang.label': 'Idioma',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Resolve o idioma a partir da URL (/pt/... => pt, senão en).
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'pt') return 'pt';
  return 'en';
}

// Caminho para a home de cada idioma (usado no seletor de idioma).
export const homePath: Record<Lang, string> = {
  en: '/',
  pt: '/pt/',
};
