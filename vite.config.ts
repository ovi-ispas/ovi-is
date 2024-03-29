import mdx from '@mdx-js/rollup'
import { unstable_vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { remixDevTools } from 'remix-development-tools/vite'
import theme from 'tm-themes/themes/github-dark.json' assert { type: 'json' }
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
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
      // enables spa mode:
      unstable_ssr: false,
    }),
    svgr(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [[rehypePrettyCode, { theme }]],
    }),
    tsconfigPaths(),
  ],
})
