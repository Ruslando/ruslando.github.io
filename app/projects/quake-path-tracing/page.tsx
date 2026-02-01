import { ProjectPageLayout } from '../components/ProjectPageLayout'
import {
  RenderingComparisonGallery,
  AccelerationStructuresGallery,
  PVSSystemGallery,
  PipelineDiagramsGallery,
  SamplingComparisonGallery
} from '../../components/BachelorThesisGalleries'

export default function QuakePathTracingPage() {
  return (
    <ProjectPageLayout
      title="Bachelor Thesis: Implementing a Hardware-Accelerated Path Tracing Renderer in Quake"
      subtitle="Thesis"
      summary="This project investigates how realistic lighting can be integrated into an older game engine and what trade-offs appear in performance, visuals, and engine structure."
      technologies={['Vulkan']}
      languages={['C', 'GLSL']}
      links={{ github: 'https://github.com/Ruslando/rtQuake' }}
      sections={[
        {
          id: 'motivation',
          label: 'Motivation',
          content: (
            <p className="text-gray-700 leading-relaxed">
              The goal was to explore how far modern lighting techniques can be pushed in a legacy engine and where the practical limits appear during integration.
            </p>
          )
        },
        {
          id: 'architecture',
          label: 'Architecture',
          content: (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Static and dynamic geometry required separate handling, and several legacy visibility systems conflicted with the new rendering pipeline.
              </p>
              <RenderingComparisonGallery />
              <AccelerationStructuresGallery />
              <PVSSystemGallery />
            </div>
          )
        },
        {
          id: 'pipeline',
          label: 'Path Tracing Pipeline',
          content: (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The implementation uses a step-by-step pipeline with iterative ray bounces and a simple material model that fits the original visual style.
              </p>
              <PipelineDiagramsGallery />
            </div>
          )
        },
        {
          id: 'limitations',
          label: 'Limitations',
          content: (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Low-light scenes highlight sampling limitations and the need for better importance sampling and denoising strategies.
              </p>
              <SamplingComparisonGallery />
            </div>
          )
        }
      ]}
    />
  )
}
