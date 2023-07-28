import { CorsMiddleware } from "nextjs-edge-cors";

/**
 * Allow requests from all origins.
 *
 * @demo
 * ```
 * await fetch("https://nextjs-edge-cors.vercel.app/api/cors")
 *```
 */
export const middleware = CorsMiddleware({
  origin: "*"
})

/**
 * Match only the /api/cors/** path for this demo.
 */
export const config = {
  matcher: ["/api/cors/:path*"]
};
