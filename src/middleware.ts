import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Check if we are on the notices subdomain (notices.unidxswnc.org or notices.localhost:3000)
  const isNoticesSubdomain = host.startsWith("notices.");

  if (isNoticesSubdomain) {
    const pathname = request.nextUrl.pathname;

    // Check if the path already has a locale prefix (e.g., "/es" or "/en")
    const hasLocale = routing.locales.some(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );

    if (hasLocale) {
      const pathParts = pathname.split("/");
      const locale = pathParts[1];
      const restOfPath = pathParts.slice(2).join("/");

      // Avoid infinite rewrite loop if it already targets /notices
      if (pathParts[2] !== "notices") {
        request.nextUrl.pathname = `/${locale}/notices${restOfPath ? `/${restOfPath}` : ""}`;
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
