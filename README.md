# Next.js Edge Runtime: CORS Demo

Demos [`nextjs-edge-cors`](https://github.com/SpellcraftAI/nextjs-edge-cors).
See docs for more info.

```ts
// src/middleware.ts

import { CorsMiddleware } from "nextjs-edge-cors";

export const middleware = CorsMiddleware({
  origin: "*"
})

export const config = {
  matcher: ["/api/cors/:path*"]
};
```