import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/chart` : `${BASE_URL}/en/chart`;

  const title = isJa
    ? '年代判定チャート＆比較表 | ヴィンテージリーバイスの年代を見分ける'
    : 'Vintage Levi\'s Dating Chart & Comparison Tables';
  const desc = isJa
    ? 'ヴィンテージリーバイスの年代をステップ式で判定できるフローチャートと、年代別・型番別の仕様比較表。Big E、ケアラベル、ジッパーブランドなど主要な判定ポイントを網羅。'
    : 'Step-by-step flowchart and comparison tables for dating vintage Levi\'s. Covers Big E, care labels, zipper brands, selvedge, and more.';

  return {
    title: `${title} | LEVI'S VINTAGE ID.`,
    description: desc,
    keywords: isJa
      ? ['年代判定', 'ヴィンテージリーバイス', 'フローチャート', 'Big E', 'ケアラベル', 'セルビッジ', '比較表', '501', '年代早見表']
      : ['vintage levis dating', 'flowchart', 'Big E', 'care label', 'selvedge', 'comparison chart', '501'],
    openGraph: {
      title: `${title} | LEVI'S VINTAGE ID.`,
      description: desc,
      url,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'article',
    },
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/chart`,
        'en': `${BASE_URL}/en/chart`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function ChartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;
  const isJa = locale === 'ja';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isJa
      ? '年代判定チャート＆比較表 | ヴィンテージリーバイスの年代を見分ける'
      : 'Vintage Levi\'s Dating Chart & Comparison Tables',
    description: isJa
      ? 'ヴィンテージリーバイスの年代をステップ式で判定できるフローチャートと、年代別・型番別の仕様比較表。'
      : 'Step-by-step flowchart and comparison tables for dating vintage Levi\'s.',
    url: isJa ? `${BASE_URL}/chart` : `${BASE_URL}/en/chart`,
    datePublished: '2026-05-24',
    dateModified: '2026-05-24',
    inLanguage: isJa ? 'ja' : 'en',
    author: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: BASE_URL },
    publisher: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: BASE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <StitchLine />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* パンくず */}
        <nav style={{ display: 'flex', gap: '8px', marginBottom: '32px', fontFamily: 'DM Mono,monospace', fontSize: '10px', color: '#b8cce4' }}>
          <Link href={p('/')} style={{ color: '#b8cce4', textDecoration: 'none' }}>TOP</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ opacity: 0.7 }}>{t('年代判定チャート', 'Dating Chart')}</span>
        </nav>

        {/* ページタイトル */}
        <div style={{ marginBottom: '56px' }}>
          <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '9px', letterSpacing: '3px', color: '#e8d5a3', textTransform: 'uppercase', marginBottom: '12px' }}>
            {t('判定ツール', 'Dating Tools')}
          </p>
          <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: 'clamp(26px,4.5vw,42px)', fontWeight: 'bold', color: '#f0ebe0', lineHeight: 1.2, marginBottom: '16px' }}>
            {t('年代判定チャート＆比較表', 'Vintage Dating Chart & Tables')}
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(240,235,224,0.75)', lineHeight: 2, fontWeight: 300 }}>
            {t(
              '赤タブ・ケアラベル・ジッパーブランドなど主要なディテールを順番にチェックするだけで、ヴィンテージリーバイスのおおよその製造年代が分かります。フローチャートで大まかな時代を絞り込んだあと、比較表で詳細を確認してください。',
              'Check key details — red tab, care label, zipper brand — step by step to narrow down the production era of your vintage Levi\'s. Use the flowchart to identify the rough period, then consult the comparison tables for specifics.'
            )}
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 1: フローチャート
        ═══════════════════════════════════════════ */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '26px', fontWeight: 'bold', color: '#e8d5a3', marginBottom: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(232,213,163,0.25)' }}>
            {t('年代判定フローチャート', 'Era Identification Flowchart')}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(184,204,228,0.7)', marginBottom: '32px', fontFamily: 'DM Mono,monospace' }}>
            {t('STEP 1 から順番に確認してください', 'Follow from STEP 1 in order')}
          </p>

          {/* ── STEP 1: 赤タブ ── */}
          <FlowStep
            step="01"
            question={t('赤タブ（Red Tab）の表記を確認', 'Check the Red Tab lettering')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('「LEVI\'S」大文字のみ', '"LEVI\'S" all caps')}
                result={t('→ Big E（1971年以前）', '→ Big E (pre-1971)')}
                color="#c0392b"
                next={t('STEP 2A へ', 'Go to STEP 2A')}
              />
              <FlowBranch
                label={t('「LeVi\'S」小文字e混在', '"LeVi\'S" lowercase e')}
                result={t('→ Small e（1971年以降）', '→ Small e (post-1971)')}
                color="#2980b9"
                next={t('STEP 2B へ', 'Go to STEP 2B')}
              />
            </div>
            <NoteBox>
              {t(
                '⚠️ 赤タブが欠損・後付けの場合は STEP 3以降の複合判定で絞り込みます。タブの縫い付け方（両端ミシン vs 折り返し）も真贋確認の参考になります。',
                '⚠️ If the red tab is missing or replaced, narrow the era using STEP 3+ multi-factor dating. Stitching style (both ends vs folded) also helps with authenticity.'
              )}
            </NoteBox>
          </FlowStep>

          {/* ── STEP 2A: Big E ルート ── */}
          <FlowStep
            step="2A"
            label={t('Big E ルート（1971年以前）', 'Big E Route (pre-1971)')}
            question={t('ケアラベル（洗濯表示タグ）はありますか？', 'Is there a care label (laundry instruction tag)?')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('ケアラベルなし', 'No care label')}
                result={t('→ 1971年以前の可能性大', '→ Likely pre-1971')}
                color="#c0392b"
                next={t('STEP 3A へ', 'Go to STEP 3A')}
              />
              <FlowBranch
                label={t('ケアラベルあり', 'Has care label')}
                result={t('→ 1971年前後（移行期）', '→ Around 1971 (transition)')}
                color="#e67e22"
                next={t('STEP 3A へ', 'Go to STEP 3A')}
              />
            </div>
          </FlowStep>

          {/* ── STEP 3A: ジッパー ── */}
          <FlowStep
            step="3A"
            label={t('Big E ルート続き', 'Big E Route continued')}
            question={t('ジッパーフライの場合：ジッパーブランドを確認', 'For zipper fly: check the zipper brand')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <FlowBranch
                label="TALON 42"
                result={t('→ 1955〜1967年頃', '→ c. 1955–1967')}
                color="#c0392b"
              />
              <FlowBranch
                label={t('TALON（数字なし）', 'TALON (no number)')}
                result={t('→ 1967〜1971年頃', '→ c. 1967–1971')}
                color="#e67e22"
              />
              <FlowBranch
                label={t('セルビッジあり', 'Selvedge denim')}
                result={t('→ 1981年以前', '→ pre-1981')}
                color="#8e44ad"
                note={t('（Small eと重複確認）', '(cross-check with Small e)')}
              />
            </div>
            <NoteBox>
              {t(
                '💡 ボタンフライ（501など）の場合はジッパー確認は不要。ボタン裏の刻印（"6"など工場コード）とパッチ素材（本革 vs Jacron）で年代を補強してください。',
                '💡 For button fly (501, etc.), skip zipper check. Cross-reference button shank stamps (e.g. "6" = factory code) and patch material (leather vs Jacron).'
              )}
            </NoteBox>
          </FlowStep>

          {/* ── STEP 2B: Small e ルート ── */}
          <FlowStep
            step="2B"
            label={t('Small e ルート（1971年以降）', 'Small e Route (post-1971)')}
            question={t('セルビッジデニムですか？', 'Is the denim selvedge (self-edge)?')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('セルビッジあり（耳付き）', 'Selvedge (with self-edge)')}
                result={t('→ 1981年以前（国内製）', '→ pre-1981 (domestic fabric)')}
                color="#8e44ad"
                next={t('STEP 4A へ', 'Go to STEP 4A')}
              />
              <FlowBranch
                label={t('セルビッジなし', 'No selvedge')}
                result={t('→ 1981年以降', '→ post-1981')}
                color="#2980b9"
                next={t('STEP 4B へ', 'Go to STEP 4B')}
              />
            </div>
          </FlowStep>

          {/* ── STEP 4A: 1971-1981 ── */}
          <FlowStep
            step="4A"
            label={t('1971〜1981年の絞り込み', 'Narrowing 1971–1981')}
            question={t('ケアラベルの言語を確認', 'Check care label language')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('英語のみ', 'English only')}
                result={t('→ 1971〜1973年頃', '→ c. 1971–1973')}
                color="#27ae60"
              />
              <FlowBranch
                label={t('英・西・仏 多言語', 'English + Spanish + French')}
                result={t('→ 1973〜1981年頃', '→ c. 1973–1981')}
                color="#16a085"
              />
            </div>
            <NoteBox>
              {t(
                '📅 ケアラベルに4桁の日付コード（例：「5 76」= 1976年5月）がある場合は製造年月を直接読み取れます。',
                '📅 If the care label has a 4-digit date code (e.g. "5 76" = May 1976), you can read the production month/year directly.'
              )}
            </NoteBox>
          </FlowStep>

          {/* ── STEP 4B: 1981以降 ── */}
          <FlowStep
            step="4B"
            label={t('1981年以降の絞り込み', 'Narrowing post-1981')}
            question={t('オーバーロック（ロック縫い）の糸色を確認', 'Check the overlock (serging) thread color')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <FlowBranch
                label={t('オレンジ色', 'Orange thread')}
                result={t('→ 1981〜1984年頃', '→ c. 1981–1984')}
                color="#e67e22"
              />
              <FlowBranch
                label={t('白色', 'White thread')}
                result={t('→ 1985〜1993年頃', '→ c. 1985–1993')}
                color="#95a5a6"
              />
              <FlowBranch
                label={t('複数色・判別困難', 'Mixed or unclear')}
                result={t('→ ケアラベルの日付コードで確認', '→ Check care label date code')}
                color="#7f8c8d"
              />
            </div>
          </FlowStep>

          {/* CTA */}
          <div style={{ background: 'rgba(25,50,88,0.5)', border: '1px dashed rgba(232,213,163,0.25)', borderRadius: '8px', padding: '28px', textAlign: 'center', marginTop: '32px' }}>
            <p style={{ fontSize: '13px', color: '#b8cce4', marginBottom: '16px', lineHeight: 1.8, fontWeight: 300 }}>
              {t('判定に自信がない場合は、AIに写真を送るだけで自動判定します', 'Not sure? Upload photos and AI will identify the era automatically')}
            </p>
            <Link href={p('/identify')} style={{ display: 'inline-block', background: '#c0392b', color: 'white', fontFamily: 'DM Mono,monospace', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', padding: '13px 28px', borderRadius: '4px' }}>
              {t('AI鑑定を試す', 'Try AI Identify')}
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2: 年代別仕様比較表
        ═══════════════════════════════════════════ */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '26px', fontWeight: 'bold', color: '#e8d5a3', marginBottom: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(232,213,163,0.25)' }}>
            {t('年代別仕様比較表', 'Era Specification Comparison')}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(184,204,228,0.7)', marginBottom: '28px', fontFamily: 'DM Mono,monospace' }}>
            {t('主要4時代の仕様変化まとめ（501を基準）', 'Key spec changes across 4 major eras — based on 501')}
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(232,213,163,0.15)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Mono,monospace', fontSize: '12px', minWidth: '640px' }}>
              <thead>
                <tr style={{ background: 'rgba(25,50,88,0.8)' }}>
                  <Th>{t('仕様 / 年代', 'Detail / Era')}</Th>
                  <Th accent="#c0392b">{t('〜1954年', 'Pre-1954')}</Th>
                  <Th accent="#c0392b">{t('1954〜1971年', '1954–1971')}</Th>
                  <Th accent="#2980b9">{t('1971〜1981年', '1971–1981')}</Th>
                  <Th accent="#2980b9">{t('1981年〜', 'Post-1981')}</Th>
                </tr>
              </thead>
              <tbody>
                <Tr label={t('赤タブ表記', 'Red Tab')}
                  cells={[
                    t('Big E（両面）', 'Big E (both sides)'),
                    t('Big E（片面）', 'Big E (one side)'),
                    t('Small e', 'Small e'),
                    t('Small e', 'Small e'),
                  ]}
                  highlights={[0, 1]}
                />
                <Tr label={t('デニム生地', 'Denim')}
                  cells={[
                    t('セルビッジ（耳付き）', 'Selvedge'),
                    t('セルビッジ（耳付き）', 'Selvedge'),
                    t('セルビッジ or 非セルビッジ', 'Selvedge or non-selvedge'),
                    t('非セルビッジ（幅広機）', 'Non-selvedge (wide loom)'),
                  ]}
                  highlights={[0, 1]}
                />
                <Tr label={t('ケアラベル', 'Care Label')}
                  cells={[
                    t('なし', 'None'),
                    t('なし / 移行期あり', 'None / transitional'),
                    t('あり（英語→多言語）', 'Yes (EN → multilingual)'),
                    t('あり（多言語＋日付コード）', 'Yes (multilingual + date code)'),
                  ]}
                />
                <Tr label={t('パッチ素材', 'Back Patch')}
                  cells={[
                    t('本革（牛革）', 'Leather (cowhide)'),
                    t('本革（牛革）', 'Leather (cowhide)'),
                    t('本革 or Jacron移行', 'Leather or Jacron transition'),
                    t('Jacron（合成紙）', 'Jacron (synthetic)'),
                  ]}
                  highlights={[0, 1]}
                />
                <Tr label={t('ジッパーブランド', 'Zipper Brand')}
                  cells={[
                    t('なし / CONMAR', 'None / CONMAR'),
                    t('TALON 42 → TALON', 'TALON 42 → TALON'),
                    t('TALON / YKK 移行', 'TALON / YKK transition'),
                    t('YKK', 'YKK'),
                  ]}
                />
                <Tr label={t('クロッチリベット', 'Crotch Rivet')}
                  cells={[
                    t('あり（表側）', 'Present (front)'),
                    t('1954年廃止', 'Removed in 1954'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                  ]}
                  highlights={[0]}
                />
                <Tr label={t('シンチバック', 'Cinch Back')}
                  cells={[
                    t('あり（一部モデル）', 'Present (some models)'),
                    t('廃止', 'Removed'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                  ]}
                  highlights={[0]}
                />
                <Tr label={t('オーバーロック糸色', 'Overlock Color')}
                  cells={[
                    t('— ', '—'),
                    t('—', '—'),
                    t('—', '—'),
                    t('橙（〜84年）→白（85年〜）', 'Orange (–84) → White (85+)'),
                  ]}
                />
                <Tr label={t('製造国', 'Country')}
                  cells={[
                    'USA',
                    'USA',
                    'USA',
                    t('USA / 海外工場 混在', 'USA / Overseas mixed'),
                  ]}
                  highlights={[0, 1, 2]}
                />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(184,204,228,0.45)', marginTop: '12px', fontFamily: 'DM Mono,monospace', lineHeight: 1.8 }}>
            {t(
              '※ 年代境界は厳密ではなく、移行期に複数仕様が混在するケースがあります。複数ポイントの複合確認を推奨します。',
              '* Era boundaries are approximate. Multiple spec changes often overlap during transition periods. Cross-check multiple points.'
            )}
          </p>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3: 型番比較表
        ═══════════════════════════════════════════ */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '26px', fontWeight: 'bold', color: '#e8d5a3', marginBottom: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(232,213,163,0.25)' }}>
            {t('型番・モデル比較表', 'Model Number Comparison')}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(184,204,228,0.7)', marginBottom: '28px', fontFamily: 'DM Mono,monospace' }}>
            {t('主要8モデルのシルエット・生産期間・特徴', 'Silhouette, production period & key features of 8 major models')}
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(232,213,163,0.15)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Mono,monospace', fontSize: '12px', minWidth: '760px' }}>
              <thead>
                <tr style={{ background: 'rgba(25,50,88,0.8)' }}>
                  <Th>{t('型番', 'Model')}</Th>
                  <Th>{t('シルエット', 'Silhouette')}</Th>
                  <Th>{t('フライ', 'Fly')}</Th>
                  <Th>{t('生産期間', 'Production')}</Th>
                  <Th>{t('主な特徴', 'Key Feature')}</Th>
                  <Th>{t('希少度', 'Rarity')}</Th>
                </tr>
              </thead>
              <tbody>
                <ModelRow
                  model="501"
                  silhouette={t('ストレート', 'Straight')}
                  fly={t('ボタン', 'Button')}
                  period={t('1890s〜現在', '1890s–present')}
                  feature={t('定番・最多流通。年代ごとに仕様変化', 'Flagship. Most common. Spec changes by era')}
                  rarity={t('★★（年代次第）', '★★ (era-dependent)')}
                />
                <ModelRow
                  model="501XX"
                  silhouette={t('ストレート', 'Straight')}
                  fly={t('ボタン', 'Button')}
                  period={t('〜1955年頃', 'Pre-1955')}
                  feature={t('XX表記・セルビッジ・クロッチリベット', 'XX suffix, selvedge, crotch rivet')}
                  rarity={t('★★★★★', '★★★★★')}
                  accent
                />
                <ModelRow
                  model="505"
                  silhouette={t('ストレート', 'Straight')}
                  fly={t('ジッパー', 'Zipper')}
                  period={t('1967〜現在', '1967–present')}
                  feature={t('501のジッパー版。スリムフィット', '501\'s zip-fly sibling. Slim fit')}
                  rarity={t('★★', '★★')}
                />
                <ModelRow
                  model="517"
                  silhouette={t('ブーツカット', 'Bootcut')}
                  fly={t('ジッパー', 'Zipper')}
                  period={t('1969〜1990s', '1969–1990s')}
                  feature={t('裾広がりシルエット。ウエスタン人気期の主力', 'Flared hem. Popular during Western era')}
                  rarity={t('★★★', '★★★')}
                />
                <ModelRow
                  model="646"
                  silhouette={t('ベルボトム', 'Bell-bottom')}
                  fly={t('ジッパー', 'Zipper')}
                  period={t('1969〜1970s末', '1969–late 1970s')}
                  feature={t('最大裾幅のフレアシルエット。70sを象徴', 'Maximum flare. Iconic 70s silhouette')}
                  rarity={t('★★★★', '★★★★')}
                />
                <ModelRow
                  model="701"
                  silhouette={t('ストレート', 'Straight')}
                  fly={t('ジッパー', 'Zipper')}
                  period={t('1950s〜1970s', '1950s–1970s')}
                  feature={t('女性用ライン。リーバイス初の女性向け製品', 'Women\'s line. Levi\'s first women\'s jeans')}
                  rarity={t('★★★', '★★★')}
                />
                <ModelRow
                  model="506XX"
                  silhouette={t('トラッカージャケット', 'Trucker jacket')}
                  fly={t('— ', '—')}
                  period={t('1936〜1953年頃', 'c. 1936–1953')}
                  feature={t('Type Ⅰ。単胸ポケット・シンチバック・Big E', 'Type I. Single pocket, cinch back & Big E')}
                  rarity={t('★★★★★', '★★★★★')}
                  accent
                />
                <ModelRow
                  model="507XX"
                  silhouette={t('トラッカージャケット', 'Trucker jacket')}
                  fly={t('—', '—')}
                  period={t('1953〜1962年頃', 'c. 1953–1962')}
                  feature={t('Type Ⅱ。双胸ポケット・ウエストプリーツ・Big E', 'Type II. Double chest pockets, waist pleats & Big E')}
                  rarity={t('★★★★★', '★★★★★')}
                  accent
                />
                <ModelRow
                  model="557XX"
                  silhouette={t('トラッカージャケット', 'Trucker jacket')}
                  fly={t('—', '—')}
                  period={t('1962〜現在（Big E期〜1971年）', '1962–present (Big E era pre-1971)')}
                  feature={t('Type Ⅲ（トラッカー）。Big E期は最高峰の希少品', 'Type III (trucker). Big E era commands top premium')}
                  rarity={t('★★★★（Big E期）', '★★★★ (Big E era)')}
                />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(184,204,228,0.45)', marginTop: '12px', fontFamily: 'DM Mono,monospace', lineHeight: 1.8 }}>
            {t(
              '※ 希少度はヴィンテージ市場での流通量の相対評価です（★多いほど希少）。状態・年代・サイズにより大きく異なります。',
              '* Rarity is relative to vintage market availability (more ★ = rarer). Condition, era, and size affect value significantly.'
            )}
          </p>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4: ジャケット Type 判別フローチャート
        ═══════════════════════════════════════════ */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '26px', fontWeight: 'bold', color: '#e8d5a3', marginBottom: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(232,213,163,0.25)' }}>
            {t('ジャケット Type 判別フローチャート', 'Jacket Type Identification Flowchart')}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(184,204,228,0.7)', marginBottom: '32px', fontFamily: 'DM Mono,monospace' }}>
            {t('Type Ⅰ（506XX）〜Type Ⅲ（557XX）を順番に見分ける', 'Distinguish Type I (506XX) through Type III (557XX) step by step')}
          </p>

          {/* ── STEP J1: 胸ポケット ── */}
          <FlowStep
            step="J1"
            question={t('胸ポケット（バストポケット）の数を確認', 'Count the chest (bust) pockets')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('胸ポケット 1つ（左のみ）', '1 chest pocket (left only)')}
                result={t('→ Type Ⅰ（506XX）', '→ Type I (506XX)')}
                color="#c0392b"
                next={t('1936〜1953年製', 'Made 1936–1953')}
              />
              <FlowBranch
                label={t('胸ポケット 2つ', '2 chest pockets')}
                result={t('→ Type Ⅱ または Type Ⅲ', '→ Type II or Type III')}
                color="#2980b9"
                next={t('STEP J2 へ', 'Go to STEP J2')}
              />
            </div>
            <NoteBox>
              {t(
                '💡 506XX（Type Ⅰ）は左胸に1つだけポケットがあります。全体的に丸みのある旧スタイルで、背面にシンチバック（ウエスト調整ベルト）があれば初期仕様です。現存数は極めて少なく市場での遭遇率は稀です。',
                '💡 506XX (Type I) has a single pocket on the left chest only. Rounded vintage silhouette. A cinch back strap on the rear indicates early spec. Surviving examples are extremely rare in the market.'
              )}
            </NoteBox>
          </FlowStep>

          {/* ── STEP J2: ウエストプリーツ ── */}
          <FlowStep
            step="J2"
            label={t('2ポケット確認済み', '2 pockets confirmed')}
            question={t('ウエスト〜裾付近の内側にプリーツ（アコーディオン状のひだ）はありますか？', 'Are there accordion-style pleats at the interior waist/hem area?')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('プリーツあり', 'Pleats present')}
                result={t('→ Type Ⅱ（507XX）', '→ Type II (507XX)')}
                color="#c0392b"
                next={t('1953〜1962年製', 'Made 1953–1962')}
              />
              <FlowBranch
                label={t('プリーツなし（フラット）', 'No pleats (flat)')}
                result={t('→ Type Ⅲ（557XX系）', '→ Type III (557XX series)')}
                color="#2980b9"
                next={t('STEP J3 へ', 'Go to STEP J3')}
              />
            </div>
            <NoteBox>
              {t(
                '⚠️ 507XX（Type Ⅱ）のウエストプリーツは着用時に内側へ折り込まれてフラットに見えます。ジャケットを裏返して裾付近を確認してください。507XXも現存数が少なく、市場でも希少です。',
                '⚠️ 507XX (Type II) waist pleats fold inward and appear flat when worn. Turn the jacket inside-out and check near the hem. 507XX is also scarce — few examples circulate.'
              )}
            </NoteBox>
          </FlowStep>

          {/* ── STEP J3: Type III 年代絞り込み ── */}
          <FlowStep
            step="J3"
            label={t('Type Ⅲ（557XX系）確認済み', 'Type III (557XX series) confirmed')}
            question={t('赤タブの表記とケアラベルの有無を確認', 'Check the red tab lettering and presence of care label')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('Big E ＋ ケアラベルなし', 'Big E + no care label')}
                result={t('→ 1962〜1971年（Big E期）', '→ 1962–1971 (Big E era)')}
                color="#c0392b"
                next={t('STEP J4 へ', 'Go to STEP J4')}
              />
              <FlowBranch
                label={t('Small e ＋ ケアラベルあり', 'Small e + care label present')}
                result={t('→ 1971年以降', '→ Post-1971')}
                color="#2980b9"
                next={t('STEP J5 へ', 'Go to STEP J5')}
              />
            </div>
          </FlowStep>

          {/* ── STEP J4: Big E 期絞り込み ── */}
          <FlowStep
            step="J4"
            label={t('Big E 期（1962〜1971年）の絞り込み', 'Big E era (1962–1971) narrowing')}
            question={t('ジッパーブランドとデニム生地を確認', 'Check zipper brand and denim fabric')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <FlowBranch
                label={t('TALON ＋ セルビッジ', 'TALON + Selvedge')}
                result={t('→ 1962〜1971年頃', '→ c. 1962–1971')}
                color="#c0392b"
                note={t('最高峰・最希少', 'Top tier, rarest')}
              />
              <FlowBranch
                label={t('TALON ＋ セルビッジなし', 'TALON + No selvedge')}
                result={t('→ 1967〜1971年頃', '→ c. 1967–1971')}
                color="#e67e22"
                note={t('Big E 後期', 'Late Big E')}
              />
              <FlowBranch
                label={t('YKK または不明', 'YKK or unclear')}
                result={t('→ 1971年前後・移行期', '→ Around 1971, transitional')}
                color="#7f8c8d"
              />
            </div>
          </FlowStep>

          {/* ── STEP J5: Small e 期絞り込み ── */}
          <FlowStep
            step="J5"
            label={t('Small e 期（1971年以降）の絞り込み', 'Small e era (post-1971) narrowing')}
            question={t('サイドハンドポケット（脇ポケット）はありますか？', 'Are there side hand pockets?')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <FlowBranch
                label={t('サイドポケットなし', 'No side pockets')}
                result={t('→ 1981年以前', '→ Pre-1981')}
                color="#27ae60"
                note={t('セルビッジ確認も推奨', 'Also check for selvedge')}
              />
              <FlowBranch
                label={t('サイドポケットあり', 'Side pockets present')}
                result={t('→ 1981年以降', '→ Post-1981')}
                color="#7f8c8d"
              />
            </div>
            <NoteBox>
              {t(
                '📅 ケアラベルに日付コードがある場合は製造年月を直接読み取れます。セルビッジあり＋サイドポケットなし＝1971〜1981年の最も確実な組み合わせです。',
                '📅 If the care label has a date code, read the production month/year directly. Selvedge + no side pockets = the most reliable 1971–1981 combination.'
              )}
            </NoteBox>
          </FlowStep>

          {/* CTA */}
          <div style={{ background: 'rgba(25,50,88,0.5)', border: '1px dashed rgba(232,213,163,0.25)', borderRadius: '8px', padding: '28px', textAlign: 'center', marginTop: '32px' }}>
            <p style={{ fontSize: '13px', color: '#b8cce4', marginBottom: '16px', lineHeight: 1.8, fontWeight: 300 }}>
              {t('ジャケットをAIで自動判定 — 写真を送るだけでType・年代・評価ポイントを解析します', 'AI auto-identifies your jacket — upload photos to get Type, era, and key dating points')}
            </p>
            <Link href={p('/identify')} style={{ display: 'inline-block', background: '#c0392b', color: 'white', fontFamily: 'DM Mono,monospace', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', padding: '13px 28px', borderRadius: '4px' }}>
              {t('ジャケットをAI鑑定', 'AI Identify Jacket')}
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5: ジャケット年代別仕様比較表
        ═══════════════════════════════════════════ */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '26px', fontWeight: 'bold', color: '#e8d5a3', marginBottom: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(232,213,163,0.25)' }}>
            {t('ジャケット年代別仕様比較表', 'Jacket Era Specification Comparison')}
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(184,204,228,0.7)', marginBottom: '28px', fontFamily: 'DM Mono,monospace' }}>
            {t('Type Ⅰ〜Ⅲ、全5時代の仕様一覧', 'Specifications across all 5 eras — Type I through Type III')}
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(232,213,163,0.15)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Mono,monospace', fontSize: '12px', minWidth: '900px' }}>
              <thead>
                <tr style={{ background: 'rgba(25,50,88,0.8)' }}>
                  <Th>{t('仕様', 'Spec')}</Th>
                  <Th accent="#c0392b">{t('Type Ⅰ / 506XX（〜1953）', 'Type I / 506XX (–1953)')}</Th>
                  <Th accent="#c0392b">{t('Type Ⅱ / 507XX（〜1962）', 'Type II / 507XX (–1962)')}</Th>
                  <Th accent="#c0392b">{t('Type Ⅲ Big E（〜1971）', 'Type III Big E (–1971)')}</Th>
                  <Th accent="#2980b9">{t('Type Ⅲ Small e（〜1981）', 'Type III Small e (–1981)')}</Th>
                  <Th accent="#7f8c8d">{t('Type Ⅲ（1981年〜）', 'Type III (1981+)')}</Th>
                </tr>
              </thead>
              <tbody>
                <Tr label={t('赤タブ', 'Red Tab')}
                  cells={[
                    t('Big E（両面大文字）', 'Big E (both caps)'),
                    t('Big E（片面大文字）', 'Big E (one side caps)'),
                    t('Big E（片面大文字）', 'Big E (one side caps)'),
                    t('Small e', 'Small e'),
                    t('Small e', 'Small e'),
                  ]}
                  highlights={[0, 1, 2]}
                />
                <Tr label={t('胸ポケット数', 'Chest Pockets')}
                  cells={[
                    t('1つ（左のみ）', '1 (left only)'),
                    t('2つ', '2'),
                    t('2つ', '2'),
                    t('2つ', '2'),
                    t('2つ', '2'),
                  ]}
                  highlights={[0]}
                />
                <Tr label={t('ウエストプリーツ', 'Waist Pleats')}
                  cells={[
                    t('なし', 'None'),
                    t('あり（アコーディオン）', 'Yes (accordion)'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                  ]}
                  highlights={[1]}
                />
                <Tr label={t('サイドポケット', 'Side Pockets')}
                  cells={[
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('あり', 'Present'),
                  ]}
                />
                <Tr label={t('ケアラベル', 'Care Label')}
                  cells={[
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('あり（英→多言語）', 'Yes (EN → multilingual)'),
                    t('あり（多言語＋日付コード）', 'Yes (multilingual + date code)'),
                  ]}
                />
                <Tr label={t('ジッパーブランド', 'Zipper Brand')}
                  cells={[
                    t('Conmar / ボタン', 'Conmar / button'),
                    t('Conmar → TALON', 'Conmar → TALON'),
                    t('TALON（数字入り）', 'TALON (with number)'),
                    t('TALON → YKK 移行', 'TALON → YKK transition'),
                    t('YKK', 'YKK'),
                  ]}
                  highlights={[0, 1, 2]}
                />
                <Tr label={t('デニム生地', 'Denim')}
                  cells={[
                    t('セルビッジ', 'Selvedge'),
                    t('セルビッジ', 'Selvedge'),
                    t('セルビッジ', 'Selvedge'),
                    t('セルビッジ（〜1981年）', 'Selvedge (until 1981)'),
                    t('非セルビッジ', 'Non-selvedge'),
                  ]}
                  highlights={[0, 1, 2]}
                />
                <Tr label={t('シンチバック', 'Cinch Back')}
                  cells={[
                    t('あり（初期モデル）', 'Yes (early models)'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                    t('なし', 'None'),
                  ]}
                  highlights={[0]}
                />
                <Tr label={t('希少度', 'Rarity')}
                  cells={[
                    t('★★★★★', '★★★★★'),
                    t('★★★★★', '★★★★★'),
                    t('★★★★', '★★★★'),
                    t('★★★', '★★★'),
                    t('★★', '★★'),
                  ]}
                />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(184,204,228,0.45)', marginTop: '12px', fontFamily: 'DM Mono,monospace', lineHeight: 1.8 }}>
            {t(
              '※ Type Ⅰ・Ⅱは現存数が非常に少なく、市場での流通がほとんどありません。年代境界は厳密ではなく移行期に複数仕様が混在するケースがあります。',
              '* Type I and II are extremely scarce — rarely found in the market. Era boundaries are approximate; multiple specs often overlap during transition periods.'
            )}
          </p>
        </section>

        {/* 関連ページ */}
        <section>
          <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '9px', letterSpacing: '3px', color: '#e8d5a3', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.8 }}>
            {t('関連ページ', 'Related Pages')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
            {[
              { href: p('/glossary'), labelJa: '用語集', labelEn: 'Glossary', descJa: '鑑定用語28語を解説', descEn: '28 dating terms explained' },
              { href: p('/timeline'), labelJa: '年表', labelEn: 'Timeline', descJa: '1853〜2002の歴史年表', descEn: 'History 1853–2002' },
              { href: p('/articles'), labelJa: '記事一覧', labelEn: 'Articles', descJa: '詳細な鑑定記事30本', descEn: '30 in-depth dating articles' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ background: 'rgba(25,50,88,0.45)', border: '1px dashed rgba(232,213,163,0.2)', borderRadius: '6px', padding: '16px', textDecoration: 'none', display: 'block' }}>
                <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '9px', letterSpacing: '2px', color: '#e8d5a3', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {t(item.labelJa, item.labelEn)}
                </p>
                <p style={{ fontSize: '12px', color: '#f0ebe0', fontWeight: 300 }}>
                  {t(item.descJa, item.descEn)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer locale={locale} />
    </>
  );
}

/* ─── Sub-components ──────────────────────────────────── */

function FlowStep({
  step,
  label,
  question,
  children,
}: {
  step: string;
  label?: string;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '24px', background: 'rgba(15,30,55,0.6)', border: '1px solid rgba(232,213,163,0.15)', borderRadius: '10px', padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: label ? '4px' : '16px' }}>
        <span style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', letterSpacing: '2px', background: 'rgba(232,213,163,0.15)', color: '#e8d5a3', padding: '4px 10px', borderRadius: '4px', flexShrink: 0 }}>
          STEP {step}
        </span>
        {label && (
          <span style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', color: 'rgba(184,204,228,0.6)' }}>
            {label}
          </span>
        )}
      </div>
      {label && <div style={{ marginBottom: '16px' }} />}
      <p style={{ fontSize: '14px', color: '#f0ebe0', fontWeight: 600, marginBottom: '20px', lineHeight: 1.5 }}>
        {question}
      </p>
      {children}
    </div>
  );
}

function FlowBranch({
  label,
  result,
  color,
  next,
  note,
}: {
  label: string;
  result: string;
  color: string;
  next?: string;
  note?: string;
}) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${color}40`, borderRadius: '8px', padding: '14px 16px' }}>
      <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '11px', color: '#f0ebe0', marginBottom: '8px', lineHeight: 1.5 }}>{label}</p>
      <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '12px', color, fontWeight: 600, marginBottom: note ? '4px' : 0 }}>{result}</p>
      {note && <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', color: 'rgba(184,204,228,0.5)' }}>{note}</p>}
      {next && <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', color: 'rgba(232,213,163,0.5)', marginTop: '6px' }}>▸ {next}</p>}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '16px', background: 'rgba(25,50,88,0.4)', borderLeft: '3px solid rgba(184,204,228,0.3)', padding: '10px 16px', borderRadius: '0 6px 6px 0' }}>
      <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '11px', color: 'rgba(184,204,228,0.75)', lineHeight: 1.8 }}>{children}</p>
    </div>
  );
}

