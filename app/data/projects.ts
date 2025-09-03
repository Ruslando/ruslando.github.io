export const projectsData = {
  'quake-path-tracing': {
    id: 'quake-path-tracing',
    title: 'Bachelor Thesis: Implementing a Hardware-Accelerated Path Tracing Renderer in \'Quake\'',
    subtitle: 'March 4, 2022',
    year: 'March 4, 2022',
    technologies: ['Vulkan', 'C', 'GLSL', 'Ray Tracing', 'vkQuake'],
    description: `During my studies, I completed a course on "Game Technologies and Interactive Systems: Ray Tracing" that introduced me to the fascinating world of real-time ray tracing. The course coincided with Nvidia's impressive Quake II RTX showcase, which demonstrated the dramatic visual improvements possible when replacing traditional rasterization with path tracing. Inspired by these developments, I became determined to create my own implementation in a different game engine, ultimately leading to my bachelor's thesis topic.

My thesis aimed to explore both the possibilities and restrictions of such a modification by implementing a hardware-accelerated path tracing renderer for the original Quake. The work demonstrates the practical challenges involved in transitioning legacy game engines to modern rendering paradigms while highlighting the technical complexities that emerged during this early period of consumer ray tracing adoption.`,
    links: {
    }
  }
}

export type Project = typeof projectsData[keyof typeof projectsData]