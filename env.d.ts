/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

declare module '*.mdx' {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let MDXComponent: (props: any) => JSX.Element
  export const frontmatter: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
  export default MDXComponent
}
