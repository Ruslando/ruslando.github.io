interface PageTitleProps {
  children: React.ReactNode
  subtitle?: string
}

export function PageTitle({ children, subtitle }: PageTitleProps) {
  return (
    <div>
      <h1 className="text-5xl font-crimson font-semibold mb-4 text-gray-900 tracking-tight">
        {children}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 mb-8 font-medium tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  )
}