interface InterestCardProps {
  title: string
  description: string
}

export function InterestCard({ title, description }: InterestCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100/50 transition-all duration-200">
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  )
}