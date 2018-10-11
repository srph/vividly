/**
 * Generate google autodownload url
 */
export function getYoutubeId(url: string): string {
  return url.replace(/[A-Za-z\\\:\.\/]+\?v=/, '')
}

/**
 * Generate google autodownload url
 */
export function getYoutubeEmbedUrl(url: string): string {
  return `https://www.youtube.com/embed/${getYoutubeId(url)}`
}

/**
 * Generate google autodownload url
 */
export function getYoutubeThumbnail(url: string): string {
  return `https://img.youtube.com/vi/${getYoutubeId(url)}/sddefault.jpg`
}