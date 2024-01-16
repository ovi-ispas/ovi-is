import { Link, Outlet } from '@remix-run/react'

export default function LayoutRoute() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
    </nav>
  )
}
