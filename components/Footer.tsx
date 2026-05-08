import Link from 'next/link';

export default function Footer({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  const links = [
    { path: '/',          labelJa: 'トップ',       labelEn: 'Top' },
    { path: '/identify',  labelJa: 'AI鑑定',       labelEn: 'Identify' },
    { path: '/guide',     labelJa: '撮影ガイド',   labelEn: 'Guide' },
    { path: '/articles',  labelJa: '記事一覧',     labelEn: 'Articles' },
    { path: '/contact',   labelJa: 'お問い合わせ', labelEn: 'Contact' },
    { path: '/legal',     labelJa: '法的情報',     labelEn: 'Legal' },
  ];

  return (
    <footer className="relative z-10 border-t border-stitch/10 px-10 py-10">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-start gap-8">
        {/* ロゴ */}
        <Link href={p('/')} className="font-playfair text-sm font-bold tracking-widest text-[#f0ebe0]">
          <span className="text-stitch">LEVI&apos;S</span> VINTAGE ID.
        </Link>

        {/* リンク */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((item) => (
            <Link
              key={item.path}
              href={p(item.path)}
              className="font-mono text-[10px] tracking-widest text-fade hover:text-stitch transition-colors uppercase"
            >
              {t(item.labelJa, item.labelEn)}
            </Link>
          ))}
        </div>
      </div>

      {/* コピーライト */}
      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-stitch/10">
        <p className="font-mono text-[9px] text-fade/40 tracking-wide text-center leading-relaxed">
          © 2026 LEVI&apos;S VINTAGE ID. — Levi Strauss &amp; Co. とは無関係の独立サービスです<br />
          本サービスはAIによる推定情報の提供を目的としており、真贋鑑定は行っておりません。
        </p>
      </div>
    </footer>
  );
}
