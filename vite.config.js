import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const appRoutes = ['/experience', '/about', '/apps', '/blog', '/certifications', '/coding', '/learning', '/publications', '/resume']

function preserveSpaRoutes() {
  const rewriteAppRoute = (server) => {
    server.middlewares.use((request, _response, next) => {
      const pathname = new URL(request.url || '/', 'http://localhost').pathname
      const isAppRoute = appRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))
      if (request.method === 'GET' && request.headers.accept?.includes('text/html') && isAppRoute) {
        request.url = '/'
      }
      next()
    })
  }

  return {
    name: 'preserve-spa-routes',
    configureServer: rewriteAppRoute,
    configurePreviewServer: rewriteAppRoute,
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [preserveSpaRoutes(), react()],
})