function Th({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <th style={{
      padding: '12px 14px',
      textAlign: 'left',
      fontFamily: 'DM Mono,monospace',
      fontSize: '10px',
      letterSpacing: '2px',
      color: accent ? accent : '#e8d5a3',
      textTransform: 'uppercase',
      borderBottom: '1px solid rgba(232,213,163,0.15)',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </th>
  );
}

function Tr({ label, cells, highlights = [] }: { label: string; cells: string[]; highlights?: number[] }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(232,213,163,0.08)' }}>
      <td style={{ padding: '11px 14px', color: 'rgba(184,204,228,0.8)', fontFamily: 'DM Mono,monospace', fontSize: '11px', whiteSpace: 'nowrap', background: 'rgba(25,50,88,0.3)' }}>
        {label}
      </td>
      {cells.map((cell, i) => (
        <td key={i} style={{ padding: '11px 14px', color: highlights.includes(i) ? '#e8d5a3' : 'rgba(240,235,224,0.75)', fontFamily: 'DM Mono,monospace', fontSize: '11px', lineHeight: 1.6, background: highlights.includes(i) ? 'rgba(192,57,43,0.08)' : 'transparent' }}>
          {cell}
        </td>
      ))}
    </tr>
  );
}

function ModelRow({
  model,
  silhouette,
  fly,
  period,
  feature,
  rarity,
  accent,
}: {
  model: string;
  silhouette: string;
  fly: string;
  period: string;
  feature: string;
  rarity: string;
  accent?: boolean;
}) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(232,213,163,0.08)', background: accent ? 'rgba(192,57,43,0.06)' : 'transparent' }}>
      <td style={{ padding: '11px 14px', color: accent ? '#e8d5a3' : '#f0ebe0', fontFamily: 'DM Mono,monospace', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>
        {model}
      </td>
      <td style={{ padding: '11px 14px', color: 'rgba(240,235,224,0.8)', fontFamily: 'DM Mono,monospace', fontSize: '11px', whiteSpace: 'nowrap' }}>{silhouette}</td>
      <td style={{ padding: '11px 14px', color: 'rgba(240,235,224,0.8)', fontFamily: 'DM Mono,monospace', fontSize: '11px', whiteSpace: 'nowrap' }}>{fly}</td>
      <td style={{ padding: '11px 14px', color: 'rgba(184,204,228,0.8)', fontFamily: 'DM Mono,monospace', fontSize: '11px', whiteSpace: 'nowrap' }}>{period}</td>
      <td style={{ padding: '11px 14px', color: 'rgba(240,235,224,0.75)', fontFamily: 'DM Mono,monospace', fontSize: '11px', lineHeight: 1.6 }}>{feature}</td>
      <td style={{ padding: '11px 14px', color: '#e8d5a3', fontFamily: 'DM Mono,monospace', fontSize: '11px', whiteSpace: 'nowrap' }}>{rarity}</td>
    </tr>
  );
}
