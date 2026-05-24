import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  return {
    title: isJa
      ? "ヴィンテージLevi's用語集｜Big E・セルビッジ・TALONなど28語を解説 | LEVI'S VINTAGE ID."
      : "Vintage Levi's Glossary — 28 Terms Explained | LEVI'S VINTAGE ID.",
    description: isJa
      ? 'Big E・Small e・セルビッジ・TALON 42・アルキュエート・ケアラベル・501XX・LVCなど、ヴィンテージLevi\'s鑑定に必要な用語28語を完全解説。'
      : "Complete glossary of 28 vintage Levi's terms: Big E, selvedge, TALON 42, arcuate, care label, 501XX, LVC, and more.",
    alternates: {
      languages: {
        ja: 'https://levis-id.com/glossary',
        en: 'https://levis-id.com/en/glossary',
      },
    },
  };
}

const TERMS = [
  {
    termJa: 'Big E（ビッグE）',
    termEn: 'Big E',
    kana: 'びっぐいー',
    bodyJa: '1936年の赤タブ導入から1971年まで使われた、赤タブ両面に「LEVIS」が大文字で刻印された仕様。ヴィンテージ市場で最重要の年代指標のひとつ。Big E＝1971年以前の製品を意味する。現在も両面大文字タブはLVC（復刻品）に採用されているため、ケアラベルとの整合性確認が必須。',
    bodyEn: 'Specification from 1936 (red tab introduction) through 1971 where "LEVIS" appears in uppercase on both sides of the red tab. One of the most important era indicators in the vintage market. Big E = pre-1971. LVC reproductions also use Big E-style tabs, so verifying consistency with care label is essential.',
    related: ['article-big-e-value', 'article-red-tab'],
    relatedLabelJa: 'Big E価値ガイド',
    relatedLabelEn: 'Big E Value Guide',
  },
  {
    termJa: 'Small e（スモールE）',
    termEn: 'Small e',
    kana: 'すもーるいー',
    bodyJa: '1971年7月以降に採用された、赤タブ片面が小文字「Levis」になった仕様。大文字Eに対してSmall eと呼ばれる。Small e＝1971年以降の製品。コスト削減により変更された。Small eかつセルビッジありの個体（1971〜1981年）は移行期の価値ある仕様。',
    bodyEn: 'Specification from July 1971 where one side of the red tab shows lowercase "Levis." Called Small e vs. the uppercase Big E. Small e = post-1971. Changed for cost reduction. Small e with selvedge (1971–1981) represents a valuable transitional specification.',
    related: ['article-red-tab'],
    relatedLabelJa: '赤タブガイド',
    relatedLabelEn: 'Red Tab Guide',
  },
  {
    termJa: '赤タブ（Red Tab）',
    termEn: 'Red Tab',
    kana: 'あかたぶ',
    bodyJa: '右バックポケット上部に縫い付けられた赤い布製タグ。1936年に商標として導入された。表記がBig E（両面大文字）かSmall e（片面小文字）かで1971年前後を判定できる年代判定の最重要指標。「LEVIS」と「LEVI\'S」の表記の違いにも年代的変遷がある。',
    bodyEn: 'The red fabric tag sewn to the top of the right back pocket, introduced as a trademark in 1936. Whether it reads Big E (both sides uppercase) or Small e (one side lowercase) is the single most important era indicator for pre/post-1971. Differences between "LEVIS" and "LEVI\'S" also reflect era changes.',
    related: ['article-red-tab'],
    relatedLabelJa: '赤タブ完全ガイド',
    relatedLabelEn: 'Red Tab Complete Guide',
  },
  {
    termJa: 'セルビッジ（Selvedge）',
    termEn: 'Selvedge',
    kana: 'せるびっじ',
    bodyJa: 'シャトル織機で織られたデニムの耳（自然に仕上がった布端）のこと。アウトシームを折り返すと白い耳が見える。1981年にロータリー織機への完全移行とともに廃止された。セルビッジあり＝1981年以前の確定指標。耳の色（白・赤・緑のステッチ）は工場・ロットの情報を持つ場合もある。',
    bodyEn: 'The natural finished edge of denim woven on a shuttle loom. Folding the outseam reveals a white ear. Discontinued in 1981 with the full transition to rotary looms. Selvedge present = confirmed pre-1981. The color of the selvedge stitching (white, red, green) can carry factory or lot information.',
    related: ['article-selvedge'],
    relatedLabelJa: 'セルビッジガイド',
    relatedLabelEn: 'Selvedge Guide',
  },
  {
    termJa: 'アルキュエートステッチ（Arcuate）',
    termEn: 'Arcuate Stitch',
    kana: 'あるきゅえーと',
    bodyJa: 'バックポケットに施されたかもめ型（弓形）のステッチ。1873年の特許取得当初から続くリーバイスの象徴的デザイン。糸色・SPI（1インチあたりのステッチ数）・形状が年代によって異なる。オレンジ糸→初期〜1960年代。黄色/レモン糸→1960年代〜1970年代中頃。銅/オレンジ糸→1970年代後半以降。WWII期S501XXはペイント（塗装）に変更された。',
    bodyEn: 'The seagull-shaped (arc) stitch on back pockets, an iconic Levi\'s design since the 1873 patent. Thread color, SPI (stitches per inch), and shape vary by era. Orange thread = early to 1960s. Yellow/lemon thread = 1960s–mid-1970s. Copper/orange thread = late 1970s+. WWII-era S501XX switched to orange paint.',
    related: ['article-arcuate'],
    relatedLabelJa: 'アルキュエートガイド',
    relatedLabelEn: 'Arcuate Guide',
  },
  {
    termJa: 'ケアラベル（Care Label）',
    termEn: 'Care Label',
    kana: 'けあらべる',
    bodyJa: '1971年7月にアメリカ連邦取引委員会（FTC）の「Care Labeling Rule」により義務化された洗濯表示ラベル。ケアラベルの有無だけで1971年前後を確定できる。内容（英語のみ→1971〜75年頃・多言語→75年以降・バットウィングロゴ→1986年以降・日付コード→1984年以降）で年代を10年単位で絞り込める。',
    bodyEn: 'Care instruction label made mandatory in July 1971 by the FTC Care Labeling Rule. Its presence or absence alone confirms pre/post-1971. Content (English only = c.1971–75, multilingual = post-75, batwing logo = post-1986, date code = post-1984) narrows era to within a decade.',
    related: ['article-care-label'],
    relatedLabelJa: 'ケアラベル判定ガイド',
    relatedLabelEn: 'Care Label Dating Guide',
  },
  {
    termJa: 'TALON 42',
    termEn: 'TALON 42',
    kana: 'たろんよんじゅうに',
    bodyJa: '1950〜60年代のリーバイスジッパーフライモデルに多く使われたジッパーブランド。「42」の刻印があるものが特徴で、TALON社が製造。TALON 42＝1950〜60年代の強い示唆。1960年代後半からは「42」のない「TALON」に移行。ジッパーブランドによる年代判定はボタンフライの501には使えないが、505・517等のジッパーフライモデルに有効。',
    bodyEn: 'Zipper brand commonly used on 1950s–60s Levi\'s zipper-fly models, characterized by the "42" stamp. TALON 42 = strong 1950s–60s indicator. The late 1960s saw a transition to "TALON" without "42." Zipper brand dating doesn\'t apply to the button-fly 501 but is highly effective for the 505, 517, and other zipper-fly models.',
    related: ['article-zipper'],
    relatedLabelJa: 'ジッパー年代ガイド',
    relatedLabelEn: 'Zipper Dating Guide',
  },
  {
    termJa: 'YKK',
    termEn: 'YKK',
    kana: 'わいけいけい',
    bodyJa: '1970年代以降のリーバイスジッパーフライモデルに標準化されたジッパーブランド（吉田工業株式会社）。YKK＝1970年代以降の製品を示す。Big E期（〜1971年）にYKKは存在しないため、YKKジッパー＋Big E主張は矛盾のサインとなる。現行品も含めて最も流通したジッパーブランド。',
    bodyEn: 'Zipper brand (Yoshida Kōgyō K.K.) standardized on Levi\'s zipper-fly models from the 1970s onward. YKK = post-1970s product. YKK did not exist during the Big E era (pre-1971), so a YKK zipper combined with a Big E claim is a contradiction flag. The most widely distributed zipper brand, including on current production.',
    related: ['article-zipper'],
    relatedLabelJa: 'ジッパー年代ガイド',
    relatedLabelEn: 'Zipper Dating Guide',
  },
  {
    termJa: '本革パッチ（Leather Patch）',
    termEn: 'Leather Patch',
    kana: 'ほんかわぱっち',
    bodyJa: '1954年以前のリーバイスに使用されたバックパッチの素材。本物の動物皮革製で「Two Horse Brand」デザインが刻印・印刷されている。1954年頃にJacron（革風ボール紙）に変更された。本革確認＝1954年以前の強い証拠。経年で劣化・ひび割れ・剥離が見られることが多い。後付けの偽革パッチが存在するため他のポイントとの整合性確認が重要。',
    bodyEn: 'Patch material on pre-1954 Levi\'s back waistband, made from genuine animal hide with the Two Horse Brand design. Replaced by Jacron (leather-look cardboard) around 1954. Leather confirmed = strong pre-1954 evidence. Aging causes deterioration, cracking, and separation. Fake post-added patches exist, so consistency with other dating points is essential.',
    related: ['article-patch'],
    relatedLabelJa: 'パッチ完全ガイド',
    relatedLabelEn: 'Patch Complete Guide',
  },
  {
    termJa: 'Jacron（ジャクロン）',
    termEn: 'Jacron',
    kana: 'じゃくろん',
    bodyJa: '1954年頃から本革パッチに代わって導入された革風ボール紙素材のバックパッチ。折り曲げると割れる・裏面が紙質であることで本革と区別できる。初期（1954〜1962年）は「EVERY GARMENT GUARANTEED」スローガンあり・後期（1962年〜）は廃止。このスローガンの有無で1962年前後を判定できる。',
    bodyEn: 'Leather-look cardboard back patch material introduced around 1954 to replace genuine leather. Distinguished from leather by cracking when folded and a paper-like backing. Early Jacron (1954–1962): "EVERY GARMENT GUARANTEED" slogan present. Later Jacron (1962+): slogan removed. This slogan\'s presence or absence dates pieces around 1962.',
    related: ['article-patch'],
    relatedLabelJa: 'パッチ完全ガイド',
    relatedLabelEn: 'Patch Complete Guide',
  },
  {
    termJa: '501XX',
    termEn: '501XX',
    kana: 'ごひゃくいちだぶるえっくす',
    bodyJa: '1954年以前に製造されたリーバイス501の最初期モデルの通称。「XX」はリーバイスの最高品質デニム（ダブルX）を示す内部品番。本革パッチ・Big Eタブ・ケアラベルなし・セルビッジが揃う最高希少クラス。良好なコンディションのものは数十万〜数百万円以上で取引されることがある。',
    bodyEn: 'Common name for the earliest Levi\'s 501 models produced before 1954. "XX" was an internal designation for Levi\'s highest-quality double-X denim. Features leather patch, Big E tab, no care label, and selvedge — the top rarity tier. Well-preserved examples can trade for hundreds of thousands to millions of yen.',
    related: ['article-501xx'],
    relatedLabelJa: '501XX完全ガイド',
    relatedLabelEn: '501XX Complete Guide',
  },
  {
    termJa: '70505',
    termEn: '70505',
    kana: 'ななまるごひゃくごう',
    bodyJa: 'Big E期（1967〜1971年）の505に付けられた品番。505はジッパーフライの1967年デビューモデルで、Big E期のものは特に希少。TALONジッパー・Big Eタブ・ケアラベルなし・セルビッジが揃う個体がコレクター市場で最高評価。501のBig Eに次ぐ人気を持つ。',
    bodyEn: 'Model number for Big E era (1967–1971) 505s. The 505 was a zipper-fly model debuting in 1967, with Big E era examples being especially rare. TALON zipper + Big E tab + no care label + selvedge commands the highest collector premiums — second only to the Big E 501 in desirability.',
    related: ['article-505'],
    relatedLabelJa: '505完全ガイド',
    relatedLabelEn: '505 Complete Guide',
  },
  {
    termJa: 'LVC（Levis Vintage Clothing）',
    termEn: 'LVC (Levis Vintage Clothing)',
    kana: 'えるぶいしー',
    bodyJa: 'リーバイ・ストラウス社が公式に展開するヴィンテージ復刻ライン。本物ヴィンテージに酷似した仕様（セルビッジ・Big E風タブ・本革パッチ等）で製造されている。ケアラベルに「LEVIS VINTAGE CLOTHING」の表記があればLVCと確定できる。本物ヴィンテージとして売買されることがあるため注意が必要。「偽物」ではなく「公式復刻品」という位置づけ。',
    bodyEn: 'Levi Strauss & Co.\'s official vintage reproduction line, manufactured to closely replicate originals (selvedge, Big E-style tabs, leather patches, etc.). "LEVIS VINTAGE CLOTHING" on the care label definitively confirms LVC. Can be mistakenly sold as genuine vintage — caution required. LVC is "official reproduction," not a counterfeit.',
    related: ['article-lvc'],
    relatedLabelJa: 'LVC vs ヴィンテージ',
    relatedLabelEn: 'LVC vs Genuine Vintage',
  },
  {
    termJa: 'S501XX（WWII期）',
    termEn: 'S501XX (WWII Era)',
    kana: 'えすごひゃくいちだぶるえっくす',
    bodyJa: '第二次世界大戦中（1942〜1947年頃）に製造された簡略化501XX。「S」はSimplified（簡略化）の意。金属節約のためアルキュエートが縫製からオレンジペイント（現在はほぼ剥落）に変更。クロッチリベット・コインポケットリベット・シンチバックも省略。良好なコンディションであれば$6,000以上の価値があるとされる超希少品。',
    bodyEn: 'Simplified 501XX produced during WWII (c.1942–1947). "S" stands for Simplified. To conserve metal, the arcuate changed from stitching to orange paint (now almost entirely worn off). Crotch rivets, coin pocket rivets, and cinch back were also eliminated. Valued at $6,000+ in good condition — an ultra-rare piece.',
    related: ['article-501xx'],
    relatedLabelJa: '501XX完全ガイド',
    relatedLabelEn: '501XX Complete Guide',
  },
  {
    termJa: 'シンチバック（Cinch Back）',
    termEn: 'Cinch Back',
    kana: 'しんちばっく',
    bodyJa: 'バックウエストに付いたウエスト調整用のストラップとバックル。ベルトループが普及する以前のウエスト調整機構で、1922〜1937年頃まで使用された。シンチバックあり＝1937年以前の非常に古いモデルの証拠。リベット等と組み合わせて最初期モデルを特定する際の重要指標となる。',
    bodyEn: 'A strap-and-buckle waist adjustment mechanism on the back waist, used before belt loops became standard. Used from roughly 1922–1937. Cinch back present = evidence of a very early pre-1937 model. An important indicator for identifying the earliest models when combined with rivet type.',
    related: ['article-rivet'],
    relatedLabelJa: 'リベット・ハードウェアガイド',
    relatedLabelEn: 'Rivet & Hardware Guide',
  },
  {
    termJa: 'クロッチリベット（Crotch Rivet）',
    termEn: 'Crotch Rivet',
    kana: 'くろっちりべっと',
    bodyJa: 'ボタンフライの付け根（股部分）に打たれた金属製リベット。1937〜1964年頃まで確認できる。WWII期のS501XXでは金属節約のため省略された（1942〜1947年）。クロッチリベットあり＝1964年以前の指標。バックポケットの隠しリベット廃止（1964〜1966年頃）と同時期に消滅した。',
    bodyEn: 'Metal rivet at the base of the button fly (crotch area), found on pieces from roughly 1937–1964. Eliminated during WWII-era S501XX to conserve metal (1942–1947). Crotch rivet present = indicator of pre-1964. Disappeared around the same time as the elimination of hidden back pocket rivets (c.1964–1966).',
    related: ['article-rivet'],
    relatedLabelJa: 'リベット・ハードウェアガイド',
    relatedLabelEn: 'Rivet & Hardware Guide',
  },
  {
    termJa: 'バットウィング（Batwing）',
    termEn: 'Batwing Logo',
    kana: 'ばっとうぃんぐ',
    bodyJa: 'リーバイスのこうもり型（V字翼型）ロゴ。1986年以降のケアラベルにこのロゴが印刷されるようになった。バットウィングロゴあり＝1986年以降確定という年代判定に使える。「Care on Reverse（裏面参照）」の表記が同時にあれば1992年以前も確定し、1986〜1992年と絞り込める。',
    bodyEn: 'Levi\'s bat-wing shaped (V-wing) logo. This logo began appearing on care labels from 1986. Batwing logo present = confirmed post-1986. Combined with "Care on Reverse" notation, both 1986+ and pre-1992 are confirmed, narrowing the era to 1986–1992.',
    related: ['article-care-label'],
    relatedLabelJa: 'ケアラベル判定ガイド',
    relatedLabelEn: 'Care Label Dating Guide',
  },
  {
    termJa: 'オーバーロック色（Overlock Color）',
    termEn: 'Overlock Color',
    kana: 'おーばーろっくいろ',
    bodyJa: '1981年のセルビッジ廃止後、アウトシームに使われるようになったロック縫い（オーバーロック）の糸色。オレンジ色→1981〜1984年。白色→1985〜1993年。この色の違いだけで8〜12年の精度で年代判定できる。セルビッジがない場合の最重要年代指標のひとつ。',
    bodyEn: 'Thread color of the overlock stitch on outseams, used after selvedge was discontinued in 1981. Orange = 1981–1984. White = 1985–1993. This color difference alone enables 8–12 year precision dating. One of the most important era indicators for non-selvedge pieces.',
    related: ['article-selvedge'],
    relatedLabelJa: 'セルビッジ・オーバーロックガイド',
    relatedLabelEn: 'Selvedge & Overlock Guide',
  },
  {
    termJa: 'Vステッチ（V-Stitch）',
    termEn: 'V-Stitch',
    kana: 'ぶいすてっち',
    bodyJa: 'ボタンフライの右縁に施されたV字形のステッチ。1969年以前のリーバイスに見られ、1969年以降に廃止された。Vステッチあり＝1969年以前の確定。Big Eタブ（1971年以前）との組み合わせで1969年以前のBig E期と精密に絞り込める。比較的見落とされやすいが有効な指標。',
    bodyEn: 'V-shaped stitch on the right edge of the button fly, found on pre-1969 Levi\'s and eliminated after 1969. V-stitch present = confirmed pre-1969. Combined with Big E tab (pre-1971), narrows precisely to pre-1969 Big E era. A relatively easy-to-overlook but highly effective indicator.',
    related: ['article-1960s'],
    relatedLabelJa: '1960年代ガイド',
    relatedLabelEn: '1960s Guide',
  },
  {
    termJa: '日付コード（Date Code）',
    termEn: 'Date Code',
    kana: 'ひづけこーど',
    bodyJa: '1984年頃からケアラベルに記載されるようになった製造年月を示すコード。3桁コード（1984〜1992年）：例「127」＝12月・1987年。4桁コード（1993年〜）：例「1295」＝12月・1995年。日付コードがあれば±1年の精度で製造年月を特定できる最強の年代指標。',
    bodyEn: 'Manufacturing date code appearing on care labels from around 1984. 3-digit (1984–1992): e.g., "127" = December 1987. 4-digit (1993+): e.g., "1295" = December 1995. When readable, the date code is the strongest era indicator, enabling ±1 year manufacturing date precision.',
    related: ['article-care-label'],
    relatedLabelJa: 'ケアラベル判定ガイド',
    relatedLabelEn: 'Care Label Dating Guide',
  },
  {
    termJa: 'Two Horse Brand',
    termEn: 'Two Horse Brand',
    kana: 'つーほーすぶらんど',
    bodyJa: 'バックパッチに描かれた「二頭の馬がジーンズを引っ張るデザイン」。リーバイスの耐久性を象徴するトレードマークで、1873年の創業以来続く伝統的なデザイン。馬が2頭のロープで引っ張っても破れないという丈夫さを表現している。本革パッチ・Jacronパッチ・合皮パッチのいずれにもこのデザインが使われている。',
    bodyEn: 'The "two horses pulling jeans" design on the back patch — Levi\'s trademark symbolizing durability since 1873. Represents jeans so strong they can\'t be torn apart even by two horses pulling from each side. This design is used on leather, Jacron, and synthetic leather patches across all eras.',
    related: ['article-patch'],
    relatedLabelJa: 'パッチ完全ガイド',
    relatedLabelEn: 'Patch Complete Guide',
  },
  {
    termJa: 'ボタン刻印（Button Stamp）',
    termEn: 'Button Back Stamp',
    kana: 'ぼたんこくいん',
    bodyJa: 'フロントボタン裏面に刻まれた工場番号。1桁刻印（1〜6等）→1970年代中頃以前の国内工場。3桁刻印→1980年代〜2002年の後期アメリカ製。アルファベット刻印（M・W等）→海外工場製。刻印1番・2番はサンフランシスコ発祥工場製で最希少。斜め光での撮影が判読の鍵。',
    bodyEn: 'Factory number stamped on the back of front buttons. Single-digit (1–6 etc.) = pre-mid-1970s domestic factory. 3-digit = late US-made, 1980s–2002. Letter stamp (M, W, etc.) = overseas factory. Stamps 1 and 2 indicate the SF birthplace factory — the rarest. Angled lighting is key for reading worn stamps.',
    related: ['article-button'],
    relatedLabelJa: 'ボタン刻印完全ガイド',
    relatedLabelEn: 'Button Stamp Complete Guide',
  },
  {
    termJa: 'SF工場（サンフランシスコ工場）',
    termEn: 'SF Factory',
    kana: 'えすえふこうじょう',
    bodyJa: 'ボタン刻印1番（Valencia Street工場）と2番（22nd Street工場）で示される、リーバイス発祥地のサンフランシスコ工場製を指す通称。1853年にリーバイ・ストラウスが移住し1873年に世界初のジーンズ工場を設立した場所。工場閉鎖後は増産不可能なため発祥地製という歴史的価値から最希少の工場番号となっている。',
    bodyEn: 'Colloquial term for Levi\'s made at the San Francisco birthplace factories, indicated by button stamps 1 (Valencia Street) and 2 (22nd Street). The location where Levi Strauss settled in 1853 and established the world\'s first jeans factory in 1873. With the factories closed and production impossible, the historical significance of the birthplace makes these the rarest factory stamps.',
    related: ['article-sf-factory'],
    relatedLabelJa: 'SF工場希少性ガイド',
    relatedLabelEn: 'SF Factory Rarity Guide',
  },
  {
    termJa: 'デッドストック（Deadstock / NOS）',
    termEn: 'Deadstock / NOS',
    kana: 'でっどすとっく',
    bodyJa: '製造後に一度も着用・洗濯されていない未使用・未流通品。NOS（New Old Stock）とも呼ばれる。コンディション評価の最上位で、参考価格の3〜10倍以上の価値がつくこともある。タグ・パッチが完全な状態・折り目が残っているものが典型的。古着市場・倉庫から発見されることがある。',
    bodyEn: 'Unworn, unwashed item that has never been sold or used since manufacture. Also called NOS (New Old Stock). The top tier of condition grading, sometimes valued at 3–10x reference prices. Typically characterized by intact tags and patches, remaining fold marks. Occasionally discovered in vintage stores or warehouses.',
    related: ['article-price'],
    relatedLabelJa: '価格相場ガイド',
    relatedLabelEn: 'Price Guide',
  },
  {
    termJa: 'トラッカージャケット（Trucker Jacket）',
    termEn: 'Trucker Jacket',
    kana: 'とらっかーじゃけっと',
    bodyJa: '1962年から現在まで継続生産されているリーバイスのデニムジャケット（557XX）。胸2つのフラップポケット・ウエスト2つのボタン留めポケットが特徴のType3ジャケット。Big E期（〜1971年）の品番は「70557XX」。現行品も「Type3」として製造されている。1936年のType1（506XX）・1953年のType2（507XX）から続く系譜。',
    bodyEn: 'Levi\'s denim jacket (557XX), in continuous production from 1962 to the present. The Type 3 jacket featuring two chest flap pockets and two button-closure waist pockets. Big E era (pre-1971) examples carry the "70557XX" model number. Current production continues as the "Type 3." The lineage runs from Type 1 (506XX, 1936) through Type 2 (507XX, 1953).',
    related: ['article-jacket-types'],
    relatedLabelJa: 'ジャケット完全ガイド',
    relatedLabelEn: 'Jacket Complete Guide',
  },
  {
    termJa: 'ジッパーフライ（Zipper Fly）',
    termEn: 'Zipper Fly',
    kana: 'じっぱーふらい',
    bodyJa: 'ジッパーで開閉するフロント仕様。505（1967年〜）・517・646・578などリーバイスの複数モデルで採用。ボタンフライ（501等）と異なりジッパーブランドによる年代判定が可能。TALON 42→1950〜60年代・TALON→60年代後半〜70年代前半・YKK→70年代以降。',
    bodyEn: 'Zipper-closure front specification used on multiple Levi\'s models including the 505 (1967+), 517, 646, and 578. Unlike button-fly models (501 etc.), allows zipper-brand era dating. TALON 42 = 1950s–60s; TALON (no 42) = late 60s–early 70s; YKK = post-1970s.',
    related: ['article-505'],
    relatedLabelJa: '505完全ガイド',
    relatedLabelEn: '505 Complete Guide',
  },
  {
    termJa: 'SPI（ステッチ密度）',
    termEn: 'SPI (Stitches Per Inch)',
    kana: 'えすぴーあい',
    bodyJa: '1インチあたりのステッチ数（縫製密度）。ヴィンテージリーバイスではアルキュエートステッチのSPIが年代の補助指標になる。一般に古いほどSPIが高い傾向（501XX期：SPI10〜11・1960年代：SPI9〜10）。高SPIは繊細な縫製技術と良質な素材の証拠とされ、コレクターが重視するポイントのひとつ。',
    bodyEn: 'Number of stitches per inch (sewing density). In vintage Levi\'s, arcuate stitch SPI serves as a supplementary era indicator. Generally, older pieces trend toward higher SPI (501XX: SPI 10–11; 1960s: SPI 9–10). High SPI indicates fine craftsmanship and quality materials — a detail collectors pay attention to.',
    related: ['article-arcuate'],
    relatedLabelJa: 'アルキュエートガイド',
    relatedLabelEn: 'Arcuate Guide',
  },
  {
    termJa: 'Made in USA',
    termEn: 'Made in USA',
    kana: 'めいどいんゆーえすえー',
    bodyJa: 'ケアラベルに「MADE IN USA」と記載されていれば2002年以前の製品を示す。リーバイスは2002年にサンフランシスコのバレンシア工場を最後にアメリカ国内生産を終了した。日本市場では「Made in USA」表記のLevi\'sに特別な価値を見出すコレクターも多い。1980〜90年代のMade in USAは実用価格帯で人気がある。',
    bodyEn: '"MADE IN USA" on the care label indicates a pre-2002 product. Levi\'s ended all American domestic production in 2002 with the closure of the San Francisco Valencia factory. Japanese collectors especially value "Made in USA" Levi\'s. 1980s–90s Made in USA examples are popular in an accessible price range.',
    related: ['article-1980s'],
    relatedLabelJa: '1980年代ガイド',
    relatedLabelEn: '1980s Guide',
  },
];

