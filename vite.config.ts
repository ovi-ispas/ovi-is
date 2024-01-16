import mdx from '@mdx-js/rollup'
import { unstable_vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { remixDevTools } from 'remix-development-tools/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    remixDevTools(),
    remix({
      ignoredRouteFiles: ['**/.*'],
      // enable spa mode
      unstable_ssr: false,
    }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypePrettyCode],
    }),
    tsconfigPaths(),
  ],
})
