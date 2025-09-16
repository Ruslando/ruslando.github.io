export const projectsData = {
  'masters-thesis': {
    id: 'masters-thesis',
    title: 'Master\'s Thesis: Research and Evaluation of Large Language Models and Graph Databases for Agentic Systems in Unity',
    subtitle: 'Thesis',
    year: 'February 21, 2025',
    category: 'thesis',
    keywords: ['Unity', 'LangChain', 'LangGraph', 'Neo4j', 'LLM', 'AI Agents'],
    description: `# From Natural Language Request to Method Call: Building Function-Calling Agents in Unity

The ability of LLMs to understand human input opens countless possibilities for integration into modern interactive systems like video games. I set out to implement an LLM-based function calling agent that could respond to prompts like "open the door in front of you with the appropriate tool" by perceiving its environment, reasoning about the task, and executing it autonomously. My thesis explores whether this level of natural language control is technically feasible in game environments and whether it's worth the integration cost given current LLM performance limitations.

---

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
    title: 'Bachelor Thesis: Implementing a Hardware-Accelerated Path Tracing Renderer in \'Quake\'',
    subtitle: 'Thesis',
    year: 'March 4, 2022',
    category: 'thesis',
    keywords: ['Vulkan', 'C', 'GLSL', 'Path Tracing', 'NVIDIA RTX'],
    description: `# Implementing a Hardware-Accelerated Path Tracing Renderer in 'Quake'

During my studies, I attended a course called *Game Technologies and Interactive Systems: Current Topics*, which dealt with the latest developments in the gaming industry. The trending topic at the time was Ray Tracing, largely influenced by the release of NVIDIA RTX cards and the new lighting effects that slowly made their way into games.  

You can think what you want about this technology, but projects like *Quake II RTX* impressively showed what kind of visual results are possible even in decades-old titles. While the graphical side is impressive, what fascinated me even more were the underlying applied mathematics and theories. Years later, this course became the inspiration that made me dedicate my bachelor’s thesis to this topic. My goal was to demonstrate and practically explore the possibilities and limitations of integrating such a rendering technique into an existing game.  

---

## Technical Foundation and Game Choice

Similar to *Quake II RTX*, I wanted to make use of the RT cores of NVIDIA’s RTX cards to accelerate ray tracing. At the time, Microsoft's DirectX12 and Khronos Group's Vulkan supported this hardware accelerated ray tracing, so the choice of API was very limited, as most older titles are built on older graphics APIs such as OpenGL or DirectX11 or even older ones. This influenced the game selection. Ideally  the game should be open source or at least modifiable, with access to the rendering code. A project that already used Vulkan or DirectX12 would also help, since changing a whole game's rendering engine would go beyond the scope of this thesis.

After comparing several candidates, I decided on **vkQuake** by Axel Gneitling, a Vulkan source port of the original *Quake* game. It matched the technical requirements and, as the predecessor of *Quake II*, also fit thematically.

<RenderingComparisonGallery />

---

## Architecture and Challenges

VkQuake is one of many so-called **source ports** of the original *Quake* game. In this case, "vkQuake" is based on another source port called **QuakeSpasm**, which used OpenGL. VkQuake replaced most of QuakeSpasm's OpenGL graphics calls with Vulkan equivalents and alternatives, but many of the underlying data structures remained close to the original code. Since I had never modded (or really played) Quake before, it took me some time to get used to its internal structure. Static level geometry and dynamic models such as NPCs and weapons for example were handled completely differently internally, and building acceleration structures required converting both into a format that the ray tracing extension could work with.

<AccelerationStructuresGallery />

Another challenge was that shaders need direct access to material information of the hit geometry. To simplify this, I created a unified buffer system that mapped the different data structures onto one format, so the shaders didn't have to handle static and dynamic geometry separately.  

The structural challenges were one side of the work. The other side were the **systems** deeply embedded in Quake's rendering logic, which conflicted with real-time ray tracing. Quake's PVS (Potentially Visible Set) system, for example, culls geometry based on the player's position and was difficult to disable without breaking the game in subtle ways. Frustum culling was easier to remove, but PVS turned out to be notoriously tricky.

<PVSSystemGallery />

The lighting system also caused issues: Quake's baked lightmaps had to be disabled, and while I attempted to convert their sources into real-time lights, many of them were only placed to artificially brighten areas and looked unnatural when treated as actual light sources. To fill the gaps, I also experimented with Quake's "fullbright" textures to simulate additional world lights, though these too came with trade-offs.  

---

## Path Tracing Pipeline

My implementation followed a step-by-step strategy. First, I built a simple Monte Carlo path tracer as the foundation. Rays were sampled uniformly across a hemisphere around each surface normal, bouncing until they either hit a light source or reached a maximum depth. Since Quake textures contain no material data, all surfaces were treated as diffuse, which—perhaps coincidentally—fit surprisingly well with the game's original look.

<PipelineDiagramsGallery />

The Vulkan implementation used the "VK_KHR_ray_tracing_pipeline" extension, with the classic setup of Ray Generation, Closest Hit, and Miss Shaders. While basic, this already produced soft shadows and more realistic light transitions in well-lit environments.  

---

## Limitations and Outlook

The biggest weakness of this naive approach appeared in scenes with small or sparse light sources. Because uniform sampling rarely found them, darker areas were practically unplayable. Planned improvements such as Next Event Estimation and Multiple Importance Sampling would have helped tremendously here, along with other features such as a denoiser, but time constraints meant they didn't make it into the final version.

<SamplingComparisonGallery />
`,
    links: {
      // pdf: '/bachelor_thesis/bachelor-thesis.pdf',
      github: 'https://github.com/Ruslando/rtQuake'
    }
  },
  'coursework-project-1': {
    id: 'coursework-project-1',
    title: 'Modification of "Quake" with RTX Remix',
    subtitle: 'Academic Coursework',
    year: 'April 2024',
    category: 'coursework',
    keywords: ['RTX Remix', 'Ray Tracing', 'Quake', 'NVIDIA'],
    description: `This project page is currently under construction. Content will be available soon.`,
    links: {
    }
  },
  'coursework-project-2': {
    id: 'coursework-project-2',
    title: 'Simulation of Reprojection Techniques as Shader in Unity',
    subtitle: 'Academic Coursework',
    year: 'September 20, 2023',
    category: 'coursework',
    keywords: ['Unity', 'Shaders', 'Reprojection', 'Computer Graphics'],
    description: `# Bringing VR Reprojection to Traditional Flatscreen Gaming

Latency and inconsistent frame rates are critical challenges in gaming, particularly in VR systems where unresolved issues can cause physical problems like dizziness and nausea. To overcome these problems, reprojection techniques like "spacewarp" are used to drastically reduce frame rate spikes and perceived latency, at the cost of visual artifacts. These techniques are commonly used in VR but surprisingly absent in flatscreen gaming.

This independent coursework explored whether these VR-optimized methods can effectively enhance traditional flatscreen gaming experiences by modifying and enhancing Comrade Stinger's Unity Demo on Reprojection and Mouse-Independent Movement.

(NOTE: NVIDIA unveiled Reflex 2 Frame Warp, a machine-learning-based reprojection algorithm to address this exact issue for flatscreen gaming. This technology wasn't available during the writing of the independent coursework and, as of September 2025, still hasn't been officially released.)

## Technical Foundation

VR reprojection techniques emerged to solve a fundamental problem: when rendering can't keep pace with display refresh rates, players experience discomfort from latency and frame drops. Rather than dropping frames entirely, these techniques intelligently warp the most recent rendered frame based on updated camera information, maintaining smooth visual flow even when new renders aren't ready.

**Orientational Timewarp** handles rotational head movements by mapping pixel direction vectors from current to previous camera planes, creating a "look around" effect within the existing image. This approach offers predictable, fast calculations but struggles with positional changes.

**Positional Timewarp** addresses both rotation and translation by reconstructing 3D geometry from depth buffers and reprojecting it to new viewpoints. While more computationally intensive, it handles camera movement significantly better, though it introduces occlusion holes requiring fill algorithms.

**Spacewarp** leverages motion vectors to detect spatiotemporal changes, enabling accurate extrapolation even with stationary cameras. This represents the most sophisticated approach but demands the highest computational resources and complex motion vector management.

## Implementation and Refactoring

The original plan for this independent coursework was to test the implementation across different gaming genres and camera perspectives to gauge the effectiveness of these techniques beyond the originally implemented first-person controller. For example, in a third-person controller, the occlusion holes from the player character might become more obvious, or less obvious in an isometric RTS game.

However, the original implementation suffered from several limitations and was hardcoded to work only with a specialized first-person controller, which constrained its broader applicability and required me to undertake comprehensive refactoring.

### Architecture Improvements

**Post-Process Integration**: The original implementation featured a complicated dual-camera system deeply tied to a custom first-person controller with an opaque material system that displayed the reprojected recordings in front of the controller. I streamlined this into a single post-processing effect. This transformation enables easy integration with any camera setup and eliminates the complex scene structure dependencies of the original implementation.

**Projection Method Overhaul**: The original coordinate transformation methods contained numerical errors causing image blur and displacement even when camera planes remained unchanged. I replaced these with standard graphics pipeline transformations using proper inverse projection matrices, eliminating precision issues and ensuring pixel-perfect results when appropriate.

<NumericalErrorGallery />

**Modular Shader Design**: I restructured the monolithic fragment shader into distinct subpasses for each reprojection method, removing conditional branching and improving both performance and maintainability.

### Advanced Features

Beyond the existing reprojection techniques, I added improved and new techniques based on recent research.

**Enhanced Positional Timewarp**: I implemented Finn Sinclair's variable step-size ray marching algorithm, reducing maximum ray marching steps from 100 to 32 while improving convergence accuracy. I replaced the original 3x3 kernel occlusion filling with epipolar line backtracking, producing more natural results for occluded areas.

<OcclusionFillingGallery />

**Spacewarp Implementation**: I built a complete spacewarp system using motion vector accumulation to handle frame rate simulation accurately. This required developing a motion vector history buffer that maintains correct temporal relationships across simulated frame boundaries.

**Flexible Frame Rate Control**: I introduced separate simulated and extrapolated frame rate controls, enabling precise testing scenarios that weren't possible with the original single-parameter system.

## Key Results and Future Potential

The original demonstration was vastly improved by enhancing the existing reprojection implementation as well as introducing a spacewarp variant, which is more commonly seen in modern VR titles. The transition to a screen-space shader also allows for much easier integration into existing camera setups, enabling general-purpose demonstration beyond the existing first-person controller setup, as well as more fine-grained control over the simulated framerate controls.

Current limitations of reprojection techniques center primarily on occlusion handling rather than fundamental algorithmic constraints. Advanced hole-filling approaches—potentially leveraging machine learning or real-time analytical depth generation—could address these gaps.`,
    links: {
      github: 'https://github.com/Ruslando/ReprojectionExamples'
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
  category: 'thesis' | 'coursework'
  keywords: string[]
  description: string
  links: ProjectLinks
}