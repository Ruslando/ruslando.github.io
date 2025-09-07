export const publicationsData = {
  'sample-paper': {
    id: 'sample-paper',
    title: 'Research Publications',
    authors: 'Coming Soon',
    venue: 'To Be Announced',
    year: '2025',
    abstract: `Coming soon.`,
    keywords: ['Coming Soon'],
    links: {
    },
    citations: 0,
    bibtex: ``
  }
}

export type Publication = typeof publicationsData[keyof typeof publicationsData]