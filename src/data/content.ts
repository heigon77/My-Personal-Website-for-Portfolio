// ============================================================================
//  SEU CONTEÚDO.  Cada campo de texto tem versão `en` (inglês) e `pt`.
//  Preenchido a partir do seu currículo (curriculo.tex). Ajuste o que quiser.
// ============================================================================

import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const profile = {
  name: 'Heigon Soldera',
  // Foto redonda no topo (arquivo em public/).
  photo: '/profile.jpg',
  role: {
    en: 'Data Scientist & ML Engineer · PhD Student',
    pt: 'Cientista de Dados & Engenheiro de ML · Doutorando',
  } satisfies Localized,
  tagline: {
    en: 'I build machine learning systems across computer vision, generative AI and speech — taking models from research all the way to production.',
    pt: 'Construo sistemas de machine learning em visão computacional, IA generativa e fala — levando modelos da pesquisa até a produção.',
  } satisfies Localized,
  location: {
    en: 'Paulínia, SP — Brazil',
    pt: 'Paulínia, SP — Brasil',
  } satisfies Localized,
  about: {
    en: [
      "I'm a Data Scientist and Machine Learning Engineer with hands-on, end-to-end experience in Computer Vision, Speech Recognition (ASR), Deep Learning and Data Engineering. I enjoy turning real-world problems into models that actually reach production — owning the full cycle, from data collection and processing to training, optimization and deployment.",
      "On the academic side, I completed a master's and am now pursuing a PhD in Computer Science at Unicamp, where I research generative AI for image synthesis and transformation — focusing on diffusion models, synthetic data generation and domain adaptation.",
      'Today I work as a Machine Learning Engineer at Instituto SiDi, building on-device speech recognition systems, after approximately 4 years in data science and AI at CI&T — where I worked with LLMs, distributed data processing and production ML pipelines.',
    ],
    pt: [
      'Sou Cientista de Dados e Engenheiro de Machine Learning, com experiência prática de ponta a ponta em Visão Computacional, Reconhecimento de Fala (ASR), Deep Learning e Engenharia de Dados. Gosto de transformar problemas reais em modelos que de fato chegam à produção — cuidando de todo o ciclo, da coleta e tratamento dos dados ao treinamento, otimização e deploy.',
      'No lado acadêmico, concluí o mestrado e curso o doutorado em Ciência da Computação na Unicamp, onde pesquiso IA generativa para síntese e transformação de imagens — com foco em modelos de difusão, geração de dados sintéticos e adaptação de domínio.',
      'Hoje atuo como Engenheiro de Machine Learning no Instituto SiDi, desenvolvendo sistemas de reconhecimento de fala embarcados, após aproximadamente 4 anos em ciência de dados e IA na CI&T — onde trabalhei com LLMs, processamento distribuído de dados e pipelines de ML em produção.',
    ],
  } as Record<Lang, string[]>,
};

export type Education = {
  degree: Localized;
  school: Localized;
  period: string;
  detail?: Localized;
};

export const education: Education[] = [
  {
    degree: { en: 'Ph.D. in Computer Science', pt: 'Doutorado em Ciência da Computação' },
    school: { en: 'Unicamp — Campinas, SP', pt: 'Unicamp — Campinas, SP' },
    period: 'Aug 2025 – Present',
    detail: {
      en: 'Generative AI for image synthesis & transformation: diffusion models, synthetic data, domain adaptation and influence attribution.',
      pt: 'IA generativa para síntese e transformação de imagens: modelos de difusão, dados sintéticos, adaptação de domínio e atribuição de influência.',
    },
  },
  {
    degree: { en: 'M.Sc. in Computer Science', pt: 'Mestrado em Ciência da Computação' },
    school: { en: 'Unicamp — Campinas, SP', pt: 'Unicamp — Campinas, SP' },
    period: 'Mar 2023 – Jan 2025',
    detail: {
      en: 'Computer Vision & Deep Learning for chess board digitization and human move prediction, with synthetic data from computer graphics.',
      pt: 'Visão Computacional e Deep Learning para digitalização de tabuleiros de xadrez e predição de movimentos humanos, com dados sintéticos via computação gráfica.',
    },
  },
  {
    degree: { en: 'B.Sc. in Computer Engineering', pt: 'Bacharelado em Engenharia de Computação' },
    school: { en: 'Unicamp — Campinas, SP', pt: 'Unicamp — Campinas, SP' },
    period: 'Mar 2018 – Dec 2022',
    detail: {
      en: 'Emphasis on Electronics, Mathematics, Physics and Computing; research in ML, Data Science, Embedded Systems and Robotics.',
      pt: 'Ênfase em Eletrônica, Matemática, Física e Computação; pesquisa em ML, Ciência de Dados, Sistemas Embarcados e Robótica.',
    },
  },
];

export const social = {
  github: 'https://github.com/heigon77',
  linkedin: 'https://www.linkedin.com/in/heigon-soldera-a5104b1a1',
  lattes: 'http://lattes.cnpq.br/5514219470803179',
  email: 'heigonsoldera77@gmail.com',
};

// Tipos de link exibidos como "balões" em cada projeto.
// O rótulo é traduzido em src/i18n/ui.ts (chaves link.*).
export type LinkKind =
  | 'frontend'
  | 'code'
  | 'demo'
  | 'backend'
  | 'training'
  | 'full'
  | 'paper';

export type ProjectLink = { kind: LinkKind; url: string };

export type Project = {
  name: string;
  tags: string[];
  status?: 'wip'; // 'wip' mostra um selo "Em desenvolvimento"
  media?: string; // gif/imagem em public/
  description: Localized;
  highlights?: Record<Lang, string[]>;
  note?: Localized; // aviso opcional (ex.: cold start)
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: 'Vision Art AI',
    tags: ['Computer Vision', 'Generative AI', 'YOLOv8', 'Angular', 'FastAPI', 'ONNX'],
    media: '/projects/visionart-demo.gif',
    description: {
      en: 'A full-stack platform that blends computer vision and generative AI to read artworks — detecting objects, classifying the artistic style, and writing a poem inspired by what it sees.',
      pt: 'Plataforma full-stack que une visão computacional e IA generativa para "ler" obras de arte — detectando objetos, classificando o estilo artístico e escrevendo um poema inspirado no que vê.',
    },
    highlights: {
      en: [
        'YOLOv8 fine-tuned for object detection across 134 categories in paintings.',
        'MobileNetV3-Small classifier for artistic style (Impressionism, Baroque, …).',
        'Poem generation from detected elements with the Qwen 2.5 LLM.',
        'FastAPI backend on Hugging Face Spaces with ONNX INT8 quantization for CPU inference; Angular frontend.',
      ],
      pt: [
        'YOLOv8 ajustado (fine-tuning) para detecção de objetos em 134 categorias em pinturas.',
        'Classificador MobileNetV3-Small para estilo artístico (Impressionismo, Barroco, …).',
        'Geração de poema a partir dos elementos detectados com a LLM Qwen 2.5.',
        'Backend FastAPI no Hugging Face Spaces com quantização ONNX INT8 para inferência em CPU; frontend em Angular.',
      ],
    },
    note: {
      en: 'The live demo runs on a free Hugging Face Space that goes to sleep after a period of inactivity. The first request may take ~30–60s for a "cold start" while the server wakes up.',
      pt: 'A demo ao vivo roda em um Hugging Face Space gratuito que entra em modo de suspensão (sleep) após um tempo de inatividade. O primeiro acesso pode levar ~30–60s por causa do "cold start" (inicialização a frio), enquanto o servidor reinicia.',
    },
    links: [
      { kind: 'demo', url: 'https://visionartai.heigonsoldera77.workers.dev/' },
      { kind: 'frontend', url: 'https://github.com/heigon77/VisionArtAI-Frontend' },
      { kind: 'backend', url: 'https://huggingface.co/spaces/heigon77/VisionArtAI-Backend' },
      { kind: 'training', url: 'https://github.com/heigon77/VisionArtAI-Training/tree/main' },
      { kind: 'full', url: 'https://github.com/heigon77/VisionArtAI' },
    ],
  },
  {
    name: 'Food Recommendation System',
    tags: ['Recommender Systems', 'Graph Neural Net', 'LightGCN', 'PyTorch', 'Angular', 'FastAPI'],
    media: '/projects/food-demo.gif',
    description: {
      en: 'Pick a few foods and get combinations that actually go well together. A deep recommender — a LightGCN graph neural network — learns ingredient complementarity from ~240k RecipeNLG recipes. Built end-to-end like Vision Art AI, across separate training, backend and frontend repos.',
      pt: 'Escolha alguns alimentos e receba combinações que de fato harmonizam. Um recomendador profundo — uma rede neural em grafo (LightGCN) — aprende a complementaridade entre ingredientes a partir de ~240k receitas do RecipeNLG. Construído ponta a ponta como o Vision Art AI, em repositórios separados de treino, backend e frontend.',
    },
    highlights: {
      en: [
        'LightGCN (graph neural net) trained with a BPR ranking loss on the recipe–ingredient graph — learns complementarity, not substitutes.',
        'Popularity-corrected negative sampling so pantry staples stop dominating; ingredient canonicalization to merge variants.',
        'Trained on GPU (PyTorch/CUDA); FastAPI backend on a Hugging Face Space (NumPy-only serving); Angular frontend on Cloudflare.',
      ],
      pt: [
        'LightGCN (rede neural em grafo) treinada com perda de ranking BPR no grafo receita–ingrediente — aprende complementaridade, não substitutos.',
        'Amostragem negativa corrigida por popularidade pra staples não dominarem; canonicalização de ingredientes pra mesclar variantes.',
        'Treino em GPU (PyTorch/CUDA); backend FastAPI num Hugging Face Space (serving só com NumPy); frontend Angular no Cloudflare.',
      ],
    },
    note: {
      en: "The demo's backend runs on a free Hugging Face Space that sleeps after inactivity — the first suggestion may take ~30–60s for a \"cold start\" while it wakes up.",
      pt: 'O backend da demo roda em um Hugging Face Space gratuito que entra em suspensão (sleep) após inatividade — a primeira sugestão pode levar ~30–60s de "cold start" (inicialização a frio) enquanto ele reinicia.',
    },
    links: [
      { kind: 'demo', url: 'https://food-recommendation.heigonsoldera77.workers.dev/' },
      { kind: 'frontend', url: 'https://github.com/heigon77/Food-Recommendation-Frontend' },
      { kind: 'backend', url: 'https://huggingface.co/spaces/heigon77/Food-Recommendation-Backend' },
      { kind: 'training', url: 'https://github.com/heigon77/Food-Recommendation-Training' },
    ],
  },
  {
    name: 'Soulslike Sentiment Analyzer',
    tags: ['Data Science', 'NLP', 'Sentiment Analysis', 'Python', 'Plotly'],
    media: '/projects/soulslike-demo.gif',
    description: {
      en: "A Data Science & NLP tool that collects, analyzes and visualizes community sentiment around soulslike games, using the public Steam Reviews and Reddit APIs — no API keys required.",
      pt: 'Ferramenta de Ciência de Dados & NLP que coleta, analisa e visualiza o sentimento da comunidade sobre jogos soulslike, usando as APIs públicas de reviews da Steam e do Reddit — sem precisar de chaves.',
    },
    highlights: {
      en: [
        'Sentiment analysis with VADER plus a custom gaming lexicon.',
        'Topic modeling and clustering (TF-IDF, NMF, KMeans) and temporal trend analysis.',
        '11 interactive Plotly charts exported to a self-contained HTML dashboard.',
      ],
      pt: [
        'Análise de sentimento com VADER e um léxico próprio para o universo gamer.',
        'Modelagem de tópicos e clusterização (TF-IDF, NMF, KMeans) e análise de tendência temporal.',
        '11 gráficos interativos em Plotly exportados para um dashboard HTML autossuficiente.',
      ],
    },
    links: [{ kind: 'code', url: 'https://github.com/heigon77/Soulslike-Sentiment-Analyzer' }],
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
    title: 'Chess Board Digitization and Human Move Prediction Using Machine Learning',
    // ⚠️ Adicione os coautores na ordem correta, se houver.
    authors: 'Heigon Soldera et al.',
    venue: { en: 'IEEE Access', pt: 'IEEE Access' },
    year: 2026,
    link: 'https://ieeexplore.ieee.org/document/11535453',
  },
];
