export const projectsData = {
  'masters-thesis': {
    id: 'masters-thesis',
    title: 'Agentic Game Control with Graphs',
    subtitle: 'Thesis',
    year: 'October 2024 - February 2025',
    category: 'thesis',
    technologies: ['Unity', 'LangChain', 'LangGraph', 'Neo4j'],
    languages: ['C#', 'Python', 'Cypher'],
    image: '/master_thesis/Screenshot 2025-03-18 152311.png',
    card_description: 'A master thesis project exploring natural language control of game interactions through structured world understanding and action execution.',
    summary: 'A master thesis project exploring natural language control of game interactions through structured world understanding and action execution.',
    links: {
      pdf: '/master_thesis/566919_Ruslan_Novikov_Masterarbeit.pdf',
      github: 'https://github.com/Ruslando/unity-kg-rag'
    }
  },
  'quake-path-tracing': {
    id: 'quake-path-tracing',
    title: 'rtQuake: Path Tracing in Quake',
    subtitle: 'Thesis',
    year: 'October 2021 - March 2022',
    category: 'thesis',
    technologies: ['Vulkan'],
    languages: ['C', 'GLSL'],
    image: '/bachelor_thesis/low_light_scenario_2_depth_4_sample_512.png',
    card_description: "A bachelor's thesis exploring realistic lighting in a classic game engine and the challenges of integrating it into legacy rendering code.",
    summary: "A bachelor's thesis exploring realistic lighting in a classic game engine and the challenges of integrating it into legacy rendering code.",
    links: {
      pdf: '/bachelor_thesis/bachelor-thesis.pdf',
      github: 'https://github.com/Ruslando/rtQuake'
    }
  },
  'game-interaction-agent': {
    id: 'game-interaction-agent',
    title: 'Deep Agent Interaction Framework for Godot',
    subtitle: 'Personal Project',
    year: 'January 2026 - Ongoing',
    category: 'hobby',
    technologies: ['Godot', 'FastAPI', 'LangGraph', 'WebSocket'],
    languages: ['Python'],
    image: '/placeholders/game-interaction-agent-gradient.svg',
    card_description: 'A Python backend that powers LLM-driven NPC behavior in a Godot game via tool calling over WebSocket.',
    summary: 'A Python backend that powers LLM-driven NPC behavior in a Godot game via tool calling over WebSocket.',
    links: {
      github: 'https://github.com/Ruslando/GameInteractionAgent'
    }
  },
  'quake-rtx-remix': {
    id: 'quake-rtx-remix',
    title: 'Modification of "Quake" using RTX Remix',
    subtitle: 'Academic Coursework',
    year: 'October 2023 - April 2024',
    category: 'coursework',
    technologies: ['NVIDIA RTX Remix'],
    languages: ['C++'],
    image: '/ic2/Screenshot 2026-02-19 100342.png',
    card_description: 'A comparative study of retrofitting advanced lighting into a classic game, focusing on compatibility and workflow trade-offs.',
    summary: 'A comparative study of retrofitting advanced lighting into a classic game, focusing on compatibility and workflow trade-offs.',
    links: {
      pdf: '/ic2/IC2_RuslanNovikov_566919.pdf'
    }
  },
  'coursework-project-2': {
    id: 'coursework-project-2',
    title: 'Simulation of Reprojection Techniques as Shader in Unity',
    subtitle: 'Academic Coursework',
    year: 'April 2023 - September 2023',
    category: 'coursework',
    technologies: ['Unity'],
    languages: ['C#', 'HLSL'],
    image: '/ic1/ezgif-2a581d941403cbbe.gif',
    card_description: 'A reprojection study that adapts VR-style frame interpolation techniques for use in traditional games.',
    summary: 'A reprojection study that adapts VR-style frame interpolation techniques for use in traditional games.',
    links: {
      pdf: '/ic1/IC1_RuslanNovikov_566919.pdf',
      github: 'https://github.com/Ruslando/ReprojectionExamples'
    }
  },
  'somethinar': {
    id: 'somethinar',
    title: 'Somethin.AR',
    subtitle: 'University Project',
    year: 'October 2023 - February 2024',
    category: 'university',
    technologies: ['Unity', 'Meta XR SDK', 'Photon', 'Meta XR Colocation API'],
    languages: ['C#'],
    image: '/somethinar/screenshot2.png',
    card_description: 'A mixed-reality multiplayer game that supports co-located play.',
    summary: 'A mixed-reality multiplayer game that supports co-located play.',
    links: {
      showtime: 'https://showtime.f4.htw-berlin.de/ws23/master/m1-somethinar/'
    }
  },
  'vamx': {
    id: 'vamx',
    title: 'VamX',
    subtitle: 'University Project',
    year: 'April 2023 - August 2023',
    category: 'university',
    technologies: ['Unity', 'FMOD', 'Virtual Reality'],
    languages: ['C#'],
    image: '/vamx/ball.gif',
    card_description: 'A VR experience exploring how audio manipulation changes user behavior.',
    summary: 'A VR experience exploring how audio manipulation changes user behavior.',
    links: {
      github: 'https://github.com/IMI-Project-Sound-Manipulation-in-VR/Unity_Framework',
      showtime: 'https://showtime.f4.htw-berlin.de/ss23/master/m6-vamx/'
    }
  },
  'anaphylaxis-app': {
    id: 'anaphylaxis-app',
    title: 'Anaphylaxis App',
    subtitle: 'University Project',
    year: 'October 2019 - February 2020',
    category: 'university',
    technologies: ['Android', 'Room Database', 'RxJava'],
    languages: ['Java', 'SQL'],
    image: '/anaphylaxie-app/csm_19w_b1_anaphylaxie_app_655ddadbf6.png',
    card_description: 'A first-aid app focused on pediatric anaphylaxis with guided responses and a structured local knowledge base.',
    summary: 'A first-aid app focused on pediatric anaphylaxis with guided responses and a structured local knowledge base.',
    links: {
      github: 'https://github.com/omshill0305/Anaphylaxie-App',
      showtime: 'https://imi-bachelor.htw-berlin.de/studium/projekte/showtime-und-projekte-im-wintersemester-201920/'
    }
  }
}

export type ProjectLinks = {
  pdf?: string
  [key: string]: string | undefined
}

export type Project = {
  id: string
  title: string
  subtitle: string
  year: string
  category: 'thesis' | 'coursework' | 'hobby' | 'university'
  technologies: string[]
  languages: string[]
  image?: string
  card_description: string
  summary: string
  description?: string
  links: ProjectLinks
}
