'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const pathname = usePathname();

  const jaPath = pathname.startsWith('/en/')
    ? pathname.slice(3)
    : pathname === '/en'
    ? '/'
    : pathname;

  const enPath = pathname.startsWith('/en')
    ? pathname
    : pathname === '/'
    ? '/en'
    : `/en${pathname}`;

  const homeHref = locale === 'ja' ? '/' : '/en';

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-white/10 bg-[#1a2a3a]/40 backdrop-blur-xl">
      {/* ロゴ → ホームへ */}
      <Link href={homeHref} className="font-playfair text-[17px] font-bold tracking-[3px] text-[#f0ebe0]">
        <span className="text-rust">LEVI&apos;S</span> VINTAGE ID.
      </Link>

      <nav className="hidden md:flex gap-6 items-center">
        <Link href={locale === 'ja' ? '/guide' : '/en/guide'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('撮影ガイド', 'Guide')}
        </Link>
        <Link href={locale === 'ja' ? '/articles' : '/en/articles'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('記事一覧', 'Articles')}
        </Link>
        <Link href={locale === 'ja' ? '/contact' : '/en/contact'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('お問い合わせ', 'Contact')}
        </Link>
        <Link href={locale === 'ja' ? '/legal' : '/en/legal'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('法的情報', 'Legal')}
        </Link>
        <Link href={locale === 'ja' ? '/identify' : '/en/identify'}
          className="font-mono text-[10px] tracking-widest text-[#1a2a3a] bg-stitch px-4 py-2 rounded hover:bg-[#f0ebe0] transition-colors uppercase">
          {t('今すぐ鑑定', 'Identify')}
        </Link>
      </nav>

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
    </header>
  );
}
