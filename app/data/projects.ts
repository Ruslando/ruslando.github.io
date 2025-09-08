export const projectsData = {
  'masters-thesis': {
    id: 'masters-thesis',
    title: 'Master\'s Thesis: Research and Evaluation of Large Language Models and Graph Databases for Agentic Systems in Unity',
    subtitle: 'Thesis',
    year: 'February 21, 2025',
    category: 'thesis',
    keywords: ['Unity', 'LangChain', 'LangGraph', 'Neo4j', 'LLM', 'AI Agents'],
    description: `This project page is currently under construction. Content will be available soon.`,
    links: {
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

![Original Quake Rendering](/bachelor_thesis/quake_bild.png)
*Original rasterized rendering in Quake showing traditional lighting and shadows*

![Ray Traced Quake](/bachelor_thesis/quake_bild_rt.png)
*The same scene rendered with hardware-accelerated path tracing, showing improved lighting and shadows*

---

## Architecture and Challenges

VkQuake is one of many so-called **source ports** of the original *Quake* game. In this case, "vkQuake" is based on another source port called **QuakeSpasm**, which used OpenGL. VkQuake replaced most of QuakeSpasm's OpenGL graphics calls with Vulkan equivalents and alternatives, but many of the underlying data structures remained close to the original code. Since I had never modded (or really played) Quake before, it took me some time to get used to its internal structure. Static level geometry and dynamic models such as NPCs and weapons for example were handled completely differently internally, and building acceleration structures required converting both into a format that the ray tracing extension could work with.

![Static BLAS](/bachelor_thesis/static_blas.png)
*Static geometry acceleration structure for level architecture*

![Dynamic BLAS](/bachelor_thesis/dynamic_blas.png)
*Dynamic geometry acceleration structure for moving objects like NPCs and weapons*

Another challenge was that shaders need direct access to material information of the hit geometry. To simplify this, I created a unified buffer system that mapped the different data structures onto one format, so the shaders didn't have to handle static and dynamic geometry separately.  

The structural challenges were one side of the work. The other side were the **systems** deeply embedded in Quake's rendering logic, which conflicted with real-time ray tracing. Quake's PVS (Potentially Visible Set) system, for example, culls geometry based on the player's position and was difficult to disable without breaking the game in subtle ways. Frustum culling was easier to remove, but PVS turned out to be notoriously tricky.

![PVS Point of View](/bachelor_thesis/pvs_pov.png)
*Player's perspective showing how PVS affects visible geometry*

![PVS Debug Visualization](/bachelor_thesis/pvs_debug.png)
*Debug visualization of Quake's PVS system showing geometry culling*

The lighting system also caused issues: Quake's baked lightmaps had to be disabled, and while I attempted to convert their sources into real-time lights, many of them were only placed to artificially brighten areas and looked unnatural when treated as actual light sources. To fill the gaps, I also experimented with Quake's "fullbright" textures to simulate additional world lights, though these too came with trade-offs.  

---

## Path Tracing Pipeline

My implementation followed a step-by-step strategy. First, I built a simple Monte Carlo path tracer as the foundation. Rays were sampled uniformly across a hemisphere around each surface normal, bouncing until they either hit a light source or reached a maximum depth. Since Quake textures contain no material data, all surfaces were treated as diffuse, which—perhaps coincidentally—fit surprisingly well with the game's original look.  

![Simplified Raster Pipeline](/bachelor_thesis/simplified_raster_render_structure.png)
*Traditional rasterization rendering pipeline structure*

![Simplified Ray Tracing Pipeline](/bachelor_thesis/simplified_ray_tracing_render_pipeline.png)
*Ray tracing rendering pipeline structure showing the fundamental differences*

![Shader Pipeline Diagram](/bachelor_thesis/shader_diagram.png)
*Ray tracing shader pipeline showing the flow between Ray Generation, Closest Hit, and Miss shaders*

The Vulkan implementation used the "VK_KHR_ray_tracing_pipeline" extension, with the classic setup of Ray Generation, Closest Hit, and Miss Shaders. While basic, this already produced soft shadows and more realistic light transitions in well-lit environments.  

---

## Limitations and Outlook

The biggest weakness of this naive approach appeared in scenes with small or sparse light sources. Because uniform sampling rarely found them, darker areas were practically unplayable. Planned improvements such as Next Event Estimation and Multiple Importance Sampling would have helped tremendously here, along with other features such as a denoiser, but time constraints meant they didn't make it into the final version.

![Low Light Scenario](/bachelor_thesis/low_light_scenario_2_depth_4_sample_512.png)
*Low light scenario demonstrating the challenges of uniform sampling in darker environments (4 bounces, 512 samples)*

![Low Sampling Rate](/bachelor_thesis/low_sampling_rate.png)
*Low sampling rate results showing increased noise and visual quality trade-offs*

![High Sampling Rate](/bachelor_thesis/high_sampling_rate.png)
*Higher sampling rate producing cleaner results but at the cost of performance*
`,
    links: {
      pdf: '/bachelor_thesis/bachelor-thesis.pdf',
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
    year: 'September 2023',
    category: 'coursework',
    keywords: ['Unity', 'Shaders', 'Reprojection', 'Computer Graphics'],
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