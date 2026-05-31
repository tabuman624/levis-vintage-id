'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const jaPath = pathname.startsWith('/en/')
    ? `/ja${pathname.slice(3)}`
    : pathname === '/en'
    ? '/ja'
    : pathname.startsWith('/ja')
    ? pathname
    : `/ja${pathname}`;

  const enPath = pathname.startsWith('/en')
    ? pathname
    : pathname.startsWith('/ja/')
    ? `/en${pathname.slice(3)}`
    : pathname === '/ja'
    ? '/en'
    : `/en${pathname}`;

  const homeHref = locale === 'ja' ? '/ja' : '/en';

  const navLinks = [
    { href: locale === 'ja' ? '/ja/guide'    : '/en/guide',    label: t('撮影ガイド', 'Guide') },
    { href: locale === 'ja' ? '/ja/articles' : '/en/articles', label: t('記事一覧', 'Articles') },
    { href: locale === 'ja' ? '/ja/timeline' : '/en/timeline', label: t('年表', 'Timeline') },
    { href: locale === 'ja' ? '/ja/glossary' : '/en/glossary', label: t('用語集', 'Glossary') },
    { href: locale === 'ja' ? '/ja/chart'    : '/en/chart',    label: t('判定チャート', 'Chart') },
    { href: locale === 'ja' ? '/ja/faq'      : '/en/faq',      label: 'FAQ' },
    { href: locale === 'ja' ? '/ja/about'    : '/en/about',    label: t('このサービスについて', 'About') },
    { href: locale === 'ja' ? '/ja/feed'     : '/en/feed',     label: t('フィード', 'Feed'), live: true },
  ];

  const identifyHref = locale === 'ja' ? '/ja/identify' : '/en/identify';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a2a3a]/40 backdrop-blur-xl">
      {/* メインヘッダー行 */}
      <div className="flex justify-between items-center px-6 md:px-8 py-5">
        <Link href={homeHref} className="font-playfair text-[17px] font-bold tracking-[3px] text-[#f0ebe0]">
          <span className="text-rust">LEVI&apos;S</span> VINTAGE ID.
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, label, live }) => (
            <Link key={href} href={href}
              className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase flex items-center gap-1.5">
              {live && <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse" />}
              {label}
            </Link>
          ))}
          <Link href={identifyHref}
            className="font-mono text-[10px] tracking-widest text-[#1a2a3a] bg-stitch px-4 py-2 rounded hover:bg-[#f0ebe0] transition-colors uppercase">
            {t('今すぐ鑑定', 'Identify')}
          </Link>
        </nav>

        {/* 右側: 言語切替 + ハンバーガー */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1 bg-black/20 rounded p-1">
            <Link href={jaPath}
              className={`font-mono text-xs tracking-wide px-3 py-1 rounded transition-all ${
                locale === 'ja' ? 'bg-stitch text-[#1a2a3a] font-medium' : 'text-fade hover:text-stitch'
              }`}>
              JA
            </Link>
            <Link href={enPath}
              className={`font-mono text-xs tracking-wide px-3 py-1 rounded transition-all ${
                locale === 'en' ? 'bg-stitch text-[#1a2a3a] font-medium' : 'text-fade hover:text-stitch'
              }`}>
              EN
            </Link>
          </div>

          {/* ハンバーガーボタン（モバイルのみ） */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          >
            <span className={`block h-0.5 bg-fade rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-fade rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-fade rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-6 pb-4">
          {navLinks.map(({ href, label, live }) => (
            <Link key={href} href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-fade hover:text-stitch uppercase py-3.5 border-b border-white/5 last:border-0 transition-colors">
              {live && <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse flex-shrink-0" />}
              {label}
            </Link>
          ))}
          <Link href={identifyHref}
            onClick={() => setMenuOpen(false)}
            className="block w-full mt-4 font-mono text-[11px] tracking-[3px] uppercase bg-rust text-white text-center py-3.5 rounded hover:bg-red-500 transition-colors">
            {t('今すぐ鑑定', 'Identify')}
          </Link>
        </nav>
      )}
    </header>
  );
}
