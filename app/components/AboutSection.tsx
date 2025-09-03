import { SectionHeader } from './ui/SectionHeader'
import { InterestCard } from './ui/InterestCard'

export default function AboutSection() {
  return (
    <div className="space-y-8">
      {/* Biography */}
      <section>
        <SectionHeader>Biography</SectionHeader>
        <div className="prose prose-gray max-w-none pl-4">
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a software developer and researcher passionate about creating innovative solutions 
            at the intersection of technology and real-world applications. My work focuses on developing 
            scalable systems, advancing machine learning methodologies, and contributing to open-source projects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With a strong foundation in both theoretical research and practical implementation, I enjoy 
            tackling complex technical challenges and collaborating with diverse teams to bring ideas to life. 
            My research interests span distributed systems, artificial intelligence, and human-computer interaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When not coding or researching, I contribute to the tech community through writing, speaking 
            at conferences, and mentoring aspiring developers. I believe in the power of knowledge sharing 
            and open collaboration to drive innovation forward.
          </p>
        </div>
      </section>
    </div>
  )
}