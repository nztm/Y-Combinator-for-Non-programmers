import locale from 'src/lib/locale'

export const baseUrl =
  locale === 'en' ? 'https://y.chibicode.com' : 'https://yj.chibicode.com'

export const episodeUrl = (number: number) => `${baseUrl}/${number}`

export const githubRepo = 'https://github.com/chibicode/yc'
