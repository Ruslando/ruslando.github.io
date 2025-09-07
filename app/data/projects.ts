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
    description: `During my studies, I attended a course called "Game Technologies and Interactive Systems: Current Topics," which dealt with the latest developments in the gaming industry. The trending topic at the time was Ray Tracing, triggered by the release of NVIDIA RTX cards and the resulting new lighting effects that were increasingly finding their way into games.

You can think what you want about this technology, but projects like Quake II RTX impressively demonstrate what stunning visual results can be achieved even in decades-old games. Besides the fact that light simulation delivers impressive results, the underlying mathematics and applied theories are even more fascinating than the results themselves. This course inspired me years later to dedicate my bachelor's thesis to this topic. The goal was to demonstrate and practically showcase the possibilities and restrictions of such a modification in existing games.

## Technical Foundation and API Selection

After extensive research and comparison of various candidates (Half-Life, The Elder Scrolls III: Morrowind), I decided on the Quake source port "vkQuake" by Axel Gneitling. This Vulkan port not only met the technical requirements but also offered the advantage of an already existing modern API integration. As a direct predecessor to Quake II, the choice was even thematically fitting!

## The Major Architecture Problems

The biggest challenge was converting the individual rasterization-based systems into a ray tracing system. Many of the period-appropriate systems were not suitable for this type of light simulation and led to significant problems.

**The PVS Problem:** Quake's "Potentially Visible Set" system culls invisible geometry for performance optimization. In a ray tracing system, however, this leads to light leaks and other graphics glitches, as rays can propagate in all directions and hit seemingly "empty" areas. The solution required complete deactivation of the PVS system for static geometry, though this remained problematic for dynamic models.

**Data Structure Unification:** Quake used different vertex formats for static level geometry and animated models. For the ray tracing pipeline, both had to be converted into a unified rt_vertex_t format that contains not only position data but also texture coordinates, texture and material indices.

**Buffer System Redesign:** Ray tracing requires a completely different approach. Instead of sequential draw calls, all potentially visible geometry must be available at runtime. This led to the implementation of static vertex and index buffers for level geometry, dynamic buffers for animated models, and acceleration structures for efficient ray intersections.

The reason for this buffer structure lies in the nature of ray tracing: a ray can theoretically hit any geometry in the scene, which is why all data must be accessible at all times - a fundamental difference from traditional rasterization.

## Path Tracing Pipeline Implementation

My approach followed a progressive development strategy: first, a functional Monte Carlo path tracer should be created as a foundation, which could later be extended with advanced techniques.

**Naive Monte Carlo Approach:** The implemented solution uses uniform hemisphere sampling to randomly sample the hemisphere around surface normals. At each surface hit, a random direction is generated and the ray continues in this direction until either a light source is hit or the maximum bounce depth is reached.

**Material Simplification:** Since Quake's original textures contain no explicit material information, exclusively uniform hemisphere sampling was used. This leads to a uniformly diffuse material representation of all surfaces. Interestingly, this approach fits perfectly with Quake's visual aesthetic, as the game was originally designed for diffuse materials.

**Ray Tracing Pipeline:** The Vulkan implementation uses the VK_KHR_ray_tracing_pipeline extension with three main shader types: Ray Generation Shader (generates primary rays for each pixel), Closest Hit Shader (handles surface interactions and calculates new ray directions), and Miss Shader (defines behavior when rays hit no geometry).

## Limitations of the Naive Approach

The biggest weakness shows in scenes with small light sources. Since random hemisphere sampling rarely hits light sources, the system practically fails completely in dark interior rooms. This makes the game playable in its current form only with sufficient lighting.

**Planned Extensions:** The original concept envisioned gradually extending the renderer with Next Event Estimation (direct light source sampling) and Multiple Importance Sampling. These techniques would have drastically improved efficiency in low-light conditions but could not be implemented due to time constraints.

## Conclusion

The work demonstrates both the technical feasibility and practical limitations of such an undertaking. While the implementation produces impressive soft shadows and realistic light transitions with sufficient lighting, it simultaneously reveals the complexity of modern real-time path tracing solutions.`,
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