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
    summary: "The ability of LLMs to understand human input opens countless possibilities for integration into modern interactive systems like video games. I set out to implement an LLM-based function calling agent that could respond to prompts like 'open the door in front of you with the appropriate tool' by perceiving its environment, reasoning about the task, and executing it autonomously. My thesis explores whether this level of natural language control is technically feasible in game environments and whether it's worth the integration cost given current LLM performance limitations.",
    description: `# From Natural Language Request to Method Call: Building Function-Calling Agents in Unity


  ## System Architecture

  Drawing inspiration from current RAG techniques but adapting them for interactive systems, I built a two-component architecture:

  **Knowledge Graph (Neo4j)**: A semantically rich representation of Unity scene structure, enhanced with vector embeddings for advanced search capabilities like graph traversal and similarity search. Unlike traditional GraphRAG approaches that use LLMs to generate graph representations, I developed a custom ontology specifically tailored for Unity's structured data. This eliminates the LLM graph generation step entirely, making the system more suitable for real-time applications. The system captures GameObjects, Components, and their relationships using reflection at runtime.

  **Agent Framework (LangGraph + ReAct)**: Implements the Reasoning + Acting (ReAct) prompting framework for autonomous reasoning and decision-making through tool/function calling. The system employs a strategic two-part tool division:

  - Static tools for exploring and querying scene data
  - Dynamic tools that generate executable method invocations from method signatures at runtime

  This separation prevents tool list bloat as game complexity scales—a critical consideration since LLMs struggle with extensive tool selections.

  <MastersThesisGallery />

  ---

  ## Evaluation

  ### Methodology

  I designed an evaluation framework that tested LLMs across increasingly complex scenarios within a text-based Unity game. This progressive difficulty structure revealed exactly where different models begin to falter under complexity.

  Metrics tracked included success rates (full and partial completion), execution duration (split between inference and tool execution), token usage (input/output ratios), error categorization (parameter mismatches, object not found, invocation errors), and cost per successful execution.

  **Model Selection**: I tested five models representing different providers, capabilities, and cost tiers:

  - **Command-R Plus** ($2.85/M tokens)
  - **Mistral Large** ($2.00/M tokens) 
  - **O3-Mini** ($1.10/M tokens)
  - **Llama 3.3 70B** ($0.12/M tokens)
  - **Gemini 2.0 Flash** ($0.10/M tokens)

  All models required robust function calling support through "tools" and "structured output" parameters.

  ### Results

  **Performance**: Success rates ranged dramatically from 5% (Command-R Plus) to 65% (Gemini 2.0 Flash). However, partial success rates reached an impressive 95% for O3-Mini and Llama 3.3, indicating that models understood tasks but struggled with complete execution. Command-R Plus's poor showing stemmed specifically from failures in Neo4j Cypher query generation.

  **Latency**: Total execution times averaged 9.15-51.26 seconds, with O3-Mini showing the highest latency due to extensive reasoning patterns. Time split roughly equally between model inference and tool execution—making real-time interaction impractical for responsive gameplay.

  **Cost Efficiency**: In a surprising twist, the cheapest model (Gemini 2.0 Flash at $0.0008/test) achieved the highest success rate—challenging assumptions about price-performance relationships in LLMs.

  **Error Analysis**: Across all models, 73 errors emerged, dominated by "CYPHER_ERROR" (37) and "PARAMETER_TYPE_MISMATCH" (20). Models consistently struggled to differentiate between instance IDs of different types and lost context across multi-step operations.

  ---

  ## Key Findings

  The results reveal a fascinating paradox: while models excel at identifying correct methods and understanding task intent, they consistently stumble during complete multi-step execution. The system successfully bridges Unity's technical implementation with natural language understanding, but current LLM limitations prevent reliable end-to-end task completion at speeds suitable for interactive gameplay.

  However, the 95% partial success rate strongly validates the architectural approach. Models clearly understand individual subtasks—they simply lose the thread when chaining operations together.

  ---

  ## Practical Applications & Future Potential

  While unsuitable for real-time gameplay today, this architecture proves that natural language can effectively control complex game environments. Rapid advancements in LLM technology—particularly sophisticated agent frameworks and emerging tool usage protocols like the Model Context Protocol—suggest more reliable implementations may soon be within reach. As models improve at maintaining context and reasoning across multiple steps, this foundation could enable truly intelligent game agents that respond naturally to player commands.`,
    links: {
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
    card_description: 'A bachelor’s thesis exploring realistic lighting in a classic game engine and the challenges of integrating it into legacy rendering code.',
    summary: 'A bachelor’s thesis exploring realistic lighting in a classic game engine and the challenges of integrating it into legacy rendering code.',
    description: `# Bachelor’s Thesis Overview

  This project investigates how realistic lighting can be integrated into an older game engine and what trade-offs appear in performance, visuals, and engine structure.

  <RenderingComparisonGallery />

  ## Architecture and Challenges

  The work required adapting legacy rendering systems, converting scene data into a unified format, and handling long-standing visibility and lighting assumptions.

  <AccelerationStructuresGallery />
  <PVSSystemGallery />

  ## Result

  The prototype demonstrates improved lighting quality while revealing the practical limits of bringing modern rendering techniques into a legacy engine.

  <SamplingComparisonGallery />
  `,
    links: {
      // pdf: '/bachelor_thesis/bachelor-thesis.pdf',
      github: 'https://github.com/Ruslando/rtQuake'
    }
  },
/*
  'llm-conversation-framework': {
    id: 'llm-conversation-framework',
    title: 'LLM-Based Conversation Framework for Interactive Game Environments',
    subtitle: 'Personal Project',
    year: 'October 2024 - Ongoing',
    category: 'hobby',
    technologies: ['Unity', 'LangChain', 'LangGraph', 'OWL/RDF', 'Ontotext GraphDB'],
    languages: ['C#', 'Python', 'SPARQL'],
    card_description: 'A conversation framework for game characters that keeps dialogue consistent, remembers past interactions, and supports in-game actions.',
    summary: 'A conversation framework for game characters that keeps dialogue consistent, remembers past interactions, and supports in-game actions.',
    description: `# Conversation Framework Overview

  This project focuses on building believable game characters that can hold consistent conversations, remember prior interactions, and respond to changing game situations.

  ## Goals

  - Maintain personality and memory across sessions
  - Generate context-aware dialogue
  - Connect conversations to in-game actions

  ## Status

  The project is actively evolving with an emphasis on more reliable memory and consistent character behavior.`,
    links: {}
  },
  */
/*
  'quake-rtx-remix': {
    id: 'quake-rtx-remix',
    title: 'Modification of "Quake" using RTX Remix',
    subtitle: 'Academic Coursework',
    year: 'October 2023 - April 2024',
    category: 'coursework',
    technologies: ['NVIDIA RTX Remix'],
    languages: ['C++'],
    card_description: 'A comparative study of retrofitting advanced lighting into a classic game, focusing on compatibility and workflow trade-offs.',
    summary: 'A comparative study of retrofitting advanced lighting into a classic game, focusing on compatibility and workflow trade-offs.',
    links: {}
  },
*/
/*
  'coursework-project-2': {
    id: 'coursework-project-2',
    title: 'Simulation of Reprojection Techniques as Shader in Unity',
    subtitle: 'Academic Coursework',
    year: 'April 2023 - September 2023',
    category: 'coursework',
    technologies: ['Unity'],
    languages: ['C#', 'HLSL'],
    card_description: 'A reprojection study that adapts VR-style frame interpolation techniques for use in traditional games.',
    summary: 'A reprojection study that adapts VR-style frame interpolation techniques for use in traditional games.',
    description: `# Reprojection Coursework Overview

  This project evaluates whether VR-style reprojection can improve visual smoothness in traditional games. It refactors a demonstration into a more flexible, camera-agnostic setup and compares multiple reprojection methods.

  <NumericalErrorGallery />
  <OcclusionFillingGallery />

  ## Outcome

  The updated system is easier to integrate and more configurable, while highlighting that occlusion handling remains the main limitation.`,
    links: {
      github: 'https://github.com/Ruslando/ReprojectionExamples'
    }
  },
  */
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
  card_description: string
  summary?: string
  description?: string
  links: ProjectLinks
}