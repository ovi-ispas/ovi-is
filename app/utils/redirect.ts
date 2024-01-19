import { useLocation, useNavigate, useSearchParams } from '@remix-run/react'
import { useEffect } from 'react'

export function useGithubSPARedirect() {
  const [searchParams] = useSearchParams()
  const githubRedirectPath = searchParams.get('ghp')
  const githubRedirectSearchParams = searchParams.get('ghs')
  const { hash: githubRedirectHash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (githubRedirectPath) {
      const newLocation = `${githubRedirectPath.replace(/~and~/g, '&')}${githubRedirectSearchParams ? `?${githubRedirectSearchParams?.replace(/~and~/g, '&')}` : ''}${githubRedirectHash}`
      navigate(newLocation, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- make sure to only run this once
  }, [])
}
