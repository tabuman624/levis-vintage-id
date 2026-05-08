import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // すでに /ja または /en で始まる場合はそのまま
  if (pathname.startsWith('/ja') || pathname.startsWith('/en')) {
    return NextResponse.next();
  }

  // / → /ja にリライト
  // /guide → /ja/guide にリライト
  const newPath = pathname === '/' ? '/ja' : `/ja${pathname}`;
  return NextResponse.rewrite(new URL(newPath, request.url));
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
