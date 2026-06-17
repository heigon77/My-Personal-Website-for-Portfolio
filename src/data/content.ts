// ============================================================================
//  EDITE AQUI O SEU CONTEÚDO.  Cada campo tem versão `en` (inglês) e `pt`.
//  Os textos abaixo são RASCUNHOS/PLACEHOLDERS — troque pelos seus dados reais.
// ============================================================================

import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const profile = {
  // ⚠️ Confirme: deduzi "Heigon Soldera" do seu email/GitHub. Ajuste se preciso.
  name: 'Heigon Soldera',
  role: {
    en: 'AI Researcher & Software Developer',
    pt: 'Pesquisador de IA & Desenvolvedor de Software',
  } satisfies Localized,
  // Frase curta de impacto, aparece no topo (hero).
  tagline: {
    en: 'I build systems at the intersection of computer vision, generative AI, and human-centered software.',
    pt: 'Construo sistemas na interseção entre visão computacional, IA generativa e software centrado no ser humano.',
  } satisfies Localized,
  // Local (opcional).
  location: {
    en: 'Brazil',
    pt: 'Brasil',
  } satisfies Localized,
  // Bio mais longa, aparece na seção "Sobre".
  about: {
    en: [
      'I am a researcher and developer focused on artificial intelligence and computer vision. I enjoy turning research ideas into real, usable products.',
      'My work spans deep learning, generative models, and full-stack development — from training models to shipping the interfaces people actually use.',
    ],
    pt: [
      'Sou pesquisador e desenvolvedor com foco em inteligência artificial e visão computacional. Gosto de transformar ideias de pesquisa em produtos reais e utilizáveis.',
      'Meu trabalho passa por deep learning, modelos generativos e desenvolvimento full-stack — do treino de modelos até a entrega das interfaces que as pessoas realmente usam.',
    ],
  } as Record<Lang, string[]>,
};

export const education = [
  {
    // ⚠️ Preencha com sua formação real.
    degree: { en: 'B.Sc. in Computer Science', pt: 'Bacharelado em Ciência da Computação' } satisfies Localized,
    school: { en: 'Your University', pt: 'Sua Universidade' } satisfies Localized,
    period: '20XX – 20XX',
  },
];

export const social = {
  github: 'https://github.com/heigon77',
  // ⚠️ Troque pelos seus links reais:
  linkedin: 'https://www.linkedin.com/in/your-handle/',
  lattes: 'http://lattes.cnpq.br/SEU-ID-AQUI',
  email: 'solderaheigon0@gmail.com',
};

export type Project = {
  name: string;
  tags: string[];
  repo?: string;
  demo?: string;
  description: Localized;
};

export const projects: Project[] = [
  {
    name: 'Vision Art AI',
    tags: ['Angular', 'Computer Vision', 'Generative AI', 'YOLOv8'],
    repo: 'https://github.com/heigon77/VisionArtAI-Frontend',
    demo: 'https://heigon77.github.io/VisionArtAI-Frontend/',
    description: {
      en: 'An interactive platform that blends computer vision and generative AI to analyze artworks — detecting objects, classifying art styles, and generating poetic interpretations.',
      pt: 'Plataforma interativa que une visão computacional e IA generativa para analisar obras de arte — detectando objetos, classificando estilos artísticos e gerando interpretações poéticas.',
    },
  },
  {
    name: 'AI Learning Languages',
    tags: ['AI', 'NLP', 'Education'],
    repo: 'https://github.com/heigon77/AI-Learning-Languages',
    description: {
      en: 'A project exploring how AI can help people learn languages. (Update this description.)',
      pt: 'Projeto que explora como a IA pode ajudar pessoas a aprender idiomas. (Atualize esta descrição.)',
    },
  },
  {
    name: 'IHC',
    tags: ['HCI', 'UX'],
    repo: 'https://github.com/heigon77/IHC',
    description: {
      en: 'Human-Computer Interaction coursework / project. (Update this description.)',
      pt: 'Trabalho/projeto de Interação Humano-Computador. (Atualize esta descrição.)',
    },
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: Localized;
  year: number;
  link?: string;
};

export const publications: Publication[] = [
  {
    // ⚠️ Exemplo — substitua pelas suas publicações reais (ou apague esta lista).
    title: 'Title of your paper goes here',
    authors: 'H. Soldera, Co-author A, Co-author B',
    venue: { en: 'Conference / Journal name', pt: 'Nome da Conferência / Revista' } satisfies Localized,
    year: 2025,
    link: 'https://doi.org/PLACEHOLDER',
  },
];
