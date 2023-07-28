import { CorsMiddleware } from "nextjs-edge-cors";

/**
 * Demo: Cross-origin will only be accessible from google.com. Set to "*" (or
 * remove `origin` override) to allow all origins.
 *
 * @demo
 * ```
 * await fetch("http://localhost:3000/api/cors")
 *```
 *
 * *Access to fetch at 'http://localhost:3000/api/cors' from origin
 * 'https://www.godaddy.com' has been blocked by CORS policy: The
 * 'Access-Control-Allow-Origin' header has a value 'https://www.google.com'
 * that is not equal to the supplied origin.*
 */
export const middleware = CorsMiddleware({
  origin: "https://www.google.com"
})

/**
 * Match only the /api/cors/** path for this demo.
 */
export const config = {
  matcher: ["/api/cors/:path*"]
};