// アルファベット順（かな読みでソート）
const sorted = [...TERMS].sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));

// JSON-LD (DefinedTermSet)
function buildJsonLd(isJa: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: isJa ? "ヴィンテージLevi's用語集" : "Vintage Levi's Glossary",
    url: isJa ? 'https://levis-id.com/glossary' : 'https://levis-id.com/en/glossary',
    hasDefinedTerm: TERMS.map(t => ({
      '@type': 'DefinedTerm',
      name: isJa ? t.termJa : t.termEn,
      description: isJa ? t.bodyJa : t.bodyEn,
      inDefinedTermSet: isJa ? "ヴィンテージLevi's用語集" : "Vintage Levi's Glossary",
    })),
  };
}

export default async function GlossaryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const t = (ja: string, en: string) => isJa ? ja : en;
  const p = (path: string) => isJa ? path : `/en${path}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(isJa)) }}
      />
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <nav style={{display:'flex',gap:'8px',marginBottom:'32px',fontFamily:'DM Mono,monospace',fontSize:'10px',color:'#b8cce4'}}>
          <Link href={p('/')} style={{color:'#b8cce4',textDecoration:'none'}}>TOP</Link>
          <span style={{opacity:0.4}}>/</span>
          <span style={{opacity:0.7}}>{t('用語集','Glossary')}</span>
        </nav>

        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
          {t('ヴィンテージLevi\'s 用語集', "Vintage Levi's Glossary")}
        </p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] mb-4" style={{fontSize:'clamp(28px,5vw,42px)'}}>
          {t('鑑定用語集','Identification Glossary')}
        </h1>
        <p className="text-sm text-[#b8cce4] font-light leading-loose mb-12">
          {t(
            'ヴィンテージLevi\'s鑑定に必要な用語を28語解説。Big E・セルビッジ・TALON・LVCなど、鑑定ポイントを正しく理解するための用語集です。',
            'Complete glossary of 28 terms essential for vintage Levi\'s identification — Big E, selvedge, TALON, LVC, and more.'
          )}
        </p>

        {/* 五十音インデックス（日本語のみ）*/}
        {isJa && (
          <div className="flex flex-wrap gap-2 mb-10">
            {['あ','か','さ','た','な','は','ま','や','ら','わ','A–Z'].map(idx => (
              <a key={idx} href={`#${idx}`} className="font-mono text-[10px] border border-stitch/30 text-stitch px-3 py-1 rounded hover:bg-stitch/10 transition-colors">
                {idx}
              </a>
            ))}
          </div>
        )}

        {/* 用語一覧 */}
        <div className="space-y-6">
          {sorted.map((term, i) => (
            <div key={i} id={isJa ? term.kana.charAt(0) : term.termEn.charAt(0)} className="card-denim p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="font-playfair font-bold text-[#e8d5a3] text-lg leading-snug">
                    {isJa ? term.termJa : term.termEn}
                  </h2>
                  {isJa && (
                    <p className="font-mono text-[9px] text-stitch/60 mt-0.5">{term.termEn}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-[#f0ebe0]/80 font-light leading-loose mb-4">
                {isJa ? term.bodyJa : term.bodyEn}
              </p>
              <Link
                href={p(`/articles/${term.related[0]}`)}
                className="inline-block font-mono text-[9px] tracking-[2px] uppercase border border-stitch/30 text-stitch px-3 py-1.5 rounded hover:bg-stitch/10 transition-colors"
              >
                → {isJa ? term.relatedLabelJa : term.relatedLabelEn}
              </Link>
            </div>
          ))}
        </div>

        <div className="stitch-line my-10" />

        <div className="card-denim p-8 text-center">
          <p className="font-mono text-[10px] tracking-[3px] text-stitch uppercase mb-4">
            {t('用語を理解したら', 'Ready to identify?')}
          </p>
          <p className="text-sm text-[#b8cce4] font-light mb-6 leading-loose">
            {t(
              '写真をアップロードするだけでAIがこれらの鑑定ポイントを総合判定します。',
              'Upload photos and the AI cross-references all these identification points instantly.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={p('/identify')} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
              {t('無料でAI鑑定する', 'Identify for Free')}
            </Link>
            <Link href={p('/articles')} className="inline-block font-mono text-xs tracking-[3px] uppercase border border-stitch/40 text-stitch px-10 py-4 rounded hover:bg-stitch/10 transition-colors">
              {t('記事一覧を見る', 'Browse Articles')}
            </Link>
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
