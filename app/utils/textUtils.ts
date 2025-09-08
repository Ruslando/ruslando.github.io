export function truncateText(text: string, maxLength: number = 200): string {
  // Remove markdown symbols first
  const cleanText = text
    .replace(/#{1,6}\s*/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/---+/g, '') // Remove horizontal rules
    .replace(/^\s*[\-\*\+]\s+/gm, '') // Remove bullet points
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered lists
    .replace(/\n\s*\n/g, ' ') // Replace double newlines with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()

  if (cleanText.length <= maxLength) {
    return cleanText
  }

  // Find the last complete sentence within the limit
  const truncated = cleanText.substring(0, maxLength)
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  )

  if (lastSentenceEnd > maxLength * 0.6) {
    // If we found a sentence end in the latter 40% of the text, use it
    return cleanText.substring(0, lastSentenceEnd + 1).trim()
  }

  // Otherwise, find the last complete word
  const lastSpaceIndex = truncated.lastIndexOf(' ')
  if (lastSpaceIndex > 0) {
    return cleanText.substring(0, lastSpaceIndex).trim() + '...'
  }

  // Fallback: hard truncate with ellipsis
  return truncated.trim() + '...'
}