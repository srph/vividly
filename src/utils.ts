/**
 * Generate google autodownload url
 */
export function getYoutubeId(url: string): string {
  return url.replace(/[A-Za-z\\\:\.\/]+\?v=/, '')
}