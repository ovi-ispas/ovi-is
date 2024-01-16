import { Link } from '@remix-run/react'

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
    </nav>
  )
}
