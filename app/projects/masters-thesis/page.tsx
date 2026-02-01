import { ProjectPageLayout } from '../components/ProjectPageLayout'
import { MastersThesisGallery } from '../../components/MastersThesisGallery'

export default function MastersThesisPage() {
  const successRates = [
    { label: 'Command R+', value: 5 },
    { label: 'Gemini 2.0', value: 65 },
    { label: 'Llama 3.3', value: 45 },
    { label: 'Mistral Lrg', value: 50 },
    { label: 'o3-mini', value: 50 }
  ]

  const meanCosts = [
    { label: 'Command R+', value: 0.0123 },
    { label: 'Gemini 2.0', value: 0.0008 },
    { label: 'Llama 3.3', value: 0.0012 },
    { label: 'Mistral Lrg', value: 0.0174 },
    { label: 'o3-mini', value: 0.0227 }
  ]

  const avgLatency = [
    { label: 'Command R+', value: 9.15 },
    { label: 'Gemini 2.0', value: 9.32 },
    { label: 'Llama 3.3', value: 28.29 },
    { label: 'Mistral Lrg', value: 11.5 },
    { label: 'o3-mini', value: 51.26 }
  ]

  const maxCost = Math.max(...meanCosts.map(item => item.value))
  const maxLatency = Math.max(...avgLatency.map(item => item.value))

  return (
    <ProjectPageLayout
      title="Master Thesis: Agentic Game Control"
      subtitle="Thesis"
      summary="This thesis explores whether natural language can reliably drive in-game actions. The system interprets player requests, reasons about the environment, and executes the correct actions, with a focus on technical feasibility and real-world limitations."
      technologies={['Unity', 'LangChain', 'LangGraph', 'Neo4j']}
      languages={['C#', 'Python', 'Cypher']}
      links={{ github: 'https://github.com/Ruslando/unity-kg-rag' }}
      sections={[
        {
          id: 'system-architecture',
          label: 'System Architecture',
          content: (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The architecture separates world understanding from decision-making so that context stays stable while actions remain flexible. A structured world model feeds an agent that can reason over requests and translate them into executable actions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To keep the system responsive and scalable, the architecture avoids generating world structure from natural language and instead builds a deterministic representation directly from the game scene. This reduces noise, keeps lookups predictable, and enables richer queries.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="border-l-2 border-blue-300 pl-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Knowledge Graph</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A structured representation of the game world that captures objects, components, and relationships for fast queries and semantic lookup. A custom ontology keeps this representation consistent and avoids generating graph structure from text.
                  </p>
                  <ul className="mt-3 list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Captures GameObjects, components, and relations at runtime.</li>
                    <li>Supports traversal and similarity search for scene understanding.</li>
                    <li>Eliminates the need for LLM-driven graph construction.</li>
                  </ul>
                </div>
                <div className="border-l-2 border-emerald-300 pl-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Agent Framework</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A reasoning layer that selects tools, plans steps, and produces executable actions from available method signatures. The tool list is split to keep scaling manageable.
                  </p>
                  <ul className="mt-3 list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Reasoning + acting loop with tool calls for decision execution.</li>
                    <li>Separates exploration tools from action tools to reduce bloat.</li>
                    <li>Builds runtime actions from method signatures for flexibility.</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Static tools</p>
                  <p className="text-gray-700">Scene exploration and querying.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Dynamic tools</p>
                  <p className="text-gray-700">Runtime method invocation and action execution.</p>
                </div>
              </div>

              <MastersThesisGallery />
            </div>
          )
        },
        {
          id: 'evaluation',
          label: 'Evaluation',
          content: (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The evaluation uses a text-based Unity game with scenarios of increasing complexity, from single-step actions to multi-step sequences. Each model receives the same tasks and toolset so results are comparable across providers.
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Test Design</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Progressive task difficulty in a controlled environment.</li>
                    <li>Shared toolset and identical prompts per scenario.</li>
                    <li>Run-level logging for success, latency, and errors.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Metrics Tracked</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Full and partial completion rates.</li>
                    <li>Inference vs. tool execution time split.</li>
                    <li>Token usage and cost per successful run.</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'key-findings',
          label: 'Key Findings',
          content: (
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Models tested</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
                  <p className="text-xs text-gray-600 mt-1">Multiple providers & tiers</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Success rate</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">5–65%</p>
                  <p className="text-xs text-gray-600 mt-1">Full task completion</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Partial success</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">95%</p>
                  <p className="text-xs text-gray-600 mt-1">Best: Llama 3.3, o3-mini</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Latency</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">9–51s</p>
                  <p className="text-xs text-gray-600 mt-1">Avg total per request</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Success Rate Chart */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-gray-900">Success Rate (%)</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-medium">Higher is better</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 300 220" className="w-full h-auto">
                    {/* Grid lines */}
                    <line x1="30" y1="170" x2="290" y2="170" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="30" y1="95" x2="290" y2="95" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="30" y1="20" x2="290" y2="20" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Y Axis Labels */}
                    <text x="25" y="174" fontSize="10" fill="#9ca3af" textAnchor="end">0%</text>
                    <text x="25" y="99" fontSize="10" fill="#9ca3af" textAnchor="end">50%</text>
                    <text x="25" y="24" fontSize="10" fill="#9ca3af" textAnchor="end">100%</text>

                    {successRates.map((item, index) => {
                      const barHeight = (item.value / 100) * 150
                      const x = 45 + index * 50
                      const y = 170 - barHeight
                      return (
                        <g key={item.label}>
                          <rect x={x} y={y} width="30" height={barHeight} rx="4" fill="#3b82f6" className="hover:opacity-80 transition-opacity" />
                          <text x={x + 15} y="188" textAnchor="middle" fontSize="10" fill="#4b5563" fontWeight="500" style={{ fontSize: '9px' }}>{item.label}</text>
                          <text x={x + 15} y={y - 6} textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="600">{item.value}</text>
                        </g>
                      )
                    })}
                  </svg>
                </div>

                {/* Mean Cost Chart */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-gray-900">Mean Cost ($)</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">Lower is better</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 300 220" className="w-full h-auto">
                    <line x1="30" y1="170" x2="290" y2="170" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="30" y1="20" x2="290" y2="20" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                    
                    <text x="25" y="174" fontSize="10" fill="#9ca3af" textAnchor="end">0</text>
                    <text x="25" y="24" fontSize="10" fill="#9ca3af" textAnchor="end">{maxCost.toFixed(3)}</text>

                    {meanCosts.map((item, index) => {
                      const barHeight = (item.value / maxCost) * 150
                      const x = 45 + index * 50
                      const y = 170 - barHeight
                      return (
                        <g key={item.label}>
                          <rect x={x} y={y} width="30" height={barHeight} rx="4" fill="#10b981" />
                          <text x={x + 15} y="188" textAnchor="middle" fontSize="10" fill="#4b5563" fontWeight="500" style={{ fontSize: '9px' }}>{item.label}</text>
                          <text x={x + 15} y={y - 6} textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="600">{item.value.toFixed(3)}</text>
                        </g>
                      )
                    })}
                  </svg>
                </div>

                {/* Latency Chart */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-gray-900">Avg Total Time (s)</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Lower is better</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 300 220" className="w-full h-auto">
                    <line x1="30" y1="170" x2="290" y2="170" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="30" y1="20" x2="290" y2="20" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                    
                    <text x="25" y="174" fontSize="10" fill="#9ca3af" textAnchor="end">0</text>
                    <text x="25" y="24" fontSize="10" fill="#9ca3af" textAnchor="end">{maxLatency.toFixed(1)}s</text>

                    {avgLatency.map((item, index) => {
                      const barHeight = (item.value / maxLatency) * 150
                      const x = 45 + index * 50
                      const y = 170 - barHeight
                      return (
                        <g key={item.label}>
                          <rect x={x} y={y} width="30" height={barHeight} rx="4" fill="#f59e0b" />
                          <text x={x + 15} y="188" textAnchor="middle" fontSize="10" fill="#4b5563" fontWeight="500" style={{ fontSize: '9px' }}>{item.label}</text>
                          <text x={x + 15} y={y - 6} textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="600">{item.value.toFixed(1)}</text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The experiments highlight the trade-off between speed and reasoning depth. Gemini 2.0 Flash offers the best baseline performance and cost, while reasoning models like o3-mini achieve high partial success but with significantly higher latency (51s) and token usage (~4k output tokens). Llama 3.3 struggled with specific parameter errors (31 total), whereas Mistral and o3-mini showed superior error resistance.
              </p>
            </div>
          )
        },
        {
          id: 'future-potential',
          label: 'Future Potential',
          content: (
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The architecture demonstrates a path to natural language-driven interaction in complex environments. As tool-use reasoning improves, it can evolve into a dependable player-facing interface.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Near-term applications are strongest in slower-paced or turn-based experiences, while real-time gameplay will benefit from faster inference, better tool reliability, and improved multi-step memory.
              </p>
            </div>
          )
        }
      ]}
    />
  )
}
