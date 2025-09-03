import { SectionHeader } from './ui/SectionHeader'
import { InterestCard } from './ui/InterestCard'

export default function AboutSection() {
  return (
    <div className="space-y-8">
      {/* About Me */}
      <section>
        <SectionHeader>About Me</SectionHeader>
        <div className="prose prose-gray max-w-none pl-4">
          <p className="text-gray-700 leading-relaxed mb-6">
            Hello, my name is Ruslan Novikov and I'm a research assistant working student in software and web development, 
            as well as a Master of Science graduate in International Media and Computing from HTW Berlin. 
            Through my studies and professional experience, I've gained expertise across an extensive range of media-related computer science fields, 
            with a particular passion and focus on game development and interactive systems.
          </p>
        </div>
      </section>

      {/* Technologies & Programming Languages */}
      <section>
        <SectionHeader>Technologies & Programming Languages</SectionHeader>
        <div className="pl-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Web Development */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                Web Development
              </h4>
              <div className="space-y-4">
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">Vue.js Framework</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">HTML</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">CSS</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">.NET Entity Framework</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">C#</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">Microsoft SQL Server</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">SQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Development & Graphics */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                Game Development & Graphics
              </h4>
              <div className="space-y-4">
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">Unity Engine</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">C#</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium">HLSL</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">Unreal Engine</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Blueprint</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">C++</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">WebGL</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">GLSL</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">Vulkan API</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Data */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 lg:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                AI & Data
              </h4>
              <div className="space-y-4">
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="font-medium text-gray-800 mb-2">LangChain / LangGraph</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Python</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}