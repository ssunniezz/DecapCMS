import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware executing...')
  
  const path = request.nextUrl.pathname
  console.log('Path:', path)

  if (path === '/admin') {
    console.log('Redirecting to admin/index.html')
    return NextResponse.redirect(new URL('/admin/index.html', request.url))
  }

  return NextResponse.next()
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: '/admin'
}
