export const publicationsData = {
  'sample-paper': {
    id: 'sample-paper',
    title: 'Your Research Paper Title Here',
    authors: 'Your Name, Co-Author Name',
    venue: 'Conference or Journal Name',
    year: '2024',
    abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    keywords: ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4'],
    links: {
      pdf: '#',
      code: '#',
      doi: '#'
    },
    citations: 12,
    bibtex: `@article{yourname2024sample,
  title={Your Research Paper Title Here},
  author={Your Name and Co-Author Name},
  journal={Conference or Journal Name},
  year={2024}
}`
  }
}

export type Publication = typeof publicationsData[keyof typeof publicationsData]