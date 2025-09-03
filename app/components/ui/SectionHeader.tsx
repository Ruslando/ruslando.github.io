interface SectionHeaderProps {
  children: React.ReactNode
  description?: string
}

export function SectionHeader({ children, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        <h2 className="text-2xl font-medium mb-4 text-gray-800 pl-4">
          {children}
        </h2>
        <div className="absolute -left-2 top-1 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
      </div>
      {description && (
        <p className="text-gray-600 pl-4">
          {description}
        </p>
      )}
    </div>
  )
}