export function truncateText(text: string, maxLength: number = 200): string {
  if (text.length <= maxLength) {
    return text
  }

  // Find the last complete sentence within the limit
  const truncated = text.substring(0, maxLength)
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  )

  if (lastSentenceEnd > maxLength * 0.6) {
    // If we found a sentence end in the latter 40% of the text, use it
    return text.substring(0, lastSentenceEnd + 1).trim()
  }

  // Otherwise, find the last complete word
  const lastSpaceIndex = truncated.lastIndexOf(' ')
  if (lastSpaceIndex > 0) {
    return text.substring(0, lastSpaceIndex).trim() + '...'
  }

  // Fallback: hard truncate with ellipsis
  return truncated.trim() + '...'
}