export type Frontmatter = {
  title: string
  description: string
  published: string // YYYY-MM-DD
  featured: boolean
  draft: boolean
}

export type PostMeta = {
  slug: string
  frontmatter: Frontmatter
}

export function getPosts() {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    '../_.posts.*/*.mdx',
    {
      eager: true,
    }
  )
  const posts = Object.entries(modules).map(([file, post]) => {
    const slug = file.match(/\.\/_\.posts\.(.+)\/route\.mdx/)?.[1]
    if (slug === undefined) throw new Error(`Error extracting slug for ${file}`)
    return {
      slug,
      frontmatter: post.frontmatter,
    }
  })

  return sortBy(posts, (post) => post.frontmatter.published, 'desc')
}

function sortBy<T>(
  arr: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: (item: T) => any,
  dir: 'asc' | 'desc' = 'asc'
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b))
    return dir === 'asc' ? res : -res
  })
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export function getFeaturedPostsFirst() {
  const posts = getPosts()
  return sortBy(posts, (post) => post.frontmatter.featured, 'desc')
}
