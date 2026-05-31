import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import { supabaseAdmin } from '@/lib/supabase-server';

export const revalidate = 60;

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/feed` : `${BASE_URL}/en/feed`;
  return {
    title: isJa
      ? "リアルタイム鑑定フィード｜世界中のLevi's鑑定結果 | LEVI'S VINTAGE ID."
      : "Live Identification Feed — Vintage Levi's Identified Worldwide | LEVI'S VINTAGE ID.",
    description: isJa
      ? "世界中のユーザーがAI鑑定したヴィンテージLevi'sのリアルタイムフィード。モデル・年代・信頼度・製造国を一覧表示。"
      : "Real-time feed of vintage Levi's identified by users around the world. Showing model, era, confidence level, and country of manufacture.",
    openGraph: {
      title: isJa
        ? "リアルタイム鑑定フィード | LEVI'S VINTAGE ID."
        : "Live Identification Feed | LEVI'S VINTAGE ID.",
      description: isJa
        ? "世界中のユーザーがAI鑑定したヴィンテージLevi'sのリアルタイムフィード。"
        : "Real-time feed of vintage Levi's identified by users worldwide.",
      url,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/feed`,
        'en': `${BASE_URL}/en/feed`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

const COUNTRY_FLAGS: Record<string, string> = {
  'USA': '🇺🇸', 'Japan': '🇯🇵', 'Mexico': '🇲🇽',
  'Belgium': '🇧🇪', 'France': '🇫🇷', 'Bangladesh': '🇧🇩',
  'Cambodia': '🇰🇭', 'Vietnam': '🇻🇳', 'Sri Lanka': '🇱🇰',
};

function timeAgo(dateStr: string, locale: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (locale === 'ja') {
    if (mins < 1) return 'たった今';
    if (mins < 60) return `${mins}分前`;
    if (hours < 24) return `${hours}時間前`;
    return `${days}日前`;
  }
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export default async function FeedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;

  const { data: items } = await supabaseAdmin
    .from('identifications')
    .select('id, created_at, era, model, model_normalized, country, confidence, rarity, locale')
    .order('created_at', { ascending: false })
    .limit(30);

  const confidenceStyle = (c: string) =>
    c === 'HIGH' ? 'text-green-400 bg-green-500/10 border-green-500/30' :
    c === 'MID'  ? 'text-stitch bg-stitch/10 border-stitch/30' :
                   'text-fade/60 bg-white/5 border-white/10';

  return (
    <>
      <Header locale={locale} />
      <StitchLine />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

        {/* ヘッダー */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-mono text-[9px] tracking-[4px] text-stitch/80 uppercase">
              {t('最新鑑定フィード', 'Live Identification Feed')}
            </p>
            <span className="flex items-center gap-1.5 font-mono text-[8px] tracking-[2px] text-rust uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse" />
              LIVE
            </span>
          </div>
          <h1 className="font-playfair font-bold text-[#f0ebe0] mb-3" style={{fontSize:'clamp(24px,4vw,40px)'}}>
            {t('世界中で鑑定されている', 'Identified Around')}<br />
            <span className="text-stitch">{t('Levi\'s リアルタイム', 'the World Right Now')}</span>
          </h1>
          <p className="text-sm text-fade/70 font-light">
            {t(
              '世界中のユーザーが鑑定したヴィンテージLevi\'sをリアルタイムで表示しています。',
              'Real-time feed of vintage Levi\'s identified by users around the world.'
            )}
          </p>
        </div>

        {/* フィード */}
        {!items || items.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-stitch/20 rounded-xl">
            <p className="font-mono text-[10px] tracking-[3px] text-stitch/40 uppercase mb-3">
              {t('データ収集中...', 'Collecting data...')}
            </p>
            <p className="text-sm text-fade/50 font-light mb-6">
              {t('最初の鑑定結果がここに表示されます', 'The first identification results will appear here')}
            </p>
            <Link href={locale === 'ja' ? '/identify' : '/en/identify'}
              className="font-mono text-[10px] tracking-[3px] uppercase bg-rust text-white px-6 py-3 rounded transition-colors hover:bg-red-500">
              {t('最初に鑑定する', 'Be the First to Identify')}
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id}
                className="flex items-center gap-4 bg-[#1a2a3a]/30 border border-stitch/10 rounded-lg px-5 py-4 hover:border-stitch/25 transition-colors">

                {/* モデル */}
                <div className="shrink-0 w-14 text-center">
                  <div className="font-playfair font-bold text-stitch text-lg leading-none">
                    {item.model_normalized !== 'unknown' ? item.model_normalized : '—'}
                  </div>
                  <div className="font-mono text-[7px] text-fade/40 uppercase mt-0.5">model</div>
                </div>

                {/* 詳細 */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#f0ebe0]/80 font-light truncate">{item.era}</p>
                  {item.rarity && (
                    <p className="font-mono text-[8px] text-stitch/60 truncate mt-0.5">{item.rarity}</p>
                  )}
                </div>

                {/* 国 */}
                <div className="shrink-0 text-center">
                  <div className="text-lg">{COUNTRY_FLAGS[item.country] ?? '🌐'}</div>
                  <div className="font-mono text-[7px] text-fade/40 mt-0.5">{item.country ?? '—'}</div>
                </div>

                {/* 信頼度 */}
                <div className={`shrink-0 font-mono text-[8px] tracking-[1px] border rounded-full px-2 py-0.5 ${confidenceStyle(item.confidence)}`}>
                  {item.confidence}
                </div>

                {/* 時刻 */}
                <div className="shrink-0 font-mono text-[8px] text-fade/40 text-right w-14">
                  {timeAgo(item.created_at, locale)}
                </div>
              </div>
            ))}
          </div>
        )}

        <StitchLine />

        {/* CTA */}
        <div className="text-center py-8">
          <p className="font-mono text-[9px] tracking-[3px] text-stitch/60 uppercase mb-4">
            {t('あなたのLevi\'sを鑑定する', 'Identify Your Levi\'s')}
          </p>
          <Link href={locale === 'ja' ? '/identify' : '/en/identify'}
            className="font-mono text-[11px] tracking-[3px] uppercase bg-rust text-white px-8 py-4 rounded transition-colors hover:bg-red-500">
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>

      </div>
      <Footer locale={locale} />
    </>
  );
}
