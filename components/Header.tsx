'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-white/10 bg-[#1a2a3a]/40 backdrop-blur-xl">
      {/* ロゴ → ホームへ */}
      <Link href={homeHref} className="font-playfair text-[17px] font-bold tracking-[3px] text-[#f0ebe0]">
        <span className="text-rust">LEVI&apos;S</span> VINTAGE ID.
      </Link>

      <nav className="hidden md:flex gap-6 items-center">
        <Link href={locale === 'ja' ? '/ja/guide' : '/en/guide'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('撮影ガイド', 'Guide')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/articles' : '/en/articles'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('記事一覧', 'Articles')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/timeline' : '/en/timeline'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('年表', 'Timeline')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/glossary' : '/en/glossary'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('用語集', 'Glossary')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/chart' : '/en/chart'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('判定チャート', 'Chart')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/faq' : '/en/faq'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          FAQ
        </Link>
        <Link href={locale === 'ja' ? '/ja/about' : '/en/about'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase">
          {t('このサービスについて', 'About')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/feed' : '/en/feed'}
          className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse" />
          {t('フィード', 'Feed')}
        </Link>
        <Link href={locale === 'ja' ? '/ja/identify' : '/en/identify'}
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
