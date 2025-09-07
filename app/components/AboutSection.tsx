'use client'

import { SectionHeader } from './ui/SectionHeader'

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
    </div>
  )
}