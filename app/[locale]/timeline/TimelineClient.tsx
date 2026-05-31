'use client';
import Link from 'next/link';
import { useState } from 'react';

type ItemType = 'jeans' | 'jacket';

type Milestone = {
  year: number;
  labelJa: string;
  labelEn: string;
  descJa: string;
  descEn: string;
  type: 'founding' | 'product' | 'detail' | 'law' | 'end';
  item?: 'jeans' | 'jacket'; // undefined = appears in both tabs
  articleSlug?: string;
  articleLabelJa?: string;
  articleLabelEn?: string;
};

const TIMELINE: Milestone[] = [
  {
    year: 1853,
    labelJa: 'リーバイ・ストラウス、サンフランシスコへ移住',
    labelEn: 'Levi Strauss Moves to San Francisco',
    descJa: 'バイエルン出身のユダヤ系移民リーバイ・ストラウスがゴールドラッシュに沸くサンフランシスコへ移住。ドライグッズの卸売業を開始する。',
    descEn: 'Bavarian Jewish immigrant Levi Strauss moves to Gold Rush-era San Francisco and begins a dry goods wholesale business.',
    type: 'founding',
  },
  {
    year: 1873,
    labelJa: 'リベット付きジーンズ特許取得・世界初のジーンズ工場設立',
    labelEn: 'Riveted Jeans Patent Granted — World\'s First Jeans Factory',
    descJa: '仕立て職人ジェイコブ・デービスと共同でリベット付きジーンズ（US特許139,121号）を取得。バレンシア・ストリートに世界初のジーンズ工場を設立。ボタン刻印1番（Valencia Street）はこの発祥地を示す。',
    descEn: 'US Patent No. 139,121 for riveted jeans granted jointly with tailor Jacob Davis. The world\'s first jeans factory established on Valencia Street. Button stamp "1" (Valencia Street) identifies this birthplace.',
    type: 'founding',
    articleSlug: 'article-sf-factory',
    articleLabelJa: 'SF工場希少性ガイド',
    articleLabelEn: 'SF Factory Rarity Guide',
  },
  {
    year: 1890,
    labelJa: '品番501が正式付番',
    labelEn: 'Model Number 501 Officially Assigned',
    descJa: 'リーバイスの代表モデルに「501」という品番が正式に付与される。それ以前は品番管理が異なっていた。',
    descEn: 'The model number "501" is officially assigned to Levi\'s flagship model, replacing an earlier numbering system.',
    type: 'product',
    item: 'jeans',
  },
  {
    year: 1922,
    labelJa: 'ベルトループ追加（シンチバックとの併用期）',
    labelEn: 'Belt Loops Added (Coexisting with Cinch Back)',
    descJa: '需要の変化に応じてベルトループが追加される。1937年頃まではシンチバック（ウエスト調整用バックル）との両方が付いた過渡期の仕様が存在した。',
    descEn: 'Belt loops added in response to changing demand. Until around 1937, a transitional specification with both belt loops and cinch back (waist adjustment buckle) existed.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-rivet',
    articleLabelJa: 'リベット・ハードウェアガイド',
    articleLabelEn: 'Rivet & Hardware Guide',
  },
  {
    year: 1934,
    labelJa: '701（初のレディースモデル）誕生',
    labelEn: 'Model 701 — First Women\'s Jean Debuts',
    descJa: 'リーバイス初のレディース向けジーンズ701が誕生。「Student Fit（学生フィット）」のタグが特徴。501よりスリムなシルエットで、現在の721・724など700番台レディースシリーズの原点。',
    descEn: 'Levi\'s first women\'s jean — the 701 — debuts with the "Student Fit" label. Slimmer than the 501, it is the origin of today\'s 700-series women\'s line (721, 724, etc.).',
    type: 'product',
    item: 'jeans',
    articleSlug: 'article-701',
    articleLabelJa: '701完全ガイド',
    articleLabelEn: '701 Complete Guide',
  },
  {
    year: 1936,
    labelJa: '赤タブ導入・506XX（Type Ⅰジャケット）誕生',
    labelEn: 'Red Tab Introduced — 506XX (Type I Jacket) Born',
    descJa: 'バックポケットに赤い布製タブ「Red Tab」が商標として導入される（両面大文字「LEVIS」＝Big E仕様の始まり）。同年、初のデニムジャケット506XX（Type Ⅰ）も誕生。単胸ポケット・シンチバックが特徴の最初期ジャケットで、現存数は極めて少ない。',
    descEn: 'The red fabric "Red Tab" trademark is introduced on back pockets — both sides uppercase "LEVIS" marks the beginning of the Big E specification. The first denim jacket, 506XX (Type I), also debuts. Single chest pocket and cinch back are hallmarks; surviving examples are exceedingly rare.',
    type: 'detail',
    articleSlug: 'article-red-tab',
    articleLabelJa: '赤タブ完全ガイド',
    articleLabelEn: 'Red Tab Complete Guide',
  },
  {
    year: 1937,
    labelJa: 'クロッチリベット廃止・バックポケット隠しリベット導入',
    labelEn: 'Crotch Rivet Removed — Hidden Back Pocket Rivets Added',
    descJa: '股部分のクロッチリベット廃止。バックポケットのリベットが外側に露出したものから隠しリベット（Concealed Rivet）に変更。シンチバックも廃止へ。',
    descEn: 'Crotch rivet eliminated. Back pocket rivets change from exposed to hidden (concealed rivets). Cinch back begins phase-out.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-rivet',
    articleLabelJa: 'リベット・ハードウェアガイド',
    articleLabelEn: 'Rivet & Hardware Guide',
  },
  {
    year: 1942,
    labelJa: 'WWII期 S501XX（簡略化モデル）登場',
    labelEn: 'WWII Era S501XX (Simplified Model) Appears',
    descJa: '第二次世界大戦の金属節約令によりアルキュエートステッチが縫製からオレンジペイントに変更（S＝Simplified）。クロッチリベット・コインポケットリベットも省略。現在ペイントはほぼ剥落しており超希少品。',
    descEn: 'WWII metal conservation orders change arcuate from stitching to orange paint (S=Simplified). Crotch and coin pocket rivets also eliminated. Paint is now almost entirely worn off — an ultra-rare piece.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-501xx',
    articleLabelJa: '501XX完全ガイド',
    articleLabelEn: '501XX Complete Guide',
  },
  {
    year: 1947,
    labelJa: 'シンチバック完全廃止・戦前仕様の復活',
    labelEn: 'Cinch Back Fully Eliminated — Pre-War Specs Return',
    descJa: 'シンチバックが完全廃止され、アルキュエートが縫製に戻る。本革パッチ・Big Eタブ・セルビッジの「Post-war 501XX」期が始まる。',
    descEn: 'Cinch back fully eliminated and arcuate returns to stitching. The "Post-war 501XX" era begins — leather patch, Big E tab, and selvedge.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-501xx',
    articleLabelJa: '501XX完全ガイド',
    articleLabelEn: '501XX Complete Guide',
  },
  {
    year: 1953,
    labelJa: '507XX（Type Ⅱジャケット）誕生',
    labelEn: '507XX (Type II Jacket) Debuts',
    descJa: '506XXの後継モデルとして507XX（Type Ⅱ）が登場。胸ポケットが2つになり、ウエスト部にアコーディオン状のダブルプリーツが追加。1962年まで製造された希少モデル。Big Eタブ＋TALONジッパー＋プリーツの組み合わせが真贋確認の基本。',
    descEn: '507XX (Type II) debuts as the 506XX\'s successor. Two chest pockets and accordion-style double waist pleats added. Produced until 1962 — a rare model. Big E tab + TALON zipper + waist pleats is the baseline authenticity check.',
    type: 'product',
    item: 'jacket',
    articleSlug: 'article-jacket-types',
    articleLabelJa: 'ジャケット完全ガイド',
    articleLabelEn: 'Jacket Complete Guide',
  },
  {
    year: 1954,
    labelJa: '本革パッチ→Jacron（革風ボール紙）に変更',
    labelEn: 'Leather Patch → Jacron (Leather-Look Cardboard)',
    descJa: 'バックパッチの素材が本物の動物皮革からJacron（革風ボール紙）に変更。これ以降の本革パッチ主張はLVCの復刻品か改造品の可能性が高い。本革パッチ＝1954年以前の重要な指標。',
    descEn: 'Back patch material changes from genuine leather to Jacron (leather-look cardboard). Post-1954 leather patch claims likely indicate LVC reproduction or alteration. Leather patch = important pre-1954 indicator.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-patch',
    articleLabelJa: 'パッチ完全ガイド',
    articleLabelEn: 'Patch Complete Guide',
  },
  {
    year: 1962,
    labelJa: '「Every Garment Guaranteed」廃止・557XX（Type Ⅲジャケット）誕生',
    labelEn: '"Every Garment Guaranteed" Removed — 557XX Trucker Jacket Born',
    descJa: 'JacronパッチのEGGスローガンが廃止。同年、557XX（トラッカージャケット・Type Ⅲ）が誕生し、現在まで継続生産されている。プリーツなし・フラットヘムの現代的トラッカースタイルの原点。Big E期（〜1971年）の品番は「70557XX」。',
    descEn: '"Every Garment Guaranteed" slogan removed from Jacron patches. The 557XX Trucker Jacket (Type III) debuts and continues to the present — the origin of the modern flat-hem trucker style. Big E era (pre-1971) examples carry the "70557XX" number.',
    type: 'product',
    articleSlug: 'article-jacket-types',
    articleLabelJa: 'ジャケット完全ガイド',
    articleLabelEn: 'Jacket Complete Guide',
  },
  {
    year: 1964,
    labelJa: 'バックポケット隠しリベット廃止→バータック留めへ',
    labelEn: 'Hidden Back Pocket Rivets → Bartack Closure',
    descJa: 'バックポケット口の隠しリベットが廃止され、バータック（かんどめ縫い）に変更。1964〜1966年頃の移行期には両者が混在する場合がある。',
    descEn: 'Hidden back pocket rivets eliminated, replaced by bartack stitching. Both may coexist during the 1964–1966 transition period.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-rivet',
    articleLabelJa: 'リベット・ハードウェアガイド',
    articleLabelEn: 'Rivet & Hardware Guide',
  },
  {
    year: 1967,
    labelJa: '505（ジッパーフライ）誕生',
    labelEn: '505 (Zipper Fly) Debuts',
    descJa: 'ジッパーフライ採用の505が1967年に発売。Big E期（1967〜1971年）の品番は「70505」。TALONジッパー＋Big Eタブ＋ケアラベルなし＋セルビッジが揃う個体が最高評価。',
    descEn: 'The zipper-fly 505 launches in 1967. Big E era (1967–1971) examples carry the "70505" number. TALON zipper + Big E tab + no care label + selvedge commands top collector premiums.',
    type: 'product',
    item: 'jeans',
    articleSlug: 'article-505',
    articleLabelJa: '505完全ガイド',
    articleLabelEn: '505 Complete Guide',
  },
  {
    year: 1969,
    labelJa: 'オレンジタブライン誕生・Vステッチ廃止',
    labelEn: 'Orange Tab Line Debuts — V-Stitch Eliminated',
    descJa: '廉価ラインのオレンジタブが1969年に登場。同年、ボタンフライ縁のVステッチが廃止される。Vステッチあり＝1969年以前の指標。Big E期オレンジタブ（1969〜1971年）は超希少。',
    descEn: 'The budget-line orange tab debuts in 1969. The V-stitch on the button fly edge is also eliminated. V-stitch present = pre-1969 indicator. Big E era orange tab (1969–1971) is ultra-rare.',
    type: 'product',
    item: 'jeans',
    articleSlug: 'article-1960s',
    articleLabelJa: '1960年代完全ガイド',
    articleLabelEn: '1960s Complete Guide',
  },
  {
    year: 1971,
    labelJa: 'Big E終了・ケアラベル義務化・YKK採用',
    labelEn: 'Big E Ends — Care Labels Mandatory — YKK Adopted',
    descJa: '【最重要転換点】1971年7月：FTCのCare Labeling Ruleによりケアラベルが義務化。赤タブが両面大文字（Big E）から片面小文字（Small e）に変更。YKKジッパーへの移行が進む。ジャケット（557XX）も同様に影響を受け、Big Eタブ＋ケアラベルなし＋TALONジッパーの557XXがジャケット鑑定の最高峰となる。この年が鑑定の最大の分岐点。',
    descEn: '[MOST CRITICAL TURNING POINT] July 1971: FTC Care Labeling Rule makes care labels mandatory. Red tab changes from both-sides uppercase Big E to one-side lowercase Small e. YKK zipper adoption accelerates. The 557XX trucker jacket is equally affected — Big E tab + no care label + TALON zipper marks the pinnacle of jacket collecting. This year is the single biggest dating dividing line.',
    type: 'law',
    articleSlug: 'article-big-e-value',
    articleLabelJa: 'Big E価値ガイド',
    articleLabelEn: 'Big E Value Guide',
  },
  {
    year: 1973,
    labelJa: 'ケアラベル多言語化（英語＋スペイン語）',
    labelEn: 'Care Labels Become Multilingual (English + Spanish)',
    descJa: 'ケアラベルが英語のみ表記から英語＋スペイン語等の多言語表記に変更。英語のみケアラベル＝1971〜1973年頃の目安。多言語＝1973年以降の目安として使える。',
    descEn: 'Care labels change from English-only to multilingual (English + Spanish, etc.). English-only care label = c.1971–1973 indicator. Multilingual = c.1973+ indicator.',
    type: 'law',
    articleSlug: 'article-care-label',
    articleLabelJa: 'ケアラベル判定ガイド',
    articleLabelEn: 'Care Label Dating Guide',
  },
  {
    year: 1981,
    labelJa: 'セルビッジデニム廃止・ジャケットにサイドポケット追加',
    labelEn: 'Selvedge Denim Discontinued — Side Pockets Added to Trucker Jacket',
    descJa: 'シャトル織機からロータリー織機への完全移行により、耳付きセルビッジデニムが廃止。セルビッジあり＝1981年以前の確定指標。1981〜1984年はアウトシームがオレンジ色のオーバーロック。ジャケット（557XX系）はこの頃にサイドハンドポケットが追加され、サイドポケットの有無が1981年前後を判別する確定指標となる。',
    descEn: 'Full transition from shuttle to rotary looms discontinues selvedge denim. Selvedge present = confirmed pre-1981. Outseam overlock is orange from 1981–1984. For the 557XX trucker jacket, side hand pockets were added around this time — side pocket presence confirms post-1981 manufacture.',
    type: 'detail',
    articleSlug: 'article-selvedge',
    articleLabelJa: 'セルビッジ完全ガイド',
    articleLabelEn: 'Selvedge Complete Guide',
  },
  {
    year: 1984,
    labelJa: 'ケアラベルに3桁日付コード導入',
    labelEn: '3-Digit Date Codes Added to Care Labels',
    descJa: 'ケアラベルへの3桁日付コード（例：127＝1987年12月）の記載が始まる。日付コードがあれば±1年の精度で製造年月を特定できる最強の年代指標のひとつ。',
    descEn: '3-digit date codes (e.g., "127" = December 1987) begin appearing on care labels. When readable, date codes are among the strongest era indicators, enabling ±1 year manufacturing date precision.',
    type: 'detail',
    articleSlug: 'article-care-label',
    articleLabelJa: 'ケアラベル判定ガイド',
    articleLabelEn: 'Care Label Dating Guide',
  },
  {
    year: 1985,
    labelJa: 'アウトシームオーバーロック：オレンジ→白に変更',
    labelEn: 'Outseam Overlock: Orange → White',
    descJa: '1981〜1984年のオレンジ色オーバーロックから白色に変更。白色オーバーロック＝1985〜1993年の目安。オーバーロック色は非セルビッジモデルの重要年代指標。',
    descEn: 'Outseam overlock changes from the 1981–1984 orange to white. White overlock = c.1985–1993 indicator. Overlock color is an important era indicator for non-selvedge models.',
    type: 'detail',
    item: 'jeans',
    articleSlug: 'article-selvedge',
    articleLabelJa: 'セルビッジ・オーバーロックガイド',
    articleLabelEn: 'Selvedge & Overlock Guide',
  },
  {
    year: 1986,
    labelJa: 'バットウィングロゴ入りケアラベル登場',
    labelEn: 'Batwing Logo Care Label Introduced',
    descJa: 'こうもり型（バットウィング）ロゴがケアラベルに印刷されるようになる。バットウィングロゴあり＝1986年以降確定。「Care on Reverse」表記も同時に追加され、この両方が揃うと1986〜1992年と絞り込める。',
    descEn: 'The batwing-shaped logo begins appearing on care labels. Batwing logo present = confirmed post-1986. "Care on Reverse" notation also added — both together narrow the era to 1986–1992.',
    type: 'detail',
    articleSlug: 'article-care-label',
    articleLabelJa: 'ケアラベル判定ガイド',
    articleLabelEn: 'Care Label Dating Guide',
  },
  {
    year: 1993,
    labelJa: '日付コードが3桁→4桁に変更',
    labelEn: 'Date Codes Change from 3-Digit to 4-Digit',
    descJa: 'ケアラベルの日付コードが3桁（例：127）から4桁（例：1295＝1995年12月）に変更。4桁コード＝1993年以降の製品を示す。',
    descEn: 'Care label date codes change from 3-digit (e.g., "127") to 4-digit (e.g., "1295" = December 1995). 4-digit code = post-1993 product.',
    type: 'detail',
    articleSlug: 'article-care-label',
    articleLabelJa: 'ケアラベル判定ガイド',
    articleLabelEn: 'Care Label Dating Guide',
  },
  {
    year: 2002,
    labelJa: 'バレンシア工場閉鎖・Made in USA終了',
    labelEn: 'Valencia Factory Closes — End of Made in USA',
    descJa: 'サンフランシスコのバレンシア・ストリート工場（1873年創業の発祥地）が閉鎖され、リーバイスのアメリカ国内製造が終了。ケアラベルに「MADE IN USA」があれば2002年以前確定。',
    descEn: 'The Valencia Street factory in San Francisco — the 1873 birthplace — closes, ending Levi\'s American domestic manufacturing. "MADE IN USA" on the care label confirms pre-2002.',
    type: 'end',
    articleSlug: 'article-sf-factory',
    articleLabelJa: 'SF工場希少性ガイド',
    articleLabelEn: 'SF Factory Rarity Guide',
  },
];

const TYPE_COLOR: Record<Milestone['type'], string> = {
  founding: '#c0392b',
  product:  '#e8d5a3',
  detail:   '#b8cce4',
  law:      '#f39c12',
  end:      '#7f8c8d',
};

const TYPE_LABEL_JA: Record<Milestone['type'], string> = {
  founding: '創業',
  product:  '新製品',
  detail:   '仕様変更',
  law:      '法律・制度',
  end:      '終焉',
};
const TYPE_LABEL_EN: Record<Milestone['type'], string> = {
  founding: 'Founding',
  product:  'New Product',
  detail:   'Spec Change',
  law:      'Law / Policy',
  end:      'End of Era',
};

const DECADES = [
  { label: '1850s–1890s', start: 1850, end: 1899 },
  { label: '1900s–1930s', start: 1900, end: 1939 },
  { label: '1940s–1950s', start: 1940, end: 1959 },
  { label: '1960s',       start: 1960, end: 1969 },
  { label: '1970s',       start: 1970, end: 1979 },
  { label: '1980s–2000s', start: 1980, end: 2099 },
];

export default function TimelineClient({ locale }: { locale: string }) {
  const [activeTab, setActiveTab] = useState<ItemType>('jeans');
  const isJa = locale === 'ja';
  const t = (ja: string, en: string) => isJa ? ja : en;
  const p = (path: string) => isJa ? path : `/en${path}`;

  const filtered = TIMELINE.filter(m => !m.item || m.item === activeTab);

  return (
    <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav style={{ display: 'flex', gap: '8px', marginBottom: '32px', fontFamily: 'DM Mono,monospace', fontSize: '10px', color: '#b8cce4' }}>
        <Link href={p('/')} style={{ color: '#b8cce4', textDecoration: 'none' }}>TOP</Link>
        <span style={{ opacity: 0.4 }}>/</span>
        <span style={{ opacity: 0.7 }}>{t('タイムライン', 'Timeline')}</span>
      </nav>

      <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
        {t('歴史年表', 'Historical Timeline')}
      </p>
      <h1 className="font-playfair font-bold text-[#f0ebe0] mb-4" style={{ fontSize: 'clamp(26px,5vw,42px)' }}>
        {t("Levi'sの変遷", "Levi's Through the Decades")}
        <span className="block text-stitch font-mono text-base tracking-widest mt-2">1873 — 2002</span>
      </h1>
      <p className="text-sm text-[#b8cce4] font-light leading-loose mb-8">
        {t(
          '創業から「Made in USA」終了まで。鑑定に直結する仕様変更を時系列で解説。',
          'From founding to the end of Made in USA — spec changes that directly affect vintage identification, in chronological order.'
        )}
      </p>

      {/* ── タブ ── */}
      <div className="flex border-b border-white/10 mb-10">
        {(['jeans', 'jacket'] as ItemType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-3 font-mono text-[11px] tracking-widest uppercase transition-colors ${
              activeTab === tab ? 'text-[#f0ebe0]' : 'text-[#f0ebe0]/40 hover:text-[#f0ebe0]/70'
            }`}
          >
            {tab === 'jeans'
              ? t('ジーンズ', 'Jeans')
              : t('ジャケット', 'Jacket')}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stitch rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap gap-3 mb-12">
        {(['founding', 'product', 'detail', 'law', 'end'] as Milestone['type'][]).map(type => (
          <span key={type} className="flex items-center gap-2 font-mono text-[9px] tracking-wide text-[#f0ebe0]/70">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: TYPE_COLOR[type], flexShrink: 0, display: 'inline-block' }} />
            {isJa ? TYPE_LABEL_JA[type] : TYPE_LABEL_EN[type]}
          </span>
        ))}
      </div>

      {/* タイムライン本体 */}
      {DECADES.map(decade => {
        const items = filtered.filter(m => m.year >= decade.start && m.year <= decade.end);
        if (items.length === 0) return null;
        return (
          <div key={decade.label} className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[4px] text-stitch uppercase whitespace-nowrap">
                {decade.label}
              </span>
              <div className="flex-1 border-t border-stitch/20" />
            </div>

            <div className="relative">
              <div style={{ position: 'absolute', left: 15, top: 0, bottom: 0, width: 1, background: 'rgba(184,204,228,0.15)' }} />

              <div className="space-y-8">
                {items.map((m, i) => (
                  <div key={i} className="flex gap-6">
                    <div style={{ flexShrink: 0, width: 31, paddingTop: 4 }}>
                      <div style={{
                        width: 14, height: 14, borderRadius: '50%',
                        background: TYPE_COLOR[m.type],
                        border: '2px solid rgba(26,42,58,1)',
                        boxShadow: `0 0 0 2px ${TYPE_COLOR[m.type]}40`,
                        marginLeft: 8,
                      }} />
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex items-start gap-3 mb-2 flex-wrap">
                        <span className="font-playfair font-bold text-[#e8d5a3] text-lg leading-none">
                          {m.year}
                        </span>
                        <span style={{
                          fontFamily: 'DM Mono,monospace', fontSize: '8px', letterSpacing: '2px',
                          color: '#1a2a3a', background: TYPE_COLOR[m.type],
                          padding: '2px 8px', borderRadius: '2px', marginTop: 2, textTransform: 'uppercase',
                          flexShrink: 0,
                        }}>
                          {isJa ? TYPE_LABEL_JA[m.type] : TYPE_LABEL_EN[m.type]}
                        </span>
                      </div>
                      <p className="font-medium text-[#f0ebe0] text-sm mb-2 leading-snug">
                        {isJa ? m.labelJa : m.labelEn}
                      </p>
                      <p className="text-[13px] text-[#f0ebe0]/70 font-light leading-relaxed mb-3">
                        {isJa ? m.descJa : m.descEn}
                      </p>
                      {m.articleSlug && (
                        <Link
                          href={p(`/articles/${m.articleSlug}`)}
                          style={{
                            fontFamily: 'DM Mono,monospace', fontSize: '9px', letterSpacing: '2px',
                            textTransform: 'uppercase', color: '#b8cce4', textDecoration: 'none',
                            border: '1px solid rgba(184,204,228,0.25)', borderRadius: '3px',
                            padding: '5px 12px', display: 'inline-block',
                          }}
                        >
                          → {isJa ? m.articleLabelJa : m.articleLabelEn}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div className="stitch-line my-10" />

      {/* 関連ページ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { href: p('/glossary'), ja: '用語集', en: 'Glossary', desc: { ja: '鑑定用語を28語解説', en: '28 terms explained' } },
          { href: p('/articles'), ja: '記事一覧', en: 'Articles', desc: { ja: '各ポイントの詳細ガイド', en: 'Detailed identification guides' } },
          { href: p('/guide'),    ja: '撮影ガイド', en: 'Photo Guide', desc: { ja: '鑑定精度が上がる撮影法', en: 'How to photograph for best results' } },
        ].map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="card-denim p-5 text-center no-underline block hover:border-stitch/40 transition-colors"
          >
            <p className="font-mono text-[9px] tracking-[3px] text-stitch uppercase mb-2">
              {t(item.ja, item.en)}
            </p>
            <p className="text-xs text-[#f0ebe0]/70 font-light">
              {t(item.desc.ja, item.desc.en)}
            </p>
          </Link>
        ))}
      </div>

      <div className="card-denim p-8 text-center">
        <p className="text-sm text-[#b8cce4] font-light mb-6 leading-loose">
          {t(
            '歴史を知ったら、あなたのLevi\'sをAIで鑑定してみましょう。',
            "Now that you know the history, let the AI identify your Levi's."
          )}
        </p>
        <Link href={p('/identify')} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
          {t('無料でAI鑑定する', 'Identify for Free')}
        </Link>
      </div>
    </div>
  );
}
