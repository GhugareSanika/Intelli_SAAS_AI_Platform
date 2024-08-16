import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard'
])
export default clerkMiddleware((auth, req) =>{
  if(isProtectedRoute(req)){
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Match all routes except those that should be skipped
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

