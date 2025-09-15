'use client'

import { ImageGalleryComponent } from './ui/ImageGallery'

// Rendering Comparison Gallery
const renderingComparisonImages = [
  {
    src: '/bachelor_thesis/quake_bild.png',
    title: 'Original Rasterized Rendering',
    description: 'Traditional lighting and shadows in original Quake using rasterization techniques'
  },
  {
    src: '/bachelor_thesis/quake_bild_rt.png',
    title: 'Hardware-Accelerated Path Tracing',
    description: 'Same scene with ray tracing showing improved lighting, reflections and shadows'
  }
]

export function RenderingComparisonGallery() {
  return (
    <ImageGalleryComponent 
      images={renderingComparisonImages}
      title="Rendering Technique Comparison"
    />
  )
}

// Acceleration Structures Gallery
const accelerationStructuresImages = [
  {
    src: '/bachelor_thesis/static_blas.png',
    title: 'Static BLAS',
    description: 'Bottom-level acceleration structure for static level geometry and architecture'
  },
  {
    src: '/bachelor_thesis/dynamic_blas.png',
    title: 'Dynamic BLAS',
    description: 'Bottom-level acceleration structure for moving objects like NPCs and weapons'
  }
]

export function AccelerationStructuresGallery() {
  return (
    <ImageGalleryComponent 
      images={accelerationStructuresImages}
      title="Ray Tracing Acceleration Structures"
    />
  )
}

// PVS System Gallery
const pvsSystemImages = [
  {
    src: '/bachelor_thesis/pvs_pov.png',
    title: 'PVS Point of View',
    description: 'Player perspective showing how Potentially Visible Set affects rendered geometry'
  },
  {
    src: '/bachelor_thesis/pvs_debug.png',
    title: 'PVS Debug Visualization',
    description: 'Debug visualization of Quake\'s PVS system showing geometry culling in action'
  }
]

export function PVSSystemGallery() {
  return (
    <ImageGalleryComponent 
      images={pvsSystemImages}
      title="Potentially Visible Set (PVS) System"
    />
  )
}

// Pipeline Diagrams Gallery
const pipelineDiagramsImages = [
  {
    src: '/bachelor_thesis/shader_diagram.png',
    title: 'Ray Tracing Shader Pipeline',
    description: 'Detailed shader flow between Ray Generation, Closest Hit, and Miss shaders'
  },
  {
    src: '/bachelor_thesis/simplified_raster_render_structure.png',
    title: 'Rasterization Pipeline',
    description: 'Traditional rasterization rendering pipeline structure and data flow'
  },
  {
    src: '/bachelor_thesis/simplified_ray_tracing_render_pipeline.png',
    title: 'Ray Tracing Pipeline',
    description: 'Ray tracing rendering pipeline showing fundamental architectural differences'
  }
]

export function PipelineDiagramsGallery() {
  return (
    <ImageGalleryComponent 
      images={pipelineDiagramsImages}
      title="Rendering Pipeline Architecture"
    />
  )
}

// Sampling Comparisons Gallery
const samplingComparisonImages = [
  {
    src: '/bachelor_thesis/low_light_scenario_2_depth_4_sample_512.png',
    title: 'Low Light Scenario',
    description: 'Challenges of uniform sampling in darker environments (4 bounces, 512 samples)'
  },
  {
    src: '/bachelor_thesis/low_sampling_rate.png',
    title: 'Low Sampling Rate',
    description: 'Results with low sample count showing increased noise and quality trade-offs'
  },
  {
    src: '/bachelor_thesis/high_sampling_rate.png',
    title: 'High Sampling Rate',
    description: 'Higher sample rate producing cleaner results at the cost of performance'
  }
]

export function SamplingComparisonGallery() {
  return (
    <ImageGalleryComponent 
      images={samplingComparisonImages}
      title="Sampling Rate Performance Analysis"
    />
  )
}