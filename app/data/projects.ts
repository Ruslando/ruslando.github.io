export const projectsData = {
  'masters-thesis': {
    id: 'masters-thesis',
    title: 'Master\'s Thesis: Research and Evaluation of Large Language Models and Graph Databases for Agentic Systems in Unity',
    subtitle: 'Expected 2025',
    year: 'Expected 2025',
    category: 'thesis',
    keywords: ['Unity', 'LangChain', 'LangGraph', 'Neo4j', 'LLM', 'AI Agents'],
    description: `This project page is currently under construction. Content will be available soon.`,
    links: {
    }
  },
  'quake-path-tracing': {
    id: 'quake-path-tracing',
    title: 'Bachelor Thesis: Implementing a Hardware-Accelerated Path Tracing Renderer in \'Quake\'',
    subtitle: 'March 4, 2022',
    year: 'March 4, 2022',
    category: 'thesis',
    keywords: ['Vulkan', 'C', 'GLSL', 'Path Tracing', 'NVIDIA RTX'],
    description: `During my studies, I attended a course called "Game Technologies and Interactive Systems: Current Topics," which dealt with the latest developments in the gaming industry. The trending topic at the time was Ray Tracing, triggered by the release of NVIDIA RTX cards and the resulting new lighting effects that were increasingly finding their way into games.<br><br>You can think what you want about this technology, but projects like Quake II RTX impressively demonstrate what stunning visual results can be achieved even in decades-old games. Besides the fact that light simulation delivers impressive results, the underlying mathematics and applied theories are even more fascinating than the results themselves. The completion of this course inspired me years later to dedicate my bachelor's thesis to this topic. The goal was to demonstrate and practically showcase the possibilities and restrictions of such a modification in existing games.<br><br>**Technical Foundation and API Selection**<br><br>The work began, as is often the case, with the theoretical foundation as well as the selection of suitable technologies and the appropriate game project. At that time, DirectX 12 DXR and Vulkan were the only graphics APIs that supported hardware-accelerated ray tracing. This limitation significantly restricted the selection of possible games, as they would also need to use one of the mentioned APIs.<br><br>After extensive research and comparison of various candidates (Half-Life, The Elder Scrolls III: Morrowind), I decided on the Quake source port "vkQuake" by Axel Gneitling. This Vulkan port not only met the technical requirements but also offered the advantage of an already existing modern API integration. As a direct predecessor to Quake II, the choice was even thematically fitting!<br><br>**Fundamental Architecture Challenges**<br><br>This was followed by a detailed analysis of vkQuake's source code to understand the various systems of the game and the port. The source port retained the originally C-written base almost completely and merely replaced OpenGL calls with Vulkan equivalents.<br><br>The biggest challenge was converting the individual rasterization-based systems into a ray tracing system. Many of the period-appropriate systems were not suitable for this type of light simulation and led to significant problems.<br><br>**The PVS Problem:** Quake's "Potentially Visible Set" system culls invisible geometry for performance optimization. In a ray tracing system, however, this leads to light leaks and other graphics glitches, as rays can propagate in all directions and hit seemingly "empty" areas. The solution required complete deactivation of the PVS system for static geometry, though this remained problematic for dynamic models.<br><br>**Data Structure Unification:** A critical point was the different treatment of world geometry and dynamic player models. Quake used different vertex formats for static level geometry and animated models. For the ray tracing pipeline, both had to be converted into a unified rt_vertex_t format that contains not only position data but also texture coordinates, texture and material indices.<br><br>**Buffer System Redesign:** Ray tracing requires a completely different approach to data management. Instead of sequential draw calls where each object is individually bound with the corresponding pipeline, all potentially visible data must be available at runtime. This led to the implementation of:<br><br>• Static vertex and index buffers for level geometry, created once during level load<br>• Dynamic buffers for animated models, updated every frame<br>• Unified texture arrays for shader access to all textures<br>• Acceleration structures (BLAS and TLAS) for efficient ray-geometry intersections<br><br>The reason for this buffer structure lies in the nature of ray tracing: a ray can theoretically hit any geometry in the scene, which is why all data must be accessible at all times - a fundamental difference from traditional rasterization.<br><br>**Path Tracing Pipeline Implementation**<br><br>The approach for implementation followed a progressive development strategy: first, a functional Monte Carlo path tracer should be created as a foundation, which could later be extended with advanced techniques.<br><br>**Naive Monte Carlo Approach:** The implemented solution uses uniform hemisphere sampling to randomly sample the hemisphere around surface normals. At each surface hit, a random direction is generated and the ray continues in this direction until either a light source is hit or the maximum bounce depth is reached.<br><br>**Material Simplification:** Since Quake's original textures contain no explicit material information (such as roughness, metallicity, or specific BRDF parameters), exclusively uniform hemisphere sampling was used. This leads to a uniformly diffuse material representation of all surfaces. Interestingly, this approach fits perfectly with Quake's visual aesthetic, as the game was originally designed for diffuse materials and the results appear authentic.<br><br>**Ray Tracing Pipeline:** The Vulkan implementation uses the VK_KHR_ray_tracing_pipeline extension with three main shader types:<br><br>• Ray Generation Shader: Generates primary rays for each pixel and manages multi-sampling<br>• Closest Hit Shader: Handles surface interactions, texture sampling, and calculates new ray directions<br>• Miss Shader: Defines behavior when rays hit no geometry<br><br>**Limitations of the Naive Approach:** The biggest weakness shows in scenes with small light sources. Since random hemisphere sampling rarely hits light sources, the system practically fails completely in dark interior rooms. This makes the game playable in its current form only with sufficient lighting.<br><br>**Planned Extensions:** The original concept envisioned gradually extending the renderer with Next Event Estimation (direct light source sampling) and Multiple Importance Sampling (weighted combination of different sampling strategies). These techniques would have drastically improved efficiency in low-light conditions but could not be implemented due to time constraints.<br><br>The work demonstrates both the technical feasibility and practical limitations of such an undertaking. While the implementation produces impressive soft shadows and realistic light transitions with sufficient lighting, it simultaneously reveals the complexity of modern real-time path tracing solutions.`,
    links: {
      pdf: '/bachelor-thesis.pdf'
    }
  },
  'coursework-project-1': {
    id: 'coursework-project-1',
    title: 'Interactive Media Systems Project',
    subtitle: 'Academic Coursework',
    year: '2023',
    category: 'coursework',
    keywords: ['Vue.js', 'Node.js', 'Web Development'],
    description: `This project page is currently under construction. Content will be available soon.`,
    links: {
    }
  },
  'coursework-project-2': {
    id: 'coursework-project-2',
    title: 'Game Development Coursework',
    subtitle: 'Academic Coursework',
    year: '2022',
    category: 'coursework',
    keywords: ['Unity', 'Game Development', 'C#'],
    description: `This project page is currently under construction. Content will be available soon.`,
    links: {
    }
  }
}

export type Project = typeof projectsData[keyof typeof projectsData]