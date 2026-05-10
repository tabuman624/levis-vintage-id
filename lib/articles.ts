export type Article = {
  slug: string;
  catJa: string;
  catEn: string;
  titleJa: string;
  titleEn: string;
  descJa: string;
  descEn: string;
  tags: string[];
  sections: Section[];
};

export type Section = {
  headingJa: string;
  headingEn: string;
  bodyJa: string;
  bodyEn: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'article-501',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス501完全年代判定ガイド｜リベット・ステッチ・シンチバックまで',
    titleEn: "Levis 501 Complete Dating Guide — Rivets, Stitching & Cinch Back",
    descJa: '赤タブ・ケアラベル・セルビッジに加え、リベット・アルキュエートステッチ・シンチバックまで網羅した501の決定版年代判定ガイド。',
    descEn: "The definitive 501 dating guide covering red tab, care label, selvedge, rivets, arcuate stitching, and cinch back.",
    tags: ['501', '年代判定', 'Big E', 'リベット', 'アルキュエート'],
    sections: [
      {
        headingJa: 'リーバイス501とは',
        headingEn: "What is the Levis 501?",
        bodyJa: 'リーバイス501は1873年に誕生した世界初のジーンズで、150年以上作り続けられているアパレル史上最長寿のモデルです。ボタンフライとストレートシルエットを特徴とし、マーロン・ブランドやジェームズ・ディーンが着用したことでポップカルチャーのアイコンとなりました。ヴィンテージ市場では特に1950年代〜1970年代前半のモデルが高い人気を誇り、コンディションの良い個体は国内外で高値で取引されています。501の年代判定には赤タブ・ケアラベル・ジッパーといった基本ポイントに加え、リベット・アルキュエートステッチ・シンチバック・ウエストバンドなど細部のディテールも重要な指標となります。',
        bodyEn: "The Levis 501 was born in 1873 as the world's first jeans, the longest-running garment in apparel history at 150+ years. Known for its button fly and straight silhouette, it became a pop culture icon through Marlon Brando and James Dean. In the vintage market, models from the 1950s to early 1970s are particularly sought after, with quality examples commanding high prices worldwide. Beyond the basic red tab, care label, and zipper, precise 501 dating also requires examining rivets, arcuate stitching, cinch back, and waistband details.",
      },
      {
        headingJa: 'シンチバック・ベルトループによる超希少判定',
        headingEn: 'Cinch Back & Belt Loop — Ultra-Rare Dating',
        bodyJa: 'シンチバック（ウエスト背面の調節金具）はヴィンテージリーバイスの中でも最古期を示す指標です。ベルトループなし・シンチバックあり→1922年以前（超希少）。ベルトループあり・シンチバックあり・バックポケット露出リベット→1922〜1936年。シンチバックあり・赤タブあり→1936〜1937年（赤タブ導入直後）。シンチバックなし→1937年以降。ベルトループ数も指標になります。7ベルトループ→1930年代以前、5ベルトループ→1930年代以降が標準です。バックベルトループが若干オフセンター（中心からずれている）であれば1947〜1965年の特徴です。',
        bodyEn: "The cinch back (waist adjustment strap on the back) is one of the oldest era indicators for vintage Levis. No belt loops + cinch back = pre-1922 (ultra-rare). Belt loops + cinch back + exposed back pocket rivets = 1922–1936. Cinch back + red tab = 1936–1937 (immediately after tab introduction). No cinch back = post-1937. Belt loop count is also an indicator: 7 belt loops = pre-1930s, 5 belt loops = post-1930s standard. Back belt loop positioned slightly off-center characterizes 1947–1965 examples.",
      },
      {
        headingJa: 'リベットの詳細年代判定',
        headingEn: 'Rivet Detailed Dating',
        bodyJa: 'リベットはボタンとともに501の最古期を示す重要な指標です。クロッチリベット（ボタンフライ付け根の股部分の鋲）あり→1937年以前（超希少）。バックポケット露出リベット→1937年以前。バックポケット隠しリベット（内側からのみ確認）→1937〜1964年。バックポケットリベットなし（バータック留め）→1964〜1966年以降。コインポケットリベットなし→1942〜1947年（WWII金属節約）。リベット素材：銅製・凸文字→1960年代以前。銅製・凹文字（刻印が沈んでいる）→1966年以降。「crowned arrow（王冠矢印）」リベット刻印→1930年代後半〜1960年代。「L.S. & Co. S.F. Cal.」リベット刻印→1930〜1960年代。',
        bodyEn: "Rivets are critical early-era indicators alongside buttons. Crotch rivet (at button fly base) present = pre-1937 (ultra-rare). Exposed back pocket rivets = pre-1937. Hidden back pocket rivets (visible from inside only) = 1937–1964. No back pocket rivets (bartack closure) = post-1964–1966. No coin pocket rivet = 1942–1947 (WWII metal rationing). Rivet material: copper with raised/convex lettering = pre-1960s. Copper with recessed/lowered lettering = post-1966. 'Crowned arrow' rivet stamp = late 1930s–1960s. 'L.S. & Co. S.F. Cal.' rivet stamp = 1930s–1960s.",
      },
      {
        headingJa: 'アルキュエートステッチによる年代判定',
        headingEn: 'Arcuate Stitching Dating',
        bodyJa: 'バックポケットの弓形ステッチ（アルキュエート）は糸の色とSPI（インチあたりのステッチ数）で年代を判定できます。チェーンステッチなし（ヘムのみ）→1933年以前。アルキュエート塗装のみ（ステッチなし）→1942〜1947年（WWII期・糸節約）。現在ではほとんどのペイントが剥落しており、バックポケットが無地に見えます。オレンジ糸・高SPI（10〜11）・やや不均一→1955年以前。オレンジ糸・やや緩め（9〜10SPI）・より均一→1955〜1970年。レモン/黄色糸→1960〜1970年代中頃（希少）。黄色糸が一部でも存在→1970年代中頃以前確定。銅色/オレンジ糸（再び）→1970年代後半以降。明るい黄色・合成糸→1983年以降。',
        bodyEn: "The arcuate back pocket stitching can be dated by thread color and SPI (stitches per inch). No chain stitch (hem only) = pre-1933. Arcuate painted only (no stitching) = 1942–1947 (WWII, thread conservation) — paint has mostly worn off on surviving pieces, leaving plain-looking pockets. Orange thread, high SPI (10–11), slightly irregular = pre-1955. Orange thread, looser (9–10 SPI), more uniform = 1955–1970. Lemon/yellow thread = mid-1960s to mid-1970s (rare). Any yellow thread present = confirms pre-mid-1970s. Copper/orange thread (return) = post-late 1970s. Bright yellow/synthetic thread = post-1983.",
      },
      {
        headingJa: '年代早見表と鑑定の優先順位',
        headingEn: 'Era Quick Reference & Dating Priority',
        bodyJa: '501年代判定の優先順位：①赤タブ（Big E→1971年以前・Small e→1971年以降）②ケアラベルの有無（なし→1971年以前確定）③セルビッジ（あり→1985年以前）④リベット状態（クロッチリベット→1937年以前・隠しリベット→1937〜1964年）⑤アルキュエート糸色（黄色→1970年代中頃以前・ペイントのみ→WWII期）⑥シンチバック（あり→1937年以前）。年代早見表：〜1937年：シンチバックあり・クロッチリベット・露出リベット。1937〜1954年：隠しリベット・本革パッチ・Big E・ケアラベルなし。1955〜1971年：合皮パッチ・Big E・ケアラベルなし・セルビッジ。1971〜1981年：Small e・ケアラベルあり・セルビッジ。1981年〜：セルビッジなし。',
        bodyEn: "501 dating priority order: ①red tab (Big E = pre-1971, Small e = post-1971) ②care label presence (absent = confirmed pre-1971) ③selvedge (present = pre-1985) ④rivet condition (crotch rivet = pre-1937, hidden rivets = 1937–1964) ⑤arcuate thread color (yellow = pre-mid-1970s, paint only = WWII era) ⑥cinch back (present = pre-1937). Era quick reference: pre-1937: cinch back, crotch rivet, exposed rivets. 1937–1954: hidden rivets, leather patch, Big E, no care label. 1955–1971: synthetic patch, Big E, no care label, selvedge. 1971–1981: Small e, care label, selvedge. 1981+: no selvedge.",
      },
    ],
  },
  {
    slug: 'article-red-tab',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: '赤タブ完全ガイド｜Big E・Small e・商標R・タブの向きまで',
    titleEn: 'Complete Red Tab Guide — Big E, Small e, Trademark R & Tab Orientation',
    descJa: '両面大文字・片面小文字の違い、1971年の分岐点、商標Rの有無、タブの向き、オレンジタブとの違いを完全解説。',
    descEn: 'Complete guide: Big E vs Small e, the 1971 divide, trademark R, tab orientation, and orange tab differences.',
    tags: ['赤タブ', 'Big E', '1971年', '商標R', 'オレンジタブ'],
    sections: [
      {
        headingJa: '赤タブとは何か',
        headingEn: 'What is the Red Tab?',
        bodyJa: '赤タブとはリーバイスのジーンズやジャケットのバックポケット右上に縫い付けられた小さな赤い布製ラベルです。1936年にリーバイスが商標を守るために導入し、以来ブランドのアイコンとして世界中に認知されています。現在も現行品に使われており、タブの文字の大小・商標Rの有無・タブの向き・色がヴィンテージ品の年代判定において最も重要な指標のひとつとなっています。赤タブは見た目は小さいですが、1枚で年代を30年単位で絞り込める最強の指標です。必ず両面を確認することが鑑定の基本です。',
        bodyEn: "The red tab is a small red fabric label sewn onto the upper right of the back pocket on Levis jeans and jackets. Introduced in 1936 to protect the brand's trademark, it has since become one of Levis most iconic design elements worldwide. Still used on current production, the tab's letter case, trademark R, orientation, and color are among the most important vintage dating indicators. Despite its small size, one tab can narrow the era by 30 years — it's the single most powerful dating tool. Always check both sides as a fundamental rule.",
      },
      {
        headingJa: '商標Rなし→商標Rあり（1936〜1950年の区別）',
        headingEn: 'No Trademark R → Trademark R (Distinguishing 1936–1950)',
        bodyJa: 'Big E（両面大文字）の中でもさらに細かく年代を絞る指標が「商標R（®）」の有無です。商標Rなし・両面大文字「LEVIS」→1936〜1950年頃：赤タブ導入初期で商標登録前の仕様。商標Rあり・両面大文字「LEVIS」→1950〜1971年：商標が登録され「®」マークが追加された仕様。この区別により、Big Eを「前期Big E（1936〜1950年）」と「後期Big E（1950〜1971年）」に分けることができます。前期Big Eは後期Big Eよりさらに希少で、本革パッチ・Conmar/Scovill/TALONジッパーと組み合わさることが多いです。',
        bodyEn: "Even within Big E (both sides uppercase), the presence or absence of the trademark R (®) provides further era precision. No trademark R + both sides uppercase 'LEVIS' = c.1936–1950: early tab introduction, pre-trademark registration. Trademark R + both sides uppercase 'LEVIS' = 1950–1971: trademark registered, ® mark added. This distinction divides Big E into 'early Big E (1936–1950)' and 'late Big E (1950–1971).' Early Big E is rarer than late Big E and typically accompanies leather patches and Conmar/Scovill/TALON zippers.",
      },
      {
        headingJa: 'Big E（1936〜1971年）とSmall e（1971年〜）',
        headingEn: 'Big E (1936–1971) and Small e (1971+)',
        bodyJa: '「Big E」とはコレクターが使う用語で、赤タブの「LEVIS」表記が両面とも大文字のモデルを指します。1971年のコスト削減により片面が小文字「Levis」に変更され、これ以降を「Small e」と呼びます。Big E→1971年以前確定・Small e→1971年以降確定という明確な判定ができます。確認の際は必ず両面を見てください。表面だけ大文字でも裏面が小文字であればSmall eです。Big Eは35年間だけ存在した仕様で、コレクター市場において最も重視される指標のひとつです。同じ年代・型番・コンディションでもBig EとSmall eでは価格が大きく異なることがあります。',
        bodyEn: "'Big E' is a collector term for models where the red tab reads 'LEVIS' in uppercase on both sides. The 1971 cost-reduction change to single-lowercase 'Levis' created the 'Small e.' Big E = confirmed pre-1971; Small e = confirmed post-1971. Always check both sides — even if the front appears uppercase, a lowercase back means Small e. Big E existed for only 35 years, making it one of the most important collector market indicators. Two pieces of identical era, model, and condition can differ significantly in price based solely on Big E vs Small e status.",
      },
      {
        headingJa: 'タブの向きによる年代判定',
        headingEn: 'Tab Orientation Dating',
        bodyJa: 'あまり知られていない指標として「タブの向き」があります。縦向き（文字が縦に読める）→1950年代以前。横向き（文字が横に読める）→1960年代以降標準。この指標は赤タブやケアラベルほど確実性は高くありませんが、他の指標と組み合わせることで年代判定の補助として機能します。特に「縦向きBig E」であれば1950年代以前の可能性が高まります。撮影の際はタブを引き出して文字の向きが確認できるよう正面から撮影してください。',
        bodyEn: "A lesser-known indicator is tab orientation. Vertical orientation (text reads vertically) = pre-1950s. Horizontal orientation (text reads horizontally) = standard from the 1960s onward. While not as definitive as the red tab case or care label, this indicator supplements other dating points. A 'vertical Big E' increases the probability of a pre-1950s piece. When photographing, pull out the tab and shoot from the front so the text orientation is clearly visible.",
      },
      {
        headingJa: 'オレンジタブとホワイトタブ',
        headingEn: 'Orange Tab and White Tab',
        bodyJa: 'オレンジタブ（1969〜1999年）はBig Eとは異なる廉価ライン向けのオレンジ色タブで、ベルボトム（646）などファッション向けモデルに使用されました。現在は廃止されており一定のコレクター人気があります。注意点として1969〜1971年の短期間はBig Eのオレンジタブが存在します。つまりオレンジタブでもBig E（両面大文字）であれば1969〜1971年の可能性があります。ホワイトタブは特定の限定モデルに使用されています。オレンジタブとSmall eの赤タブを混同しないよう注意してください。オレンジタブのBig E期は特に希少でコレクター価値が高いです。',
        bodyEn: "The orange tab (1969–1999) is an orange-colored tab for budget-line models like the bellbottom 646 — distinct from Big E. Now discontinued with its own collector following. Important note: Big E orange tabs (both sides uppercase) existed briefly from 1969–1971. This means an orange tab with Big E lettering suggests 1969–1971. White tabs appear on specific limited models. Be careful not to confuse orange tab with Small e red tab. Big E era orange tabs are especially rare with high collector value.",
      },
    ],
  },
  {
    slug: 'article-zipper',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ジッパーブランドで年代を特定する完全ガイド｜Scovill・Conmar・TALON・YKK',
    titleEn: 'Complete Zipper Brand Dating Guide — Scovill, Conmar, TALON, YKK',
    descJa: 'Scovill・Conmar・Eagle・TALON 42・YKKの違いと年代の対応関係を徹底解説。刻印の読み方・撮影のコツも。',
    descEn: 'Complete guide: Scovill, Conmar, Eagle, TALON 42, and YKK zipper brands mapped to their eras, with stamp reading tips.',
    tags: ['ジッパー', 'TALON', 'YKK', 'Scovill', 'Conmar'],
    sections: [
      {
        headingJa: 'なぜジッパーで年代がわかるのか',
        headingEn: 'Why Zippers Reveal the Era',
        bodyJa: 'ヴィンテージリーバイスの年代判定において、ジッパーブランドは赤タブ・ケアラベルと並ぶ最重要指標のひとつです。リーバイスが使用するジッパーブランドは年代によって明確に変化しており、ブランド名を確認するだけで製造年代を10年単位で絞り込めます。ただし501はボタンフライのためジッパーがなく、505・517・557XXなどジッパーフライのモデルに有効です。ジッパーブランドは赤タブやケアラベルと組み合わせることで、さらに精密な年代判定が可能になります。複数の指標を組み合わせて判断することが確実な鑑定の基本です。',
        bodyEn: "Zipper brand is one of the top three dating indicators for vintage Levis alongside the red tab and care label. The brands Levis used changed clearly over the decades, allowing era narrowing to within roughly ten years. Note this applies to zipper-fly models like the 505, 517, and 557XX — the 501 has no zipper. Combining zipper brand with red tab and care label yields higher-precision dating. Using multiple indicators rather than any single one is the foundation of reliable identification.",
      },
      {
        headingJa: 'Scovill（1930〜1950年代前半）超希少',
        headingEn: 'Scovill (1930s–early 1950s) — Ultra-Rare',
        bodyJa: 'Scovill（スコービル）はアメリカの老舗ジッパーメーカーで、リーバイスが最も初期に使用したジッパーブランドです。「SCOVILL」または「SCOVILL GRIPPER」という刻印が特徴です。Scovill刻印を持つリーバイスは現存数が極めて少なく、ヴィンテージ市場では最も希少なジッパーブランドのひとつとして知られています。1930年代後半から1950年代前半にかけて使用されており、Big Eタブ・本革パッチ・ケアラベルなしと組み合わさることが多いです。Scovill刻印が確認できた場合は、他のポイントとの整合性を確認した上で超希少品として評価できます。',
        bodyEn: "Scovill is an American zipper manufacturer and one of the earliest brands used by Levis. Stamped 'SCOVILL' or 'SCOVILL GRIPPER.' Surviving Levis with Scovill stamps are extremely scarce, making it one of the rarest zipper brands in the vintage market. Used from the late 1930s through the early 1950s, it typically accompanies Big E tab, leather patch, and no care label. When a Scovill stamp is confirmed, verify consistency with other points before assessing as ultra-rare.",
      },
      {
        headingJa: 'Conmar（1940〜1950年代前半）希少',
        headingEn: 'Conmar (1940s–early 1950s) — Rare',
        bodyJa: 'Conmar（コンマー）はアメリカ製のジッパーブランドで「CONMAR」または「CONMAR GRIPPER」の刻印が特徴です。Scovill同様に現存数が少なく、Conmarジッパーを持つリーバイスは希少品として扱われます。1940年代から1950年代前半にかけて使用されており、Big Eタブ・ケアラベルなしと組み合わさることが典型的です。ConmarにもEagleブランドがあり、「EAGLE」刻印も同時代（1940〜1950年代）のジッパーブランドとして確認できます。TALONより古い時代のジッパーブランドであるため、Conmar刻印があればTALON期より古い可能性が高くなります。',
        bodyEn: "Conmar is an American zipper brand stamped 'CONMAR' or 'CONMAR GRIPPER.' Like Scovill, surviving examples are rare, making Conmar-equipped Levis rare pieces. Used during the 1940s through early 1950s, it typically accompanies Big E tab and no care label. Eagle is another brand from the same era, with 'EAGLE' stamps visible on 1940s–1950s zippers. Since Conmar predates TALON, a Conmar stamp suggests an older piece than TALON-era examples.",
      },
      {
        headingJa: 'TALON 42 / TALON（1950〜1970年代前半）',
        headingEn: 'TALON 42 / TALON (1950s–early 1970s)',
        bodyJa: 'TALONはアメリカの老舗ジッパーメーカーで、リーバイスが最も長く使用したジッパーブランドです。「TALON 42」と「TALON（42なし）」の2種類があり、年代が異なります。TALON 42（1950〜1960年代）：スライダーのプル部分または本体に「TALON 42」と刻印。「42」はスライダーのサイズ規格を表します。Big E全盛期の中核を担うジッパーです。TALON（42なし）（1960年代後半〜1970年代前半）：同じTALONブランドですが「42」の刻印がない後期仕様です。Big E末期〜Small e初期と重なります。TALONの刻印は小さく摩耗していることが多いため、斜め光での撮影が有効です。',
        bodyEn: "TALON is a major American zipper manufacturer and the brand Levis used the longest. Two variants exist with different eras. TALON 42 (1950s–1960s): stamped 'TALON 42' on the pull tab or slider body — '42' denotes the slider size specification. This represents the core Big E era. TALON no 42 (late 1960s–early 1970s): same brand without the '42' stamp — overlaps with the final Big E period through the early Small e era. TALON stamps are small and often worn — angled side lighting is essential for photography.",
      },
      {
        headingJa: 'YKK（1970年代〜現在）',
        headingEn: 'YKK (1970s–present)',
        bodyJa: 'YKK（ワイケーケー）は日本の吉田工業（現YKKグループ）が製造するジッパーで、現在も世界最大のジッパーブランドです。リーバイスは1970年代初頭にコスト削減のためYKKを採用しました。YKKの刻印は「YKK」の文字が比較的大きく読みやすいため、他のブランドに比べて確認しやすいです。YKKジッパーを持つリーバイスは1970年代以降の製品ですが、ケアラベル・セルビッジ・タブと組み合わせることで10年単位での絞り込みが可能です。セルビッジ＋YKKの組み合わせであれば1981年以前（セルビッジ廃止まで）と判定できます。',
        bodyEn: "YKK (Yoshida Kogyo Kabushikikaisha) is a Japanese manufacturer and currently the world's largest zipper brand. Levis adopted YKK in the early 1970s for cost reduction. YKK stamps are relatively large and readable — easier to confirm than other brands. YKK-equipped Levis date to the 1970s onward, but combining with care label, selvedge, and tab allows decade-level narrowing. Selvedge + YKK together confirms pre-1981 (before selvedge was discontinued).",
      },
      {
        headingJa: '年代早見表と撮影のコツ',
        headingEn: 'Era Reference and Photography Tips',
        bodyJa: 'ジッパーブランド年代早見表：Scovill/Scovill Gripper→1930〜1950年代前半。Conmar/Conmar Gripper→1940〜1950年代前半。Eagle→1940〜1950年代。TALON（Tロゴ・ラダー状の歯）→1940〜1950年代。TALON 42→1950〜1960年代。TALON（42なし）→1960年代後半〜1970年代前半。YKK→1970年代〜現在。撮影のコツ：スライダーのプル部分と本体の両面を撮影する・スマートフォンのライトを斜め45度から当てて刻印を浮き上がらせる・マクロモードで接写する・ジッパーを少し開いた状態でスライダーを引き出すと撮影しやすい。',
        bodyEn: "Quick reference: Scovill/Scovill Gripper = 1930s–early 1950s. Conmar/Conmar Gripper = 1940s–early 1950s. Eagle = 1940s–1950s. TALON (T-logo, ladder teeth) = 1940s–1950s. TALON 42 = 1950s–1960s. TALON no 42 = late 1960s–early 1970s. YKK = 1970s–present. Photography tips: photograph both the pull tab and both faces of the slider body; hold phone light at 45 degrees to make stamps stand out; use macro mode; slightly open the zipper and pull out the slider for easier photography.",
      },
    ],
  },
  {
    slug: 'article-care-label',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ケアラベルで年代を10年単位で特定する完全ガイド',
    titleEn: 'Complete Care Label Dating Guide — Narrowing to a Decade',
    descJa: '1971年義務化から数字コード・バットウィングロゴ・4桁日付コードまで。ケアラベルで年代を10年単位で絞り込む完全解説。',
    descEn: 'From 1971 mandatory introduction to number codes, batwing logo, and 4-digit date codes — narrowing era to a decade with care labels.',
    tags: ['ケアラベル', '1971年', '数字コード', '年代判定'],
    sections: [
      {
        headingJa: 'ケアラベルが年代判定の決定打になる理由',
        headingEn: 'Why Care Labels Are the Definitive Dating Tool',
        bodyJa: 'ケアラベルはヴィンテージリーバイス年代判定において最も法的根拠のある指標です。1971年7月にアメリカ連邦取引委員会（FTC）が施行した「Care Labeling Rule」により、アメリカで販売されるすべての衣類に洗濯表示の記載が義務付けられました。この法律は現在も有効であるため、ケアラベルの有無だけで1971年を確実に判断できます。さらにケアラベルの内容（言語数・絵記号・日付コード・ロゴ）を読み解くことで、年代を10年単位で絞り込むことも可能です。赤タブと組み合わせれば多くの場合5〜10年単位の精密な判定ができます。',
        bodyEn: "Care labels are the most legally grounded dating tool for vintage Levis. The US Federal Trade Commission's 1971 Care Labeling Rule made washing instructions legally mandatory on all garments sold in America. Since this law remains in effect today, the presence or absence of a care label alone definitively determines pre/post-1971. Reading the label content (number of languages, pictograms, date codes, logos) further narrows the era to within a decade. Combined with the red tab, most pieces can be dated to within 5–10 years.",
      },
      {
        headingJa: 'ポケット袋内印刷（1968〜1972年）',
        headingEn: 'Pocket Bag Printing (1968–1972)',
        bodyJa: 'ケアラベルが義務化される前後の移行期（1968〜1972年頃）、リーバイスはポケットの袋（内布）の内側に洗濯方法を直接プリントしていました。これは法的義務化前に自主的にケア情報を提供していた証拠です。ポケット袋内側に「WASH WARM」「TUMBLE DRY」などの英語が印刷されており、外から見えない部分に記載されています。この仕様はその後のラベルタグ方式に移行したため、ポケット袋内印刷＝1968〜1972年頃の移行期モデルという判定ができます。Big Eタブと組み合わされば1968〜1971年のBig E末期として特定できる可能性があります。',
        bodyEn: "During the transition period surrounding mandatory care labeling (c.1968–1972), Levis printed washing instructions directly inside the pocket bag lining. This predates mandatory labeling as a voluntary measure. Text like 'WASH WARM' and 'TUMBLE DRY' appears printed inside the pocket lining, invisible from outside. This method was replaced by sewn label tags, so pocket bag printing indicates a transition-era model (c.1968–1972). Combined with a Big E tab, this can identify a late Big E era piece (1968–1971).",
      },
      {
        headingJa: '紙製ケアラベルと数字コードの読み方（1973〜1983年）',
        headingEn: 'Paper Care Label & Number Code Reading (1973–1983)',
        bodyJa: '1973年から1983年頃にかけて、リーバイスは左側縫い目付近に小さな紙製ケアラベルを使用しました。このラベルには数字コードが記載されており、読み解くことで型番・製造月・製造年・工場が特定できます。読み方：赤丸の数字＝型番（例：501）・青丸の数字＝製造月（1〜12月）・黄丸の数字＝製造年（1桁）・緑丸の数字＝工場コード（ボタン裏刻印と一致）。製造年1桁の解釈：セルビッジ＋シングルステッチ→1970年代・セルビッジ＋チェーンステッチ→1983年前後・非セルビッジ→1990年代。またケアラベルの先頭行に「SF 207」とある場合は1971〜1978年の製品です。',
        bodyEn: "From 1973 to around 1983, Levis used small paper care labels near the left side seam. These labels contain number codes that, when decoded, identify the model, manufacturing month, year, and factory. Reading method: red circle number = model number (e.g. 501), blue circle number = manufacturing month (1–12), yellow circle number = manufacturing year (1 digit), green circle number = factory code (matches button back stamp). Interpreting the 1-digit year: selvedge + single stitch = 1970s, selvedge + chain stitch = c.1983, non-selvedge = 1990s. If the top line reads 'SF 207,' the piece dates to 1971–1978.",
      },
      {
        headingJa: 'バットウィングロゴ・Care on Reverse（1986〜1992年）',
        headingEn: 'Batwing Logo & Care on Reverse (1986–1992)',
        bodyJa: '1986年以降のケアラベルにはリーバイスのバットウィング（こうもり型）ロゴが印刷されるようになりました。バットウィングロゴ付きケアラベル＝1986年以降確定という判定ができます。また「Care on Reverse（裏面参照）」という表記が入っているケアラベルは1992年以前の製品です。これら二つの指標を組み合わせると、バットウィングロゴあり＋Care on Reverse表記あり＝1986〜1992年という精密な判定が可能になります。セルビッジなし（1981年以降）・バットウィングロゴあり（1986年以降）・Care on Reverse（1992年以前）の三点が揃えば1986〜1992年と絞り込めます。',
        bodyEn: "From 1986 onward, care labels featured the Levis batwing logo. Batwing logo on care label = confirmed post-1986. The 'Care on Reverse' notation indicates a pre-1992 piece. Combining these two indicators: batwing logo present + 'Care on Reverse' present = 1986–1992, enabling precise dating. No selvedge (post-1981) + batwing logo (post-1986) + Care on Reverse (pre-1992) together narrows the piece to 1986–1992.",
      },
      {
        headingJa: '3桁・4桁日付コードと現代ラベル（1984年〜）',
        headingEn: '3 & 4 Digit Date Codes and Modern Labels (1984+)',
        bodyJa: '1984年頃から3桁の日付コードがケアラベルに記載されるようになりました。例：「127」＝1987年12月（最初の1〜2桁が月・最後の1桁が年の下1桁）。1993年以降は4桁の日付コードに変更されました。例：「1295」＝1995年12月（最初の2桁が月・最後の2桁が年）。バーコードやQRコードが付いているケアラベルは1990年代以降の製品です。「MADE IN USA」の表記がケアラベルにある場合は2002年以前（バレンシア工場閉鎖）。「www.levi.com」などのURLが記載されていれば2000年代以降確定です。これらのコードを読み解けば、ケアラベル単体でも±2〜3年の精度で年代判定できます。',
        bodyEn: "From around 1984, 3-digit date codes appeared on care labels. Example: '127' = December 1987 (first 1–2 digits = month, last digit = year's last digit). From 1993, this changed to 4-digit codes. Example: '1295' = December 1995 (first 2 digits = month, last 2 digits = year). Care labels with barcodes or QR codes date to the 1990s onward. 'MADE IN USA' on the care label means pre-2002 (Valencia factory closed). URLs like 'www.levi.com' confirm post-2000s. Decoding these codes enables ±2–3 year accuracy from the care label alone.",
      },
    ],
  },
  {
    slug: 'article-505',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス505完全ガイド｜70505の見分け方とジッパー年代判定',
    titleEn: "Levis 505 Complete Guide — Identifying the 70505 and Zipper Dating",
    descJa: '1967年誕生の505。Big E期70505の識別・ジッパーブランドによる精密年代判定・501との違いを完全解説。',
    descEn: "The 505 born in 1967. Complete guide to identifying the Big E era 70505, precise zipper dating, and differences from the 501.",
    tags: ['505', '70505', 'Big E', 'TALON', 'ジッパーフライ'],
    sections: [
      {
        headingJa: 'リーバイス505とは',
        headingEn: "What is the Levis 505?",
        bodyJa: 'リーバイス505は1967年に発売されたジッパーフライのストレートジーンズです。501のボタンフライに対してジッパーフライを採用し、より現代的な使いやすさを実現しました。シルエットは501に近いストレートですが、股上がやや浅くよりスリムな印象です。1967年の発売から1971年までのBig E期は「70505」という品番で呼ばれ、コレクターから高い人気を誇ります。505の最大の特徴はジッパーを持つことで、ジッパーブランドによる年代判定が可能です。501にはないこの鑑定ポイントを活用することで、10年単位の精密な年代判定ができます。',
        bodyEn: "The Levis 505 is a zipper-fly straight jean released in 1967, offering more modern convenience than the 501's button fly. The silhouette is close to the 501 but with a slightly lower rise and slimmer impression. From its 1967 launch until 1971, Big E era examples carry the '70505' model number and are highly coveted by collectors. The 505's greatest advantage for dating is its zipper — enabling zipper-brand dating unavailable on the 501. This additional identification point allows decade-level precision dating.",
      },
      {
        headingJa: '70505（Big E期・1967〜1971年）の識別',
        headingEn: '70505 (Big E Era, 1967–1971) Identification',
        bodyJa: '70505はBig E期（1967〜1971年）の505に付けられた品番で、コレクター市場で最も高く評価される505です。識別のポイント：品番「70505」→ウエストバンド内側タグまたはバックポケット上部のペーパーラベルで確認。赤タブ両面大文字「LEVIS」（Big E）→1971年以前確定。ケアラベルなし→1971年以前確定。TALONジッパー（42あり・またはなし）→Big E期を支持。セルビッジあり→1981年以前（Big E期なら当然あり）。アウトシーム：オレンジ/白オーバーロックなし（セルビッジ）→1981年以前。これらが揃えば真の70505と判定できます。',
        bodyEn: "70505 is the model number for Big E era (1967–1971) 505s — the most highly valued 505 in the collector market. Identification points: model number '70505' → confirm on inside waistband tag or back pocket paper label. Big E red tab (both sides uppercase 'LEVIS') → confirmed pre-1971. No care label → confirmed pre-1971. TALON zipper (with or without 42) → supports Big E era. Selvedge present → pre-1981 (expected on Big E era). No orange/white overlock on outseam (selvedge instead) → pre-1981. All these together confirm a genuine 70505.",
      },
      {
        headingJa: 'ジッパーブランドによる精密年代判定',
        headingEn: 'Precise Dating by Zipper Brand',
        bodyJa: '505のジッパーブランドによる年代判定は以下の通りです。Scovill/Conmar→1950年代以前（505誕生前の関連モデル・超希少）。TALON 42→1950〜1960年代（505誕生時期と重なる最初期〜前半）。TALON（42なし）→1960年代後半〜1970年代前半（70505の主要ジッパー）。YKK→1970年代以降（Small e期の標準ジッパー）。TALONとYKKの移行期（1970年代前半）には両方が混在する場合があります。TALON 42＋Big Eタブ＋ケアラベルなし→最初期70505の可能性。TALON（42なし）＋Big Eタブ＋ケアラベルなし→70505後期。YKK＋Small eタブ＋ケアラベルあり→1971年以降の505。',
        bodyEn: "505 zipper brand dating: Scovill/Conmar = pre-1950s (pre-505 related models, ultra-rare). TALON 42 = 1950s–1960s (earliest 505 era). TALON no 42 = late 1960s–early 1970s (primary 70505 zipper). YKK = post-1970s (standard Small e era zipper). Both TALON and YKK may appear during the early 1970s transition. TALON 42 + Big E tab + no care label = possibly earliest 70505. TALON no 42 + Big E tab + no care label = later 70505. YKK + Small e tab + care label = post-1971 505.",
      },
      {
        headingJa: '501との違いと見分け方',
        headingEn: 'Differences from the 501',
        bodyJa: '501と505の最大の違いはフライ（前開き）です。ボタンが縦に並んでいれば501・ジッパーがあれば505です。シルエットも微妙に異なり505の方がやや細身でモダンな印象です。品番はウエストバンドの内側タグまたはバックポケット上部のペーパーラベルで確認できます。「70505」という表記があればBig E期（1967〜1971年）の初期モデルです。501はボタンフライのためジッパー年代判定ができませんが、505はジッパーブランドで10年単位の精密判定が可能です。これが505鑑定の最大の強みです。',
        bodyEn: "The key difference between the 501 and 505 is the fly — vertical buttons = 501, zipper = 505. The 505 silhouette is slightly slimmer and more modern. The model number appears on the inside waistband tag or back pocket paper label: '70505' indicates a Big E era model (1967–1971). While the 501 offers no zipper for dating, the 505's zipper brand enables decade-level precision dating. This is the 505's greatest identification advantage.",
      },
      {
        headingJa: '年代別の特徴と価値',
        headingEn: 'Era Features and Value',
        bodyJa: '1967〜1971年（70505・Big E期）：TALONジッパー・Big Eタブ・ケアラベルなし・セルビッジ・オレンジ/黄色アルキュエート糸。最も希少で価値が高い。1971〜1975年：Small eタブ・英語のみケアラベル・TALONまたはYKKジッパー・セルビッジ継続。1975〜1981年：多言語ケアラベル・YKKジッパー・セルビッジ・3桁日付コード（1984年〜）。1981〜1986年：セルビッジなし・オレンジオーバーロック（1981〜1984年）または白オーバーロック（1985年〜）。1986年〜：バットウィングロゴ入りケアラベル・YKKジッパー。Big E期の70505は501のBig Eに次ぐコレクター人気で、コンディション・セルビッジ・タブの状態がそのまま価格に反映されます。',
        bodyEn: "1967–1971 (70505, Big E): TALON zipper, Big E tab, no care label, selvedge, orange/yellow arcuate thread — rarest and most valuable. 1971–1975: Small e tab, English-only care label, TALON or YKK, selvedge continuing. 1975–1981: multilingual care label, YKK, selvedge, 3-digit date codes (from 1984). 1981–1986: no selvedge, orange overlock (1981–84) or white overlock (from 1985). Post-1986: batwing logo care label, YKK zipper. The Big E 70505 holds the second most coveted collector status after the Big E 501 — condition, selvedge presence, and tab condition directly translate to price.",
      },
    ],
  },
  {
    slug: 'article-selvedge',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'セルビッジ・アウトシーム完全ガイド｜オーバーロック色で1981〜1993年を特定',
    titleEn: 'Complete Selvedge & Outseam Guide — Overlock Color Dating 1981–1993',
    descJa: 'セルビッジの確認方法に加え、オレンジ・白オーバーロックステッチ色による1981〜1993年の精密年代判定を解説。',
    descEn: 'Selvedge identification plus orange and white overlock stitch color for precise 1981–1993 dating.',
    tags: ['セルビッジ', '1981年', 'アウトシーム', 'オーバーロック'],
    sections: [
      {
        headingJa: 'セルビッジデニムとは',
        headingEn: 'What is Selvedge Denim?',
        bodyJa: 'セルビッジ（Selvedge）とはシャトル織機で織られたデニム生地の端処理のことです。「耳（ミミ）」とも呼ばれ、生地の両端に織り込まれた自己完結した縁が特徴です。ジーンズの裾を折り返すと内側に見える白い縁に赤や白の細いラインがセルビッジの証です。現代のデニムのほとんどはロータリー織機で大量生産されており、セルビッジは手間とコストのかかる希少な製法です。リーバイスは1981年頃にロータリー織機へ完全移行したため、セルビッジあり＝1981年以前（一般的には1985年以前）という判定が成立します。',
        bodyEn: "Selvedge refers to the self-finished edge of denim woven on a shuttle loom. Also called the 'ear' (mimi in Japanese), it creates a self-contained edge woven into both sides of the fabric. The telltale sign is a white edge with a thin red or white line visible inside the folded hem. Most modern denim is mass-produced on rotary looms, making selvedge a rare, labor-intensive method. Levis fully transitioned to rotary looms around 1981, making selvedge present = pre-1981 (generally pre-1985) a reliable dating conclusion.",
      },
      {
        headingJa: 'アウトシームのオーバーロック色による精密年代判定',
        headingEn: 'Outseam Overlock Color for Precise Dating',
        bodyJa: 'セルビッジが廃止された1981年以降、アウトシーム（外側縫い目）のオーバーロックステッチの色が年代判定の重要な指標になります。オレンジ色オーバーロックステッチ→1981〜1984年。白色オーバーロックステッチ→1985〜1993年。これにより、セルビッジなしのモデルでも1981〜1993年を10年以内に絞り込むことができます。確認方法：裾を折り返してアウトシーム（外側の縫い目）を見てください。ロック縫いの糸の色がオレンジ系であれば1984年以前、白系であれば1985〜1993年の可能性が高まります。ケアラベルの3桁日付コード（1984〜1992年）と組み合わせることでさらに精密な判定ができます。',
        bodyEn: "After selvedge was discontinued around 1981, the outseam overlock stitch color becomes an important dating indicator. Orange overlock stitch = 1981–1984. White overlock stitch = 1985–1993. This narrows non-selvedge models to within a decade for 1981–1993 examples. How to check: fold up the hem and examine the outseam (outer side seam). Orange-toned serging suggests pre-1984; white serging suggests 1985–1993. Combining with care label 3-digit date codes (1984–1992) enables even more precise dating.",
      },
      {
        headingJa: 'インシーム・バックポケットステッチによる年代判定',
        headingEn: 'Inseam & Back Pocket Stitch Dating',
        headingEn: 'Inseam & Back Pocket Stitch Dating',
        bodyJa: 'アウトシーム以外のステッチも年代判定に役立ちます。インシーム（内側縫い目）シングルステッチ→1980年代前半以前の特徴。バックポケットシングルロックステッチ（内側）→1978年以前。バックポケットダブルロックステッチ→1978年以降。ウエストバンド内側チェーンステッチ→1970年以降の特徴。これらのステッチの違いは肉眼で確認できますが、接写撮影が必要です。スマートフォンのマクロモードで内側縫い目を撮影することで、AI鑑定の精度も向上します。',
        bodyEn: "Stitching beyond the outseam also aids dating. Inseam (inner seam) single stitch = characteristic of pre-early 1980s. Back pocket single lock stitch (inside) = pre-1978. Back pocket double lock stitch = post-1978. Waistband interior chain stitch = characteristic from 1970 onward. These stitch differences are visible to the naked eye but require close-up photography. Using smartphone macro mode to photograph interior seams also improves AI identification accuracy.",
      },
      {
        headingJa: 'セルビッジの確認・撮影方法',
        headingEn: 'How to Check and Photograph Selvedge',
        bodyJa: 'セルビッジの確認はとても簡単です。ジーンズの裾を3〜4cm折り返し内側の端を見てください。白い縁（耳）に赤や白の細いラインがあればセルビッジあり→1985年以前の証拠です。端が切りっぱなしでロック縫いだけならセルビッジなし→オーバーロック色で1981年以降の年代をさらに絞ります。撮影は裾を折り返した状態で白い耳が画面内に収まるよう明るい場所で行ってください。同時にアウトシームのオーバーロック色も撮影することで、AI鑑定の精度が大幅に向上します。両足とも確認することで確実性が増します。',
        bodyEn: "Checking for selvedge is simple. Fold up the hem 3–4cm and look at the inner edge. White edge (ear) with a thin red or white line = selvedge present → pre-1985 proof. Cut edge with only a serged seam = no selvedge → use overlock color to further narrow the post-1981 era. Photograph with the hem folded so the white edge is clearly visible in good lighting. Also photograph the outseam overlock color at the same time — this significantly improves AI identification accuracy. Check both legs for certainty.",
      },
      {
        headingJa: 'セルビッジが価値を高める理由',
        headingEn: 'Why Selvedge Increases Value',
        bodyJa: 'セルビッジデニムがヴィンテージ市場で高い評価を受けるのは4つの理由があります。①年代証明：1985年以前の製品であることが確実になります。②生地の品質：シャトル織機のデニムは緻密で独特の風合いと堅牢性を持ちます。③希少性：現在では大量生産のセルビッジデニムを製造できるメーカーが限られています。④コレクター文化：特に日本のデニム愛好家がセルビッジに特別な価値を見出しています。日本では「セルビッジデニム＝品質の証」という認識が定着しており、セルビッジの有無で市場価値が大きく変わることがあります。セルビッジの「赤耳」（赤いライン）は特に高い評価を受けます。',
        bodyEn: "Selvedge commands premium prices in the vintage market for four main reasons. ①Era proof: confirms pre-1985 manufacture with certainty. ②Fabric quality: shuttle-loom denim is denser with distinctive texture and durability. ③Rarity: manufacturers capable of large-scale selvedge denim production are now limited. ④Collector culture: Japanese denim enthusiasts especially place special value on selvedge. In Japan, 'selvedge = quality' is well established, and presence or absence can significantly shift market value. The 'red ear' (red line on the selvedge edge) is particularly highly regarded.",
      },
    ],
  },
  {
    slug: 'article-button',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ボタン裏刻印完全ガイド｜1桁・3桁・工場番号の読み方',
    titleEn: 'Complete Button Back Stamp Guide — 1-Digit, 3-Digit & Factory Numbers',
    descJa: '1桁刻印・3桁刻印・アルファベット刻印の違い、主要工場番号一覧、SF工場が希少な理由、撮影のコツを完全解説。',
    descEn: '1-digit, 3-digit, and letter stamps explained, factory number reference, why SF factory is rare, and photography tips.',
    tags: ['ボタン刻印', '工場番号', 'SF工場', '1桁刻印'],
    sections: [
      {
        headingJa: 'ボタン裏刻印とは',
        headingEn: 'What are Button Back Stamps?',
        bodyJa: 'ヴィンテージリーバイスのフロントボタン裏面には小さな数字またはアルファベットが刻まれています。この刻印はリーバイスの製造工場を示す工場コードです。1950年代〜2002年頃のモデルに確認でき、どの工場で作られたかを特定する手がかりになります。刻印の種類は大きく3つに分かれます。1桁刻印→1970年代中頃以前の国内工場。3桁刻印（工場コード）→1980年代〜2002年の後期アメリカ製。アルファベット刻印（M・W等）→海外工場製。刻印の種類自体も年代判定の補助指標になります。',
        bodyEn: "A small number or letter stamped on the back of vintage Levis front buttons identifies the manufacturing facility. This factory code appears on models from roughly the 1950s through 2002. Three main stamp types exist. Single-digit stamp = pre-mid-1970s domestic factory. 3-digit stamp (factory code) = late American-made, 1980s–2002. Letter stamp (M, W, etc.) = overseas factory. The stamp type itself serves as a supplementary dating indicator.",
      },
      {
        headingJa: '刻印タイプと年代の関係',
        headingEn: 'Stamp Types and Their Eras',
        bodyJa: '刻印タイプによる年代判定：1桁刻印→1970年代中頃以前が多い。主要なアメリカ国内工場（1〜6番等）を示します。下線付き「6」刻印→1970年代に特徴的な仕様です。3桁刻印（例：230・453等）→1980年代〜2002年頃のアメリカ製後期に多く見られます。アルファベット刻印（M・W・E等）→海外工場製（メキシコ・ヨーロッパ等）で1990年代以降に多いです。数字なし（刻印なし）→非常に古い個体または摩耗で読み取り不能の場合があります。これらを赤タブ・ケアラベルと組み合わせることで年代と産地を同時に絞り込めます。',
        bodyEn: "Dating by stamp type: single-digit = pre-mid-1970s, mostly major US domestic factories (numbers 1–6 etc.). Underlined '6' = characteristic of 1970s. 3-digit stamp (e.g. 230, 453) = common in late American-made pieces, 1980s–2002. Letter stamp (M, W, E, etc.) = overseas factory (Mexico, Europe, etc.), common post-1990s. No stamp (unstamped) = very early piece or worn beyond reading. Combining these with red tab and care label simultaneously narrows era and country of origin.",
      },
      {
        headingJa: 'SF工場（1・2番）が最希少な理由',
        headingEn: 'Why SF Factory (Stamps 1 & 2) Are the Rarest',
        bodyJa: 'リーバイ・ストラウスは1853年にサンフランシスコへ移住し、1873年にバレンシア・ストリートに世界初のジーンズ工場を設立しました。ボタン裏刻印1番（Valencia Street工場）と2番（22nd Street工場）はまさにこのリーバイス発祥の地で作られた製品を示します。これらのSF工場はアメリカのジーンズ産業衰退とともに閉鎖されており、発祥地という歴史的価値と絶対数の少なさが相まってSF工場製リーバイスは特別な希少性を持ちます。同じ年代・型番・コンディションでもSF工場製かどうかで評価が変わることがあります。',
        bodyEn: "Levi Strauss emigrated to San Francisco in 1853 and established the world's first jeans factory on Valencia Street in 1873 — the very birthplace of Levis. Button stamps 1 (Valencia Street factory) and 2 (22nd Street factory) identify pieces made at this historic origin point. These SF factories closed as American denim manufacturing declined. The combination of historical significance as the brand's birthplace and limited surviving quantities gives SF factory Levis their special rarity — SF factory provenance can affect valuation even between same-era, same-condition pieces.",
      },
      {
        headingJa: '主要工場番号一覧',
        headingEn: 'Factory Number Reference',
        bodyJa: '主要な工場番号（1桁）の一覧：1番→Valencia Street Factory（San Francisco, CA）リーバイス発祥地・最希少。2番→22nd Street Factory（San Francisco, CA）SF第2工場・最希少。3番→Sioux City Factory（Iowa）中程度の希少性。4番→Amarillo Factory（Texas）標準的な希少性。5番→Blackstone Factory（Virginia）標準的な希少性。6番→El Paso Factory（Texas）標準的な希少性。工場番号の解釈は研究者によって諸説あります。また同じ番号でも時期によって工場が変わっている可能性があるため、他のポイントと組み合わせて総合的に判断することが重要です。',
        bodyEn: "Major factory numbers (single-digit): 1 = Valencia Street Factory (San Francisco, CA) — Levis birthplace, rarest. 2 = 22nd Street Factory (San Francisco, CA) — SF second factory, rarest. 3 = Sioux City Factory (Iowa) — moderate rarity. 4 = Amarillo Factory (Texas) — standard rarity. 5 = Blackstone Factory (Virginia) — standard rarity. 6 = El Paso Factory (Texas) — standard rarity. Factory number interpretations vary among researchers, and the same number may have corresponded to different facilities at different times. Always combine with other dating points for comprehensive assessment.",
      },
      {
        headingJa: '刻印の撮影方法',
        headingEn: 'How to Photograph the Stamp',
        bodyJa: 'ボタン裏の刻印は小さく摩耗していることが多く、正しい撮影方法が重要です。まずウエストバンドからボタンを引き出し裏面が見えるようにします。スマートフォンのライトを刻印に対して斜め45度程度から当てます（斜め光で凸凹が浮き上がる）。マクロモードで接写し数字が判読できる状態で撮影します。刻印が薄い場合は角度を変えながら複数枚撮影し最も鮮明なものを使用します。フロントの全ボタン（通常5個）を確認することで確実性が増し、複数のボタンに同じ番号が確認できれば信頼性も上がります。3桁刻印は比較的読みやすいですが、1桁刻印は摩耗していることが多いため特に斜め光が有効です。',
        bodyEn: "Button back stamps are small and often worn — correct photography technique is critical. Pull the button from the waistband to expose the back. Hold a phone light at roughly 45 degrees to the stamp (angled light makes the relief stand out). Use macro mode to shoot close-up, ensuring the number is legible in the frame. For faint stamps, try multiple angles and use the sharpest result. Checking all front buttons (usually five) increases certainty — confirming the same number on multiple buttons improves reliability. 3-digit stamps are relatively readable; single-digit stamps are often worn and especially benefit from angled lighting.",
      },
    ],
  },
  {
    slug: 'article-1950s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1950年代リーバイス完全ガイド｜501XX・Conmar・クロッチリベットの見分け方',
    titleEn: "Complete 1950s Levis Guide — 501XX, Conmar Zipper & Crotch Rivet Identification",
    descJa: '最希少期501XXの本革パッチ・Conmar/Scovill/TALON 42ジッパー・クロッチリベット・シンチバックなど1950年代特有のディテールを完全解説。',
    descEn: "Complete guide to 1950s Levis: 501XX leather patch, Conmar/Scovill/TALON 42 zippers, crotch rivets, and cinch back details.",
    tags: ['1950年代', '501XX', 'Conmar', 'クロッチリベット', 'TALON 42'],
    sections: [
      {
        headingJa: '1950年代リーバイスの時代背景',
        headingEn: "1950s Levis — Historical Context",
        bodyJa: '1950年代はリーバイスにとって最大の転換期でした。マーロン・ブランド（映画「乱暴者」1953年）やジェームズ・ディーン（映画「理由なき反抗」1955年）がジーンズを着用したことで、リーバイスは労働者の作業着からヤングカルチャーのアイコンへと変貌しました。この時代のリーバイスは「501XX」と呼ばれ、現在でもヴィンテージ市場で最も希少で価値の高いカテゴリのひとつです。1950年代は前半（〜1954年頃・本革パッチ期）と後半（1954〜1960年・Jacronパッチ期）で仕様が異なります。使用された素材・縫製技術・ジッパー・リベットのすべてが現代とは異なり、コレクターにとって特別な魅力を持ちます。',
        bodyEn: "The 1950s were the biggest turning point for Levis. Marlon Brando (The Wild One, 1953) and James Dean (Rebel Without a Cause, 1955) wearing jeans transformed Levis from workwear to youth culture icon. Levis from this era are called '501XX' and remain one of the rarest and most valuable vintage categories. The 1950s divides into early (pre-c.1954, leather patch era) and late (1954–1960, Jacron patch era) with different specifications. Every aspect — materials, construction, zippers, and rivets — differs from modern production, giving these pieces special collector appeal.",
      },
      {
        headingJa: '1950年代前半（〜1954年）のディテール詳解',
        headingEn: 'Early 1950s (pre-1954) Details',
        bodyJa: '1950年代前半の501XXを見分けるための主要ポイントです。本革パッチ（Two Horse Brand）：バックウエストの二頭の馬のデザインが本革製。合皮への変更は1954年頃。赤タブ：商標R付き・両面大文字Big E（1950〜1971年の仕様）。ケアラベルなし：1971年以前のためなし。セルビッジデニム：シャトル織機で織られた耳付きデニム。ジッパー（505等）：Conmar・Scovill・Eagle・TALON 42ジッパーが確認できれば1950年代前半の可能性大。リベット：バックポケット隠しリベット（1937〜1964年）・銅製凸文字（1960年代以前）。アルキュエート：オレンジ糸・高SPI（10〜11）・やや不均一。',
        bodyEn: "Key points for identifying early 1950s 501XX. Leather patch (Two Horse Brand): genuine leather two-horse design on back waist — changed to synthetic around 1954. Red tab: trademark R present, both sides uppercase Big E (1950–1971 spec). No care label: absent since pre-1971. Selvedge denim: shuttle-loom woven with ear. Zipper (505 etc.): Conmar, Scovill, Eagle, or TALON 42 strongly suggests early 1950s. Rivets: hidden back pocket rivets (1937–1964), copper with raised/convex lettering (pre-1960s). Arcuate: orange thread, high SPI (10–11), slightly irregular.",
      },
      {
        headingJa: '1950年代後半（1954〜1960年）のディテール',
        headingEn: 'Late 1950s (1954–1960) Details',
        bodyJa: '1954年頃から本革パッチがJacron（革風ボール紙）に変更されましたが、Big Eタブ・ケアラベルなし・セルビッジは継続しています。1962年に「Every Garment Guaranteed」スローガンが廃止されるまでJacronパッチに同スローガンが記載されています。ジッパーはTALON 42が主流で、1950年代後半〜1960年代を示します。アルキュエートはオレンジ糸からやや緩めのSPI（9〜10）に変化しています。この時代の個体は前半ほどの超希少性はないものの、Big Eタブ・ケアラベルなし・セルビッジ・TALON 42ジッパーの四点が揃えばコレクター市場で高い評価を受けます。',
        bodyEn: "From around 1954, the leather patch was replaced by Jacron (leather-like cardboard), but Big E tab, no care label, and selvedge continued. The 'Every Garment Guaranteed' slogan on Jacron patches was removed in 1962. TALON 42 zippers are dominant, indicating late 1950s through 1960s. Arcuate transitions from orange thread to slightly looser SPI (9–10). While not as ultra-rare as the early 1950s, Big E tab + no care label + selvedge + TALON 42 zipper together still commands strong collector valuations.",
      },
      {
        headingJa: 'WWII期S501XX（1942〜1947年）のディテール',
        headingEn: 'WWII Era S501XX (1942–1947) Details',
        bodyJa: '第二次世界大戦中のS501XX（S＝Simplified）は金属節約のため多くのディテールが簡略化されました。最大の特徴はアルキュエートステッチが縫製ではなく塗装（オレンジペイント）に変わっている点です。現在ではほとんどのペイントが剥落しており、バックポケットが無地に見えます。省略されたディテール：クロッチリベット（股部分の金属鋲）・コインポケットリベット・シンチバック（一部）。追加特徴：鉄製リベット（銅の代替）・「ローレルリーフ」模様のドーナツ型ボタン。WWII期S501XXは良好なコンディションであれば$6,000以上の価値があるとされる超希少品です。',
        bodyEn: "WWII-era S501XX (S=Simplified) simplified many details for metal conservation. The most distinctive feature is arcuate replaced by orange paint — now almost entirely worn off, leaving plain-looking back pockets. Eliminated details: crotch rivet (at button fly base), coin pocket rivet, cinch back (some examples). Additional features: iron rivets (copper substitute), 'laurel leaf' donut-style buttons. WWII-era S501XX in good condition is valued at $6,000+, treated as an ultra-rare piece.",
      },
      {
        headingJa: '1950年代モデルの価値と注意点',
        headingEn: '1950s Value and Cautions',
        bodyJa: '1950年代のリーバイスは製造から70年以上が経過しており良好なコンディションの個体は年々減少しています。価値の評価ポイント：本革パッチの残存状態・Big Eタブの鮮明さ・セルビッジの状態・ジッパーブランド・リベットの種類。注意点：①偽造・改造品：本革パッチを後付けしたものや、年代を偽って出品されるケースがあります。複数のポイントの整合性を必ず確認してください。②LVC復刻品：Levis Vintage Clothingの復刻品は本物と酷似しているため要注意です。③写真だけでの断定は危険：AI鑑定は参考程度に留め、高額品は専門家への相談を推奨します。',
        bodyEn: "1950s Levis are now 70+ years old and good-condition examples grow rarer each year. Value assessment points: leather patch condition, Big E tab clarity, selvedge condition, zipper brand, rivet type. Cautions: ①Fakes and alterations — leather patches can be added later, and era misrepresentation occurs. Always verify consistency across multiple points. ②LVC reproductions — Levis Vintage Clothing reproductions closely resemble genuine vintage, requiring careful verification. ③Photo-only identification has limits — use AI identification as a reference, and for high-value pieces consider consulting an expert.",
      },
    ],
  },
  {
    slug: 'article-1960s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1960年代リーバイス完全ガイド｜Big E全盛期・TALON・Vステッチの見分け方',
    titleEn: "Complete 1960s Levis Guide — Big E Prime Era, TALON & V-Stitch Identification",
    descJa: 'Big E全盛期の1960年代。前半（TALON 42・Vステッチ）と後半（TALON・505誕生・オレンジタブ登場）の違いを詳解。',
    descEn: "1960s Big E prime era: early (TALON 42, V-stitch) vs late (TALON, 505 born, orange tab debut) differences explained.",
    tags: ['1960年代', 'Big E全盛', 'TALON 42', 'Vステッチ', '505誕生'],
    sections: [
      {
        headingJa: '1960年代リーバイスの時代背景',
        headingEn: "1960s Levis — Historical Context",
        bodyJa: '1960年代はリーバイスがグローバルブランドとして飛躍した時代です。ベトナム戦争・公民権運動・ヒッピーカルチャーなど激動の時代を背景に、ジーンズはアメリカのカウンターカルチャーの象徴となりました。ビートルズやローリング・ストーンズなどのロックミュージシャンが着用し、ヨーロッパや日本でも人気が広まりました。この時代のリーバイスはすべてBig E期にあたり、ケアラベルなし・セルビッジデニムという高品質な仕様を維持していました。1967年には505が、1969年にはオレンジタブラインが誕生し、製品ラインナップが大きく拡充された時代でもあります。',
        bodyEn: "The 1960s saw Levis emerge as a global brand. Against the backdrop of Vietnam, the Civil Rights Movement, and hippie culture, jeans became a symbol of American counterculture. The Beatles, Rolling Stones, and other rock musicians spread their popularity to Europe and Japan. All Levis from this era fall within the Big E period, maintaining high-quality no-care-label, selvedge denim specification. 1967 saw the birth of the 505, and 1969 saw the orange tab line debut — a decade of significant product line expansion.",
      },
      {
        headingJa: '1960年代前半（1960〜1965年頃）のディテール',
        headingEn: 'Early 1960s (c.1960–1965) Details',
        bodyJa: '1960年代前半の主要ディテールです。赤タブ：商標R付き・両面大文字Big E。ケアラベルなし。セルビッジあり。ジッパー（505等）：TALON 42が主流（1950〜1960年代の指標）。バックポケットリベット：隠しリベット（1937〜1964年）→1964〜1966年頃からバータック留めに変更。バックベルトループ：若干オフセンター（1947〜1965年の特徴）。アルキュエート：オレンジ糸・SPI9〜10・比較的均一。Vステッチ（ボタンフライ縁）→1969年以前の特徴。パッチ：Jacron（「Every Garment Guaranteed」は1962年廃止）。',
        bodyEn: "Early 1960s key details. Red tab: trademark R, both sides uppercase Big E. No care label. Selvedge present. Zipper (505 etc.): TALON 42 dominant (1950s–1960s indicator). Back pocket rivets: hidden rivets (1937–1964) → transitioning to bartack closure around 1964–1966. Back belt loop: slightly off-center (1947–1965 characteristic). Arcuate: orange thread, SPI 9–10, relatively uniform. V-stitch on button fly edge = pre-1969 feature. Patch: Jacron ('Every Garment Guaranteed' removed 1962).",
      },
      {
        headingJa: '1960年代後半（1965〜1971年）のディテール',
        headingEn: 'Late 1960s (1965–1971) Details',
        bodyJa: '1960年代後半は1967年に505が、1969年にオレンジタブラインが誕生した転換期です。主要ディテール：赤タブ：商標R付き・両面大文字Big E継続。ケアラベルなし継続。セルビッジあり継続。ジッパー（505等）：TALON（42なし）に移行。TALONに「42」刻印がなければ60年代後半〜70年代前半。バックポケットリベット：バータック留めが標準化（1964〜1966年以降）。Vステッチ廃止（1969年以降）。アルキュエート：レモン/黄色糸が登場（1960〜1970年代中頃）。黄色糸が確認できれば1970年代中頃以前確定。オレンジタブBig E（1969〜1971年）：短期間存在の超希少仕様。',
        bodyEn: "Late 1960s was a pivotal era with the 505 born in 1967 and orange tab line in 1969. Key details: red tab: trademark R, both sides uppercase Big E continuing. No care label continuing. Selvedge continuing. Zipper (505 etc.): transition to TALON (no 42). TALON without '42' stamp = late 1960s–early 1970s. Back pocket rivets: bartack closure standardized (post-1964–1966). V-stitch eliminated (post-1969). Arcuate: lemon/yellow thread appears (1960s–mid-1970s). Any yellow thread confirms pre-mid-1970s. Big E orange tab (1969–1971): ultra-rare short-run specification.",
      },
      {
        headingJa: 'Vステッチとは｜1969年以前の指標',
        headingEn: 'What is the V-Stitch — Pre-1969 Indicator',
        bodyJa: 'Vステッチとはボタンフライの縁（右端）に施されたV字形のステッチのことです。1969年以前のリーバイスに見られる特徴で、1969年以降は廃止されました。Vステッチあり→1969年以前確定という判定ができます。赤タブのBig E（1971年以前）とVステッチ（1969年以前）が両方確認できれば、1969年以前の初期Big E期と絞り込めます。Vステッチは正面からボタンフライを撮影することで確認できます。比較的見落とされやすい指標ですが、Big E期をさらに精密化するために有効です。',
        bodyEn: "The V-stitch is a V-shaped stitch on the right edge of the button fly. Found on pre-1969 Levis, it was eliminated after 1969. V-stitch present = confirmed pre-1969. Both Big E tab (pre-1971) and V-stitch (pre-1969) present together narrow the piece to pre-1969 early Big E era. The V-stitch is confirmed by photographing the button fly from the front. It's a relatively easy-to-overlook indicator but useful for further narrowing within the Big E era.",
      },
      {
        headingJa: '1960年代モデルの価値と黄色糸の重要性',
        headingEn: '1960s Value and the Importance of Yellow Thread',
        bodyJa: '1960年代のリーバイスはBig E全盛期の中核として高いコレクター人気を誇ります。特に価値が高い組み合わせ：TALON 42＋Big E＋ケアラベルなし＋セルビッジ→1960年代前半の可能性大（最高評価）。TALON（42なし）＋Big E＋ケアラベルなし＋セルビッジ→1960年代後半の可能性（高評価）。黄色/レモン色のアルキュエートステッチ糸は特に希少で、黄色糸が確認できる個体はコレクターから特別視されます。Vステッチも残存していれば評価がさらに上がります。Big Eオレンジタブ（1969〜1971年）は短期間のみ存在した超希少仕様として別格の評価を受けます。',
        bodyEn: "1960s Levis command strong collector interest as the core of the Big E prime era. Highest-value combinations: TALON 42 + Big E + no care label + selvedge = likely early 1960s (maximum valuation). TALON no 42 + Big E + no care label + selvedge = likely late 1960s (high valuation). Lemon/yellow arcuate thread is particularly rare — examples with visible yellow thread are especially prized by collectors. V-stitch presence adds further value. Big E orange tab (1969–1971) is a separate ultra-rare specification from this brief window.",
      },
    ],
  },
  {
    slug: 'article-1970s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1970年代リーバイス完全ガイド｜1971年の転換・オーバーロック・数字コードで精密判定',
    titleEn: "Complete 1970s Levis Guide — The 1971 Shift, Overlock Color & Date Code Precision Dating",
    descJa: '1971年Big E終了・ケアラベル義務化・YKK移行・オーバーロック色・3桁日付コードまで。1970年代を年単位で絞り込む完全ガイド。',
    descEn: "1971 Big E end, mandatory care labels, YKK adoption, overlock color, and 3-digit date codes — the complete guide to narrowing 1970s pieces by year.",
    tags: ['1970年代', '1971年転換', 'YKK', 'オーバーロック', '数字コード'],
    sections: [
      {
        headingJa: '1970年代リーバイスの概要',
        headingEn: "1970s Levis Overview",
        bodyJa: '1970年代はリーバイスにとって最大の転換期でした。1971年7月にケアラベル義務化・赤タブ小文字化・YKKジッパー採用が進み、長く続いたBig E期が終わりを告げました。同時にディスコ文化・グルーヴ時代を反映したベルボトム（646）・フレアカット（578）などの新シルエットが誕生し、ファッションとしてのジーンズが最盛期を迎えた時代でもあります。1970年代のリーバイスは前半（〜1971年・Big E末期）・中期（1971〜1975年）・後半（1975〜1981年）・末期（1981年〜）で仕様が大きく異なるため、各時期の判定指標を把握することが重要です。',
        bodyEn: "The 1970s were the biggest transition period for Levis. From July 1971, mandatory care labels, lowercase tab, and YKK zipper adoption ended the long Big E era. Simultaneously, new silhouettes reflecting disco and groove culture — bellbottom 646, flare cut 578 — emerged, making it the peak era for jeans as fashion. 1970s Levis differ significantly across four periods: early (pre-1971, final Big E), mid (1971–1975), late (1975–1981), and end (1981+). Understanding each period's indicators is key.",
      },
      {
        headingJa: '1970〜1971年前半（Big E末期）のディテール',
        headingEn: 'Early 1970–1971 (Final Big E) Details',
        bodyJa: '1970年〜1971年前半はBig E期の最末期です。この時期の個体はBig E全盛期と同等の評価を受けます。主要ディテール：赤タブ：商標R付き・両面大文字Big E（最後のBig E仕様）。ケアラベルなし（1971年7月以前）。セルビッジあり。TALONジッパー（42なし）。バックポケット：バータック留め（リベットなし）。アルキュエート：オレンジ/銅色糸または黄色糸（移行期）。黄色糸が確認できれば1970年代中頃以前確定。ウエストバンド内側チェーンステッチ→1970年以降の特徴。Big E末期の個体はケアラベルなし・大文字タブが揃えば最高評価を受けます。',
        bodyEn: "Early 1970 to mid-1971 represents the final Big E era. These pieces receive equivalent valuation to prime Big E examples. Key details: red tab: trademark R, both sides uppercase Big E (last Big E spec). No care label (pre-July 1971). Selvedge present. TALON zipper (no 42). Back pocket: bartack closure (no rivets). Arcuate: orange/copper thread or yellow thread (transition period). Any yellow thread confirms pre-mid-1970s. Waistband interior chain stitch = post-1970 feature. Final Big E pieces with no care label + uppercase tab receive maximum valuations.",
      },
      {
        headingJa: '1971年後半〜1975年（移行期）のディテール',
        headingEn: 'Late 1971–1975 (Transition Era) Details',
        bodyJa: '1971年7月以降、すべてのリーバイスにケアラベルが義務付けられました。移行期のディテール：赤タブ：片面小文字「Levis」（Small e）に変更。ケアラベル：英語のみ表記（WASH WARM・TUMBLE DRY等）→1971〜1973年頃の特徴。ケアラベル先頭行「SF 207」→1971〜1978年の特徴。多言語化（英語＋スペイン語等）→1973年頃以降。ジッパー：TALONまたはYKKへの移行期（混在）。セルビッジ：継続（1981年まで）。アルキュエート：黄色/レモン糸→銅色/オレンジ糸へ移行中。英語のみケアラベル＋Small eタブ＋TALONジッパー→1971〜1974年頃と絞り込めます。',
        bodyEn: "From July 1971, all Levis required mandatory care labels. Transition era details: red tab: changed to one side lowercase 'Levis' (Small e). Care label: English only (WASH WARM, TUMBLE DRY, etc.) = c.1971–1973 characteristic. Care label top line 'SF 207' = 1971–1978 characteristic. Multilingual (English + Spanish etc.) = from c.1973 onward. Zipper: TALON or YKK transition period (both may appear). Selvedge: continuing (until 1981). Arcuate: lemon/yellow thread transitioning to copper/orange. English-only care label + Small e tab + TALON zipper narrows to c.1971–1974.",
      },
      {
        headingJa: '1975〜1981年（YKK期・セルビッジ末期）のディテール',
        headingEn: '1975–1981 (YKK Era, Final Selvedge) Details',
        bodyJa: '1975年以降はYKKジッパーが標準化し、ケアラベルが多言語化した時期です。主要ディテール：赤タブ：Small e継続。ケアラベル：多言語表記（英語＋スペイン語等）・YKKジッパー標準化。セルビッジ：継続（1981年廃止まで）。アルキュエート：銅色/オレンジ糸（1970年代後半以降）。バックポケット：ダブルロックステッチ→1978年以降の特徴。3桁日付コード→1984年頃から（1970年代後半はまだ数字コード期が多い）。YKK＋多言語ケアラベル＋セルビッジ→1975〜1981年と絞り込めます。特にセルビッジ末期（1979〜1981年）の個体は、Small eながらセルビッジありという独特の価値を持ちます。',
        bodyEn: "Post-1975 saw YKK zipper standardization and multilingual care labels. Key details: Small e tab continuing. Care label: multilingual (English + Spanish etc.), YKK zipper standardized. Selvedge: continuing (until 1981 discontinuation). Arcuate: copper/orange thread (post-late 1970s). Back pocket: double lock stitch = post-1978 characteristic. 3-digit date codes from c.1984 (late 1970s still in number code era). YKK + multilingual care label + selvedge narrows to 1975–1981. Final selvedge era (1979–1981) pieces hold unique value as Small e with selvedge present.",
      },
      {
        headingJa: '1981年以降とオーバーロック色による精密判定',
        headingEn: 'Post-1981 and Overlock Color Precision Dating',
        bodyJa: '1981年にロータリー織機へ完全移行し、セルビッジが廃止されました。1981年以降はアウトシームのオーバーロックステッチ色で年代を絞り込めます。オレンジ色オーバーロック→1981〜1984年。白色オーバーロック→1985〜1993年（バットウィングロゴ入りケアラベルは1986年以降）。3桁日付コード（例：127＝1987年12月）→1984〜1992年頃。4桁日付コード（例：1295＝1995年12月）→1993年以降。これらの指標を組み合わせることで、セルビッジなしのモデルでも±2〜3年の精度で年代判定ができます。',
        bodyEn: "1981 saw the full rotary loom transition and end of selvedge. Post-1981 uses outseam overlock color for precision dating. Orange overlock = 1981–1984. White overlock = 1985–1993 (batwing logo care label from 1986+). 3-digit date code (e.g. 127 = December 1987) = c.1984–1992. 4-digit date code (e.g. 1295 = December 1995) = post-1993. Combining these indicators enables ±2–3 year precision dating even on non-selvedge models.",
      },
    ],
  },
  {
    slug: 'article-big-e-value',
    catJa: '価値・希少性', catEn: 'Value & Rarity',
    titleJa: 'Big Eリーバイスとは｜価値と希少性',
    titleEn: "Big E Levis — Value & Rarity",
    descJa: 'Big Eが価値を持つ理由、年代別価値マトリクス、コレクター市場の実態を詳しく解説。',
    descEn: "Why Big E commands premiums, era value matrix, and collector market reality.",
    tags: ['Big E', '価値', 'コレクター'],
    sections: [
      {
        headingJa: 'Big Eとは何か',
        headingEn: 'What is Big E?',
        bodyJa: '「Big E」とはヴィンテージリーバイスのコレクターが使う用語で、赤タブの「LEVI\'S」表記が両面とも大文字のモデルを指します。1936年に赤タブが導入されてから1971年まで、すべてのリーバイス製品に両面大文字タブが使用されていました。1971年のコスト削減により片面が小文字に変更されたため、Big Eは35年間だけ存在した仕様となります。現在のヴィンテージ市場においてBig Eかどうかは価値の最重要指標のひとつで、同じ年代・型番・コンディションのモデルでもBig EとスモールEでは価格が大きく異なることがあります。',
        bodyEn: '"Big E" is a collector term for vintage Levi\'s where the red tab reads "LEVI\'S" in uppercase on both sides. From the red tab\'s introduction in 1936 until 1971, all Levi\'s used this specification. The 1971 cost-reduction change means Big E existed for only 35 years. In today\'s vintage market, Big E vs non-Big E is one of the most important value indicators — two pieces of identical era, model, and condition can differ significantly in price based solely on this distinction.',
      },
      {
        headingJa: 'なぜBig Eは価値が高いのか',
        headingEn: 'Why Does Big E Command Premium Value?',
        bodyJa: 'Big Eが高い価値を持つ理由は主に5つです。①製造年代の確実な証明：1971年以前の製品であることを確実に示します。②品質の高さ：Big E期はシャトル織機のセルビッジデニム・高品質な縫製が標準仕様でした。③文化的価値：マーロン・ブランドやジェームズ・ディーンが生きた時代と重なりアメリカ文化の黄金期を体現しています。④希少性の増大：50年以上前の製品でコンディションの良い個体が年々減少しています。⑤コレクター需要：世界中のコレクター、特に日本のデニム愛好家がBig Eに特別な価値を見出し安定した需要があります。',
        bodyEn: "Big E commands premium value for five main reasons. ①Certain era proof: definitively confirms pre-1971. ②Quality: selvedge denim and high-quality construction were standard during the Big E era. ③Cultural value: overlapping with the lifetimes of Brando and Dean, embodying America's cultural golden age. ④Growing scarcity: 50+ year-old pieces in good condition decrease each year. ⑤Collector demand: worldwide collectors — particularly Japanese denim enthusiasts — place special value on Big E, creating stable demand.",
      },
      {
        headingJa: '年代別の価値マトリクス',
        headingEn: 'Era Value Matrix',
        bodyJa: '〜1954年（501XX期）：★★★★★。本革パッチ・Conmarジッパー・Big Eタブが揃う最初期モデル。現存数が極めて少なく最高希少性。1954〜1971年（Big E全盛）：★★★★☆。コレクターの中核。TALONジッパー・セルビッジ・ケアラベルなし。1971〜1981年（移行期）：★★★☆☆。小文字タブ・ケアラベルあり。セルビッジありの個体は人気。1981年以降：★★☆☆☆。セルビッジなし。デッドストックは★★★★☆以上になることも。コンディション・希少な仕様・SF工場刻印などが加わると評価が上がります。',
        bodyEn: 'Pre-1954 (501XX): ★★★★★ — leather patch, Conmar, Big E; extremely few survivors. 1954–1971 (Big E prime): ★★★★☆ — collector core, TALON, selvedge, no label. 1971–1981 (transition): ★★★☆☆ — lowercase tab, care label; selvedge examples popular. Post-1981: ★★☆☆☆ — no selvedge; deadstock can reach ★★★★☆+. Condition, rare specs, and SF factory stamps all add to valuation.',
      },
    ],
  },
  {
    slug: 'article-sf-factory',
    catJa: '価値・希少性', catEn: 'Value & Rarity',
    titleJa: 'サンフランシスコ工場製が希少な理由',
    titleEn: "Why SF Factory Levis Are Rare",
    descJa: 'リーバイス発祥の地とSF工場の歴史。刻印1・2番の意味を詳しく解説。',
    descEn: "Levis birthplace history and the full story behind stamps 1 and 2.",
    tags: ['SF工場', '刻印1・2', '希少性'],
    sections: [
      {
        headingJa: 'リーバイスとサンフランシスコの歴史',
        headingEn: "Levis and San Francisco History",
        bodyJa: 'リーバイ・ストラウスはバイエルン出身のユダヤ系移民で、1853年にゴールドラッシュで沸くサンフランシスコへ移住しました。最初はドライグッズの卸売業を始め、1873年に仕立て職人のジェイコブ・デービスと共同でリベット付きジーンズの特許を取得しました。この年バレンシア・ストリートに世界初のジーンズ工場が設立されました。ボタン裏刻印1番（Valencia Street工場）と2番（22nd Street工場）はこの歴史的な発祥地で作られた製品の証です。150年以上の歴史を持つブランドの原点に触れられる特別なアイテムとして世界中のコレクターに評価されています。',
        bodyEn: "Levi Strauss was a Bavarian Jewish immigrant who moved to Gold Rush-era San Francisco in 1853. Starting as a dry goods wholesaler, he jointly patented riveted jeans with tailor Jacob Davis in 1873 — the year the world's first jeans factory was established on Valencia Street. Stamps 1 (Valencia Street) and 2 (22nd Street) prove a piece was made at this historic origin point. As tangible connections to the birthplace of a brand with over 150 years of history, they are prized by collectors worldwide.",
      },
      {
        headingJa: 'SF工場の閉鎖と現在の希少性',
        headingEn: 'SF Factory Closure and Current Rarity',
        bodyJa: 'サンフランシスコのValencia Street工場（刻印1番）と22nd Street工場（刻印2番）は、アメリカのジーンズ産業の衰退とともに閉鎖されました。アメリカ製造業全体のコスト高騰と海外生産への移行が背景にあります。工場閉鎖後に新たにSF工場製の製品が生まれることはありません。発祥地という歴史的価値・閉鎖による生産終了・流通量の少なさが相まってSF工場製リーバイスは特別な希少性を持ちます。同じ年代・型番・コンディションであってもSF工場製かどうかで評価が変わることがあります。',
        bodyEn: "San Francisco's Valencia Street (stamp 1) and 22nd Street (stamp 2) factories closed as American denim manufacturing declined due to rising US costs and the shift to overseas production. No new SF factory production is possible. The combination of historical significance, production cessation, and limited surviving quantities gives SF factory Levis special rarity. SF factory provenance can affect valuation even between same-era, same-model, same-condition pieces.",
      },
      {
        headingJa: 'コレクター市場での評価と注意点',
        headingEn: 'Collector Market Valuation and Cautions',
        bodyJa: 'SF工場製のリーバイスは特に日本のコレクター間で高く評価されています。出品説明文に「SF刻印」「Valencia刻印」と記載されていればより高い関心を集める傾向があります。ただし最終的な評価は年代・型番・コンディション・他の仕様が複合的に絡み合って決まります。SF工場製であることは加点要素であり、それだけで価値が保証されるわけではありません。また工場番号の解釈には諸説あるためSF工場製と確定するには複数の資料・専門家の意見を参照することをおすすめします。',
        bodyEn: "SF factory Levis are particularly prized among Japanese collectors. Listings noting 'SF stamp' or 'Valencia stamp' attract greater interest. However, final valuation combines era, model, condition, and other specifications — SF factory provenance is additive, not a standalone value guarantee. Factory number interpretations vary among researchers, so confirming SF factory origin is best done by referencing multiple sources and expert opinions.",
      },
    ],
  },
  {
    slug: 'article-selling',
    catJa: '売買', catEn: 'Buy & Sell',
    titleJa: 'ヴィンテージリーバイスを高く売るポイント',
    titleEn: "How to Sell Vintage Levis for Top Dollar",
    descJa: '出品タイトル・写真・価格設定のコツ。メルカリとeBayの使い分けも解説。',
    descEn: 'Listing titles, photography, pricing, and Mercari vs eBay strategy.',
    tags: ['売却', '出品', 'メルカリ', 'eBay'],
    sections: [
      {
        headingJa: '売る前に年代・型番を正確に把握する',
        headingEn: 'Know Your Item Before Listing',
        bodyJa: '高く売るための第一歩は自分が何を持っているかを正確に把握することです。「古いリーバイス」という曖昧な説明より「1960年代後半 501 Big E TALONジッパー セルビッジあり」と具体的に書かれている方が購入者の信頼を得やすく高値がつきやすくなります。AI鑑定を活用して年代・型番・製造工場を確認してから出品しましょう。ただし鑑定結果は「AIによる推定」であることを明記し確定情報として記載しないよう注意してください。正確な情報提供は購入者との信頼関係構築にも直結します。',
        bodyEn: "The first step is knowing exactly what you have. Specific descriptions like 'late 1960s 501 Big E TALON zipper selvedge' build buyer trust and command higher prices than vague 'old Levis' listings. Use AI identification to confirm era, model, and factory before listing. Always note that results are AI estimates — never present them as confirmed facts. Providing accurate information also directly builds trust with buyers.",
      },
      {
        headingJa: 'プラットフォーム選びの戦略',
        headingEn: 'Platform Selection Strategy',
        bodyJa: 'メルカリ（国内向け）は国内最大リーチ・日本語でのやり取りが可能・手数料10%・スマホで簡単出品という特徴があります。eBay（海外向け）は世界中のコレクターにリーチ・Big Eや希少品は海外評価が特に高い・英語対応が必要・手数料はやや高めです。Big Eタブ・セルビッジ・SF工場刻印などの希少要素がある場合はeBayで世界中のコレクターに向けて出品することでメルカリより高い価格がつく可能性があります。逆に希少要素が少ない場合はメルカリの手軽さを活用する方が効率的です。',
        bodyEn: "Mercari (domestic): Japan's largest reach, Japanese communication, 10% fee, easy smartphone listing. eBay (international): global collector reach, Big E and rare items especially prized internationally, requires English, somewhat higher fees. When items feature rare elements like Big E tab, selvedge, or SF stamps, eBay's global reach may yield significantly higher prices than Mercari. Conversely, for items with fewer rare features, Mercari's convenience is more efficient.",
      },
      {
        headingJa: '写真撮影と出品タイトルのコツ',
        headingEn: 'Photography and Listing Title Tips',
        bodyJa: '必ず撮影すべきショット：①全体正面・背面・側面、②赤タブ接写（両面）、③ケアラベル全体（なければ内側を撮影）、④ジッパー刻印（斜め光）、⑤ボタン裏刻印、⑥セルビッジ（裾折り返し）、⑦ダメージ・補修箇所。効果的なタイトル例：「リーバイス 501 Big E 1960年代 TALONジッパー セルビッジ ヴィンテージ」（型番・年代・ジッパー・タブ・セルビッジを含める）。英語タイトル例（eBay向け）：「Levi\'s 501 Big E 1960s TALON Zipper Selvedge Vintage Denim」。',
        bodyEn: "Essential shots: ①full front, back, side; ②red tab close-up (both sides); ③care label full (or inside if absent); ④zipper stamp with angled light; ⑤button back stamp; ⑥selvedge with folded hem; ⑦damage and repairs. Effective title example: 'リーバイス 501 Big E 1960年代 TALONジッパー セルビッジ ヴィンテージ' (include model, era, zipper, tab, selvedge). eBay title example: 'Levis 501 Big E 1960s TALON Zipper Selvedge Vintage Denim.'",
      },
      {
        headingJa: '価格設定のコツ',
        headingEn: 'Pricing Tips',
        bodyJa: 'メルカリの「売り切れ」フィルターとeBayの「Sold Items」で実際に売れた価格を確認します。Big E・セルビッジ・SF刻印など希少要素がある場合は相場より高め設定も可能です。状態が良ければ強気な価格設定から始め反応を見て調整するのが基本です。即決希望なら相場の0.85〜0.9倍程度が売れやすい水準です。年代を誇張したり確定情報として記載すると後でトラブルになるため必ず「推定」と明記してください。',
        bodyEn: "Check Mercari's sold-items filter and eBay's Completed Listings for actual transaction prices. Rare features like Big E, selvedge, and SF stamps justify above-market pricing. Start with a confident price for good condition pieces and adjust based on response. For quick sales, 85–90% of market tends to move well. Always mark era identification as 'estimated' to avoid post-sale disputes.",
      },
    ],
  },
  {
    slug: 'article-ebay',
    catJa: '売買', catEn: 'Buy & Sell',
    titleJa: 'eBayでヴィンテージリーバイスを購入する方法',
    titleEn: "Buying Vintage Levis on eBay",
    descJa: '効果的な検索キーワード・写真確認ポイント・詐欺対策を初心者向けに解説。',
    descEn: 'Search terms, photo verification, and fraud prevention for beginners.',
    tags: ['eBay', '購入', '海外'],
    sections: [
      {
        headingJa: 'eBayでヴィンテージリーバイスを探すメリット',
        headingEn: "Why Buy Vintage Levis on eBay",
        bodyJa: 'eBayはヴィンテージリーバイスを探す上で世界最大級のマーケットプレイスです。アメリカ・ヨーロッパ・日本など世界中の出品者が利用しており、国内では見つからない希少なモデルも見つかる可能性があります。特にBig E期のモデル・SF工場製・デッドストック品などはeBayの方が選択肢が豊富です。一方で英語でのやり取りが必要・関税・送料・詐欺リスクなど国内プラットフォームにはない注意点もあります。これらを理解した上で活用することで、メルカリでは出会えないプレミア品を入手できる可能性があります。',
        bodyEn: "eBay is one of the world's largest marketplaces for vintage Levis. With sellers worldwide, rare models unavailable domestically may be findable here. Big E era models, SF factory pieces, and deadstock in particular have greater selection on eBay. However, English communication, international shipping costs, customs duties, and fraud risk are challenges absent from domestic platforms. Understanding these factors lets you access premium pieces unavailable on Mercari.",
      },
      {
        headingJa: '効果的な検索キーワード',
        headingEn: 'Effective Search Keywords',
        bodyJa: 'Big E期を探す：「Levi\'s Big E」「501 Big E vintage」「Levis 1960s Big E」。セルビッジを探す：「Levi\'s selvedge」「501 selvedge vintage」「Levis redline selvedge」。年代で絞る：「Levi\'s 1950s」「501XX vintage」「70505 Big E」。eBayのCompleted Listings（成約済み）フィルターを使うと実際に売れた価格が確認でき相場把握に非常に有効です。入札前に必ず相場を確認しましょう。アラート機能（Saved Searches）を設定しておくと新着出品が出た際に通知を受け取れます。',
        bodyEn: "For Big E era: 'Levis Big E', '501 Big E vintage', 'Levis 1960s Big E.' For selvedge: 'Levis selvedge', '501 selvedge vintage', 'Levis redline selvedge.' By era: 'Levis 1950s', '501XX vintage', '70505 Big E.' eBay's Completed Listings filter shows actual transaction prices — extremely useful for market research. Always check before bidding. Set up Saved Searches for new listing alerts.",
      },
      {
        headingJa: '写真確認と詐欺対策',
        headingEn: 'Photo Verification and Fraud Prevention',
        bodyJa: '購入前に確認すべき点：①赤タブ両面（Big E請求なら両面大文字を確認・片面のみ写真なら追加依頼）、②ケアラベル（1971年以前請求ならなしのはず）、③ジッパー刻印（TALON・Conmarが読めるか）、④実寸サイズ（ウエスト・股下の実寸記載を確認）、⑤ダメージ（穴・補修の有無）。よくある詐欺・誤表記：「Rare」「Vintage」の乱用（写真で自分確認を）、年代の誇張（1970年代を1960年代と記載するケース）、新規出品者への注意（フィードバック少ない出品者からの高額購入は慎重に）。eBayの購入者保護プログラムで説明と異なる場合は返金請求が可能です。',
        bodyEn: "Verify before purchasing: ①Red tab both sides (Big E claim = confirm both uppercase; request photos if only one side shown), ②care label (pre-1971 claim = should be absent), ③zipper stamp (TALON/Conmar legible?), ④actual measurements (waist and inseam), ⑤damage (holes and repairs). Common issues: 'Rare'/'Vintage' overuse (verify with photos), era exaggeration (labeling 1970s as 1960s), new seller caution (be careful with high-value purchases from low-feedback sellers). eBay buyer protection allows refund requests when items differ from descriptions.",
      },
    ],
  },
  {
    slug: 'article-mercari',
    catJa: '売買', catEn: 'Buy & Sell',
    titleJa: 'メルカリでヴィンテージリーバイスを探す方法',
    titleEn: "Finding Vintage Levis on Mercari",
    descJa: '効果的な検索キーワード・アラート活用・価格交渉のコツを解説。',
    descEn: 'Search terms, alerts, price negotiation, and purchase precautions.',
    tags: ['メルカリ', '購入', '国内'],
    sections: [
      {
        headingJa: 'メルカリのメリットと注意点',
        headingEn: 'Mercari Advantages and Cautions',
        bodyJa: 'メルカリは国内最大のフリマアプリで日本語でのやり取り・送料・関税不要という利点があります。出品者のヴィンテージ知識にばらつきがあり、年代を知らずに出品しているケースも多く掘り出し物が見つかる一方で過大評価された商品も混在します。また「リーバイス 古着」などのキーワードで検索するとヴィンテージでない現行品も多数ヒットします。適切なキーワードと確認ポイントを知っておくことで、効率的に価値あるアイテムを見つけられます。',
        bodyEn: "Mercari is Japan's largest flea market app with the advantages of Japanese communication and no shipping or customs concerns. Seller knowledge varies widely — many list without knowing the era, creating both bargain opportunities and overpriced items. Searching broad terms like 'リーバイス 古着' also returns many non-vintage current pieces. Knowing the right keywords and verification points lets you efficiently find valuable items.",
      },
      {
        headingJa: '効果的な検索キーワード',
        headingEn: 'Effective Search Keywords',
        bodyJa: 'Big E期：「リーバイス ビッグE」「501 大文字タブ」「リーバイス 60年代」「リーバイス ヴィンテージ 1960」。セルビッジ：「リーバイス セルビッジ」「リーバイス 耳付き」「501XX」。型番・年代：「リーバイス 501 ヴィンテージ」「リーバイス 505 古着」「557 トラッカー ヴィンテージ」「リーバイス 70年代」。アラート（フォロー中の検索条件）機能を活用すると新着出品が出た際に通知を受け取れます。人気商品はすぐに売れるためアラート設定は必須です。',
        bodyEn: "For Big E era: 'リーバイス ビッグE', '501 大文字タブ', 'リーバイス 60年代.' For selvedge: 'リーバイス セルビッジ', 'リーバイス 耳付き', '501XX.' By model/era: 'リーバイス 501 ヴィンテージ', 'リーバイス 505 古着', '557 トラッカー ヴィンテージ.' Set up search alerts for new listing notifications — popular items sell quickly, making alerts essential.",
      },
      {
        headingJa: '価格交渉と購入時の注意点',
        headingEn: 'Negotiation and Purchase Cautions',
        bodyJa: '価格交渉のコツ：まず商品への質問（「赤タブの裏面の写真を送ってもらえますか」等）で興味を示してから交渉するのが自然です。10〜15%程度の値下げが目安で「即購入します」の一言が成功率を上げます。しつこい交渉は避けましょう。購入時の注意点：年代の誤記載（「1960年代」と書いていても実際は1980年代のケース）・サイズの縮み（洗濯による縮みでタグより小さいことが多い実寸を必ず確認）・補修の見落とし（股部分・膝裏などに隠れた補修がないか確認）。受取評価は商品確認後に行い問題がある場合は評価前に出品者に連絡してください。',
        bodyEn: "Negotiation tips: start with a question ('Could you send a photo of the back of the red tab?') to show genuine interest — aim for 10–15% off. 'I'll buy immediately' increases success rates significantly. Avoid multiple messages. Purchase cautions: era misrepresentation (listings claiming '1960s' may be 1980s), size shrinkage (vintage pieces often measure smaller than labeled from washing — always confirm measurements), hidden repairs (check photos for patches in the crotch area and behind knees). Complete receipt review after inspecting the item; contact the seller before leaving a review if problems exist.",
      },
    ],
  },
  {
    slug: 'article-care',
    catJa: '売買', catEn: 'Buy & Sell',
    titleJa: 'ヴィンテージリーバイスの保管・ケア方法',
    titleEn: "Storing & Caring for Vintage Levis",
    descJa: '洗濯・乾燥・長期保管のDO/DONT。革パッチや赤タブのケアも解説。',
    descEn: 'DO/DONT for washing, drying, storage, plus leather patch and tab care.',
    tags: ['ケア', '保管', '洗濯'],
    sections: [
      {
        headingJa: 'ヴィンテージデニムケアの基本',
        headingEn: 'Core Vintage Denim Care Philosophy',
        bodyJa: 'ヴィンテージリーバイスのケアで最も重要な考え方は「なるべく手を加えない」ことです。現代のジーンズと同じように洗濯・乾燥機にかけると生地の縮み・色落ち・タブや縫い目の傷みが加速します。特に1981年以前のセルビッジデニムは繊細で丁寧な扱いがコンディション維持に直結します。コレクター目的で保有する場合はほとんど着用せず保管のみで管理するケースが多いですが、着用する場合でも月1〜2回程度の洗濯頻度にとどめることが理想です。コンディションが価値に直結するためケアを怠らないことが資産価値の維持につながります。',
        bodyEn: "The core philosophy is minimum intervention. Treating vintage Levis like modern jeans — machine washing and tumble drying — accelerates shrinkage, fading, and damage to tabs and seams. Pre-1981 selvedge denim is especially delicate; careful handling directly maintains condition. Collector pieces are often stored unworn, but even wearable pieces ideally should be washed no more than once or twice monthly. Since condition correlates directly to value, proper care is inseparable from preserving the asset's worth.",
      },
      {
        headingJa: '正しい洗濯方法（DO/DONT）',
        headingEn: 'Correct Washing (DO/DONT)',
        bodyJa: 'DO（推奨）：手洗い（冷水〜30℃以下でやさしく押し洗い）・中性洗剤またはデニム専用洗剤・裏返して洗う（色落ち軽減）・しっかりすすぐ。DONT（避けるべき）：洗濯機の通常コース（生地を傷める）・高温のお湯（縮みの原因）・漂白剤（色を傷める）・柔軟剤（生地の風合いを変える）・強いもみ洗い（縫い目へのダメージ）・長時間の浸け置き。コレクション目的のデッドストック品や極めてコンディションが良い個体はできる限り洗濯を避けてください。',
        bodyEn: "DO: hand wash in cold to 30°C water with gentle pressing motion; use neutral or denim-specific detergent; wash inside out (reduces fading); rinse thoroughly. DON'T: regular machine wash cycle (damages fabric); hot water (causes shrinkage); bleach (harms color); fabric softener (alters texture); vigorous wringing (damages seams); extended soaking. For deadstock collector pieces or exceptional-condition items, avoid washing entirely whenever possible.",
      },
      {
        headingJa: '乾燥・長期保管・パッチのケア',
        headingEn: 'Drying, Long-Term Storage, and Patch Care',
        bodyJa: '乾燥：陰干し必須（直射日光は色落ちと生地劣化の原因）・乾燥機は絶対に使わない（縮みが大きい）・裏返したまま干す・完全乾燥させる（半乾きはカビの原因）。長期保管：湿度50〜60%を維持・直射日光を避ける暗所に保管・折りたたみよりハンガーで吊るす（折り目防止）・防虫剤はデニムに直接触れさせない（変色の原因）・定期的な換気。革パッチのケア：水に濡れると変形するため雨の日の着用は避ける・乾燥しすぎるとひび割れるため適度な湿度管理が重要・劣化が気になる場合はレザーコンディショナーを薄く塗布。赤タブは引っ張りすぎず縫い目の解れを定期確認してください。',
        bodyEn: "Drying: shade-dry only (sunlight causes fading and degradation); never use a dryer (major shrinkage risk); keep inside out while drying; dry completely (damp storage causes mold). Long-term storage: maintain 50–60% humidity; store away from light in a dark location; hang rather than fold (prevents creasing); keep moth repellents from direct contact (causes discoloration); ventilate periodically. Leather patch care: avoid rain (water deforms leather); prevent excessive dryness (causes cracking); apply thin leather conditioner for deterioration concerns. Red tab: avoid excessive pulling; regularly check seams for loosening.",
      },
    ],
  },
  {
    slug: 'article-model-guide',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス型番完全ガイド｜全モデル・年代・希少性一覧',
    titleEn: "Levis Model Number Complete Guide — All Models, Eras & Rarity",
    descJa: '501XX・506XX・507XX・557XXから505・517・578・646・701まで。ヴィンテージから現行品まで全型番の特徴・年代・希少性を網羅。',
    descEn: "From 501XX, 506XX, 507XX, 557XX to 505, 517, 578, 646, 701 — complete coverage of all models' features, eras, and rarity.",
    tags: ['型番サマリー', '557XX', '506XX', '578', '701'],
    sections: [
      {
        headingJa: '型番の読み方と分類',
        headingEn: 'How to Read and Classify Model Numbers',
        bodyJa: 'リーバイスの型番は大きくジーンズ系（下半身）とジャケット系（上半身）に分かれます。ジーンズ系は501・505・517・519・578・606・646など3桁の数字が中心で、ジャケット系は506XX・507XX・557XXなど末尾に「XX」が付くモデルが有名です。末尾の「XX」は1954年頃まで使われていた内部品番でXX期のモデルは特に希少です。頭に「70」が付くもの（70505・70557XX等）はBig E期（〜1971年）の品番。「LVC」表記はLevis Vintage Clothing復刻ライン（ヴィンテージではない）。「STF」はShrink-to-Fit（生デニム）を示します。これを知っておくだけで出品タイトルや商品説明から多くの情報が読み取れます。',
        bodyEn: "Levis model numbers divide into jeans (bottoms) and jacket (tops) categories. Jeans use three-digit numbers: 501, 505, 517, 519, 578, 606, 646, etc. Jackets are known by 'XX' suffix models: 506XX, 507XX, 557XX, etc. The 'XX' suffix was an internal designation until around 1954, making XX-era models especially rare. The '70' prefix (70505, 70557XX, etc.) indicates Big E era (pre-1971). 'LVC' = Levis Vintage Clothing reproduction (NOT vintage). 'STF' = Shrink-to-Fit (raw denim). Knowing this lets you extract significant information from listing titles and descriptions.",
      },
      {
        headingJa: '超希少ヴィンテージ（〜1960年代初頭）',
        headingEn: 'Ultra-Rare Vintage (pre-early 1960s)',
        bodyJa: '501XX（〜1954年）：最希少・ボタンフライ・ストレート。本革パッチ・Big Eタブ・ケアラベルなし・セルビッジが揃う最初期モデル。希少性★★★★★。506XX（Type1ジャケット・1936〜1953年）：胸ポケット1つ・ブランケットライナー付きが多い・製造期間が短く超希少。希少性★★★★★。507XX（Type2ジャケット・1953〜1962年）：胸ポケット2つ・ウエストにダブルプリーツ・506XX同様に超希少。希少性★★★★★。これらのモデルは市場に出ること自体が稀で、真贋確認には複数のポイントを慎重に組み合わせることが必須です。LVC復刻品と混同しないよう注意が必要です。',
        bodyEn: "501XX (pre-1954): rarest, button fly, straight — leather patch + Big E tab + no care label + selvedge, rarity ★★★★★. 506XX (Type1 jacket, 1936–1953): single chest pocket, often with blanket lining, short production run, ultra-rare, ★★★★★. 507XX (Type2 jacket, 1953–1962): two chest pockets, double waist pleats, equally ultra-rare, ★★★★★. These models appearing on the market is itself a rare event. Authenticating them requires carefully combining multiple identification points. Watch for LVC reproductions.",
      },
      {
        headingJa: 'Big E全盛期モデル（1960年代〜1971年）',
        headingEn: 'Big E Prime Era Models (1960s–1971)',
        bodyJa: '501 / 70501（1873年〜）：定番ボタンフライ・ストレート。ヴィンテージ価値最高峰。希少性★★★★☆。505 / 70505（1967年〜）：ジッパーフライ・ストレート。Big E期は70505・TALONジッパー。希少性★★★★☆。517（1960年代後半〜）：ジッパーフライ・ブーツカット。ヒッピー・カウボーイ文化の象徴。希少性★★★☆☆。519（1960年代〜）：ジッパーフライ・スーパースリム。希少モデル。希少性★★★☆☆。557XX / 70557XX（Type3トラッカージャケット・1962年〜）：Big E期は70557XX・TALONジッパー。希少性★★★★☆。606（1960〜1970年代）：スリムフィット。希少モデル。希少性★★★☆☆。',
        bodyEn: "501/70501 (1873+): definitive button fly, straight — highest vintage value, ★★★★☆. 505/70505 (1967+): zipper fly, straight, Big E era = 70505 with TALON zipper, ★★★★☆. 517 (late 1960s+): zipper fly, bootcut, hippie/cowboy culture icon, ★★★☆☆. 519 (1960s+): zipper fly, super slim, rare model, ★★★☆☆. 557XX/70557XX (Type3 Trucker, 1962+): Big E era = 70557XX with TALON zipper, ★★★★☆. 606 (1960s–1970s): slim fit, rare model, ★★★☆☆.",
      },
      {
        headingJa: '1970年代モデルとオレンジタブライン',
        headingEn: '1970s Models and Orange Tab Line',
        bodyJa: '578（1970年代）：フレアカット・ジッパーフライ。現存数が少なく希少。希少性★★★★☆。646（1970年代）：ベルボトム・ジッパーフライ。ディスコ文化の象徴・オレンジタブに多い。希少性★★★☆☆。701（1934年〜）：レディース定番・ボタンフライ・「Student Fit」表記。希少性★★★★☆。702 / 705（1950〜60年代）：レディースモデル・現存数少ない。希少性★★★★☆。912（1970年代）：オレンジタブ・スリムテーパード・レディース。希少性★★★☆☆。917（1970年代）：オレンジタブ・ブーツカット。希少性★★★☆☆。オレンジタブラインはBig Eライン（赤タブ）より廉価でしたが、現在はその時代性から一定のコレクター人気があります。',
        bodyEn: "578 (1970s): flare cut, zipper fly, few survivors, rare, ★★★★☆. 646 (1970s): bellbottom, zipper fly, disco culture icon, mainly orange tab, ★★★☆☆. 701 (1934+): women's classic, button fly, 'Student Fit' label, ★★★★☆. 702/705 (1950s–60s): women's models, few survivors, ★★★★☆. 912 (1970s): orange tab, slim tapered, women's, ★★★☆☆. 917 (1970s): orange tab, bootcut, ★★★☆☆. The orange tab line was less expensive than the red tab (Big E) line but now has its own collector following for its era character.",
      },
      {
        headingJa: '現行・近年モデル一覧',
        headingEn: 'Current and Recent Models',
        bodyJa: '現行品はケアラベルに多言語表記・バーコード・URLがあり、セルビッジなし・海外製造が多いです。主要現行モデル：501CT（カットオフ・テーパード・2010年代〜）・511（スリムフィット・2010年代〜）・512（スリムテーパード・2015年〜）・513（スリムストレート・2000年代〜）・514（ストレートフィット）・527（ブーツカット・ローライズ）・531（アスレチックスリム）・541（アスレチックテーパード）・550（リラックスフィット・1980年代〜）・559（リラックスストレート）・569（ルーズストレート）・721（ハイライズスキニー・レディース）・724（ハイライズストレート・レディース）。LVC（Levis Vintage Clothing）はヴィンテージの復刻ラインで現行品ですが、ヴィンテージ品に酷似しているため誤認に注意が必要です。',
        bodyEn: "Current production features multilingual care labels, barcodes, URLs, no selvedge, and overseas manufacturing. Major current models: 501CT (cutoff tapered, 2010s+), 511 (slim fit, 2010s+), 512 (slim taper, 2015+), 513 (slim straight, 2000s+), 514 (straight fit), 527 (bootcut low rise), 531 (athletic slim), 541 (athletic taper), 550 (relaxed fit, 1980s+), 559 (relaxed straight), 569 (loose straight), 721 (high rise skinny, women's), 724 (high rise straight, women's). LVC (Levis Vintage Clothing) is a current-production vintage reproduction line that closely resembles genuine vintage — misidentification is a real risk.",
      },
    ],
  },

  // ===== 新規追加：型番別詳細記事 =====
  {
    slug: 'article-501xx',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス501XXとは｜最希少モデルの特徴と見分け方',
    titleEn: "Levis 501XX — The Rarest Model: Features & Identification",
    descJa: '1954年以前の最希少モデル501XXの特徴。本革パッチ・クロッチリベット・Scovill/Conmarジッパーなど超希少ディテールを解説。',
    descEn: "Pre-1954 ultra-rare 501XX: leather patch, crotch rivet, Scovill/Conmar zipper, and other ultra-rare details explained.",
    tags: ['501XX', '超希少', '本革パッチ', 'Conmar'],
    sections: [
      {
        headingJa: '501XXとは何か',
        headingEn: 'What is the 501XX?',
        bodyJa: '501XXとは1954年頃以前に製造されたリーバイス501の最初期モデルを指す呼称です。「XX」はリーバイスが使用していた最高品質デニム（ダブルXデニム）を意味する内部品番で、現在ではコレクター価値の高いモデルを指す用語として定着しています。501XXはヴィンテージ市場において最高峰の存在で、良好なコンディションの個体は数十万円〜数百万円以上で取引されることがあります。現存数が極めて少ないため、真の501XXに出会える機会は非常に限られています。501XXを見分けるには赤タブ・ケアラベル・ジッパー・リベット・パッチ・アルキュエートステッチの複数ポイントを組み合わせて判断することが不可欠です。',
        bodyEn: "501XX refers to the earliest Levis 501 models produced until around 1954. 'XX' was an internal designation for the highest-quality double-X denim, now a collector term for the most valuable early models. The 501XX represents the pinnacle of the vintage Levis market, with well-preserved examples trading from hundreds of thousands to millions of yen. Surviving examples are extremely scarce. Identifying genuine 501XX requires combining multiple points: red tab, care label, zipper, rivets, patch, and arcuate stitching.",
      },
      {
        headingJa: 'WWII以前（〜1942年）の特徴',
        headingEn: 'Pre-WWII Features (pre-1942)',
        bodyJa: '1942年以前の501XXは最高水準のディテールが揃います。本革パッチ（Two Horse Brand）・露出したバックポケットリベット（1937年以前）またはバックポケット隠しリベット（1937〜1937年頃）・クロッチリベット（股部分の金属鋲・1937年以前）・ベルトループ＋シンチバック（1922〜1937年）・アルキュエートステッチ（オレンジ糸・高SPI）が特徴です。リベットには「crowned arrow（王冠矢印）」刻印や「L.S. & Co. S.F. Cal.」刻印が見られます。ジッパーフライの関連モデル（505前身等）ではScovill・Conmar・Eagleジッパーが確認できます。',
        bodyEn: 'Pre-1942 501XX has the finest details. Features include: leather Two Horse Brand patch, exposed back pocket rivets (pre-1937) or hidden rivets (post-1937), crotch rivet at button fly base (pre-1937), belt loops plus cinch back (1922–1937), and arcuate stitching in orange thread with high SPI. Rivets show "crowned arrow" stamps or "L.S. & Co. S.F. Cal." markings. Zipper-fly associated models (505 predecessors, etc.) show Scovill, Conmar, or Eagle zipper brands.',
      },
      {
        headingJa: 'WWII期（1942〜1947年）S501XX',
        headingEn: 'WWII Era (1942–1947) — S501XX',
        bodyJa: '第二次世界大戦中のS501XX（S＝Simplified）は金属節約のため多くのディテールが簡略化されました。最大の特徴はアルキュエートステッチが縫製ではなく塗装（オレンジペイント）に変わっている点です。現在ではほとんどのペイントが落ちており、バックポケットが無地に見えます。クロッチリベット・コインポケットリベット・シンチバックが省略されています。鉄製リベット（銅の代替）が使われているものもあります。「ローレルリーフ」模様のドーナツ型ボタンが特徴的です。WWII期S501XXは良好なコンディションであれば$6,000以上の価値があるとされ、超希少品として扱われます。',
        bodyEn: 'WWII-era S501XX (S=Simplified) simplified many details for metal conservation. The most distinctive feature is arcuate replaced by orange paint — by now almost entirely worn off, leaving plain back pockets. Crotch rivet, coin pocket rivet, and cinch back were eliminated. Some examples show iron rivets substituting for copper. "Laurel leaf" donut-style buttons are characteristic of this period. WWII-era S501XX in good condition is valued at $6,000+, treated as an ultra-rare piece.',
      },
      {
        headingJa: 'Post-WWII〜1954年の特徴',
        headingEn: 'Post-WWII to 1954 Features',
        bodyJa: '1947〜1954年の501XXはWWII前の仕様が復活した時代です。アルキュエートステッチが縫製に戻り本革パッチが継続されます。バックポケットには隠しリベット（1937〜1964年）が付き、赤タブは両面大文字Big Eです。アルキュエートはオレンジ糸でSPI10〜11と高く、やや不均一な機械特性が見られます。リベットは銅製で凸文字（1960年代以前）です。この時代の個体はコレクターから「Post-war 501XX」と呼ばれ、本革パッチ・Big Eタブ・ケアラベルなし・セルビッジの四点が揃えば最高評価を受けます。',
        bodyEn: '1947–1954 501XX saw the return of pre-war specs. Arcuate stitching returned to thread construction, leather patch continued, hidden back pocket rivets (1937–1964), and Big E (both sides uppercase) tab. Arcuate uses orange thread at high SPI (10–11) with slight period-characteristic irregularity. Rivets are copper with raised/convex lettering (pre-1960s). Collectors call these "Post-war 501XX" — leather patch + Big E tab + no care label + selvedge together represent maximum valuation.',
      },
      {
        headingJa: '1955〜1962年（Jacronパッチ期）',
        headingEn: '1955–1962 (Jacron Patch Era)',
        bodyJa: '1955年頃から本革パッチがJacron（革風ボール紙）に変更されましたが、「Every Garment Guaranteed」スローガンが継続し、Big Eタブ・ケアラベルなし・セルビッジデニムは変わりません。1962年に「Every Garment Guaranteed」が廃止され501XX時代が幕を閉じます。品番上のXXサフィックスはこの時代も継続しており、コレクターは「Late XX」として区別することがあります。TALON 42ジッパー（505等）・Big Eタブ・Jacronパッチの組み合わせが典型的なディテールです。',
        bodyEn: "From around 1955, the leather patch was replaced by Jacron (leather-like cardboard), but the 'Every Garment Guaranteed' slogan continued, with Big E tab, no care label, and selvedge unchanged. The slogan was removed in 1962, closing the 501XX era. The XX suffix continued through this period, with collectors sometimes distinguishing these as 'Late XX.' TALON 42 zipper (on 505 etc.) + Big E tab + Jacron patch is the typical detail combination.",
      },
    ],
  },
  {
    slug: 'article-505-517-646',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: '505・517・646・578の違い｜ジッパーフライモデル完全比較',
    titleEn: "505 vs 517 vs 646 vs 578 — Zipper-Fly Models Compared",
    descJa: 'リーバイスのジッパーフライモデルを徹底比較。シルエット・誕生年・ジッパーブランドによる年代判定・希少性まで詳解。',
    descEn: "Complete comparison of Levis zipper-fly models: silhouette, birth year, zipper-brand dating, and rarity.",
    tags: ['505', '517', '646', '578', 'ジッパーフライ'],
    sections: [
      {
        headingJa: 'ジッパーフライモデルの概要',
        headingEn: 'Zipper-Fly Models Overview',
        bodyJa: 'リーバイスの501はボタンフライが特徴ですが、1967年以降はジッパーフライモデルが複数登場しました。代表的なものは505（ストレート・1967年〜）・517（ブーツカット・1960年代後半〜）・646（ベルボトム・1970年代）・578（フレアカット・1970年代）です。これらのモデルはジッパーブランドによる年代判定が可能という利点があり、501にはない鑑定ポイントとして非常に重要です。Scovill・Conmar→1950年代以前、TALON 42→1950〜60年代、TALON（42なし）→60年代後半〜70年代前半、YKK→70年代以降という判定が各モデルに適用できます。',
        bodyEn: "While Levis 501 features a button fly, multiple zipper-fly models emerged from 1967 onward. The most notable are the 505 (straight, 1967+), 517 (bootcut, late 1960s+), 646 (bellbottom, 1970s), and 578 (flare, 1970s). These models benefit from zipper-brand dating — an identification point unavailable on the 501. The progression Scovill/Conmar (pre-1950s) → TALON 42 (1950s–60s) → TALON no 42 (late 60s–early 70s) → YKK (post-1970s) applies to all zipper-fly models.",
      },
      {
        headingJa: '505（1967年〜）ストレートフィット',
        headingEn: '505 (1967+) — Straight Fit',
        bodyJa: '505は1967年にデビューした501のジッパーフライ版です。シルエットはほぼストレートで股上がやや浅くよりスリムな印象です。Big E期（1967〜1971年）は「70505」という品番でTALON 42またはTALONジッパーを使用しています。年代判定はTALON 42→1950〜60年代（505誕生前の関連モデル）、TALON→60年代後半〜70年代前半、YKK→70年代以降です。70505はBig Eタブ・ケアラベルなし・セルビッジの三点が揃う個体が特に高評価です。505はジーンズとしては珍しいジッパーフライのBig Eモデルとして、501に次ぐコレクター人気を誇ります。',
        bodyEn: "The 505 debuted in 1967 as the zipper-fly 501. The silhouette is nearly straight with a slightly lower rise and slimmer impression. Big E era (1967–1971) examples carry the '70505' model number with TALON 42 or TALON zipper. Dating: TALON 42 = 1950s–60s (pre-505 related models), TALON = late 60s–early 70s, YKK = post-1970s. 70505s with Big E tab + no care label + selvedge command the highest premiums. As a rare Big E zipper-fly model, the 505 holds the second most coveted collector status after the 501.",
      },
      {
        headingJa: '517（1960年代後半〜）ブーツカット',
        headingEn: '517 (late 1960s+) — Bootcut',
        bodyJa: '517は裾に向かってわずかに広がるブーツカットシルエットが特徴です。1960年代後半のカウボーイ・カントリーカルチャーを背景に誕生し、ヒッピー文化とも結びついています。1970年代の517はオレンジタブに多く、ハイウエストが特徴です。1990年代の517はミッドライズになりシルエットが変化しています。年代によってシルエットが大きく異なるため、フレアの広がり方も年代判定の参考になります。ジッパーブランド（TALON→70年代前半以前・YKK→70年代以降）と組み合わせることで、より精密な年代判定が可能です。',
        bodyEn: "The 517 features a subtle bootcut silhouette flaring slightly toward the hem. Born from cowboy/country culture of the late 1960s, it also tied into hippie fashion. 1970s 517s are often orange tab with a high-waist profile. 1990s versions shifted to mid-rise with changed proportions. The degree of flare helps date the era. Combining with zipper brand (TALON = pre-early 70s, YKK = post-1970s) enables more precise dating.",
      },
      {
        headingJa: '646（1970年代）ベルボトム',
        headingEn: '646 (1970s) — Bell Bottom',
        bodyJa: '646は膝下から大きく広がるベルボトムシルエットが特徴で、1970年代のディスコ・グルーヴ文化を象徴するモデルです。オレンジタブラインに多く展開された廉価ラインモデルで、当時は赤タブモデルより安価でした。現在はその時代性とシルエットの独自性からコレクター需要が高まっています。YKKジッパーを使用しているものが多く、ケアラベルの3桁または4桁コードで製造年月を絞り込めます。セルビッジあり・オレンジタブ・YKKジッパーの組み合わせで1970年代前半の個体と判定できます。',
        bodyEn: "The 646 features a dramatic bellbottom silhouette flaring dramatically below the knee — the defining model of 1970s disco and groove culture. Primarily released in the budget orange tab line (less expensive than red tab at the time), collector interest has grown significantly for its distinctive silhouette. Most examples use YKK zippers, with care label 3-digit or 4-digit codes narrowing down manufacturing month and year. Selvedge + orange tab + YKK zipper combination suggests an early 1970s example.",
      },
      {
        headingJa: '578（1970年代）フレアカット',
        headingEn: '578 (1970s) — Flare Cut',
        bodyJa: '578は1970年代のフレアカットモデルで、646のベルボトムほど極端ではなく、より穿きやすいフレアシルエットが特徴です。現存数が少なく希少モデルのひとつとして知られており、ヴィンテージ市場での認知度は501・505・517ほど高くありませんが、知る人ぞ知るプレミアモデルです。YKKジッパーを使用していることが多く、ケアラベルの有無・セルビッジの確認で1970年代前半か後半かを判定できます。アウトシームのオーバーロックステッチ色（オレンジ→1981〜84年・白→1985〜93年）も年代の補助指標になります。',
        bodyEn: "The 578 is a 1970s flare-cut model less extreme than the 646 bellbottom, offering a more wearable flare. Surviving examples are scarce, making it one of the rarer vintage models. While less recognized than the 501, 505, or 517, it's a premium piece for those in the know. Most use YKK zippers, with care label presence and selvedge distinguishing early from late 1970s. Outseam overlock stitch color (orange = 1981–84, white = 1985–93) also serves as a supplementary dating indicator.",
      },
      {
        headingJa: '4モデル比較早見表',
        headingEn: '4-Model Quick Comparison',
        bodyJa: '505：ストレート・ジッパー・1967年〜・Big E期は70505・コレクター人気★★★★★。517：ブーツカット・ジッパー・1960年代後半〜・カウボーイ/ヒッピー文化・コレクター人気★★★☆☆。646：ベルボトム・ジッパー・1970年代・オレンジタブ多・ディスコ文化・コレクター人気★★★☆☆。578：フレア・ジッパー・1970年代・希少・コレクター人気★★★★☆。共通確認ポイント：ジッパーブランド（年代判定の核）・セルビッジ有無・ケアラベル有無・タブ色・アウトシームのオーバーロック色。',
        bodyEn: "505: straight, zipper, 1967+, Big E=70505, collector rating ★★★★★. 517: bootcut, zipper, late 1960s+, cowboy/hippie culture, ★★★☆☆. 646: bellbottom, zipper, 1970s, mainly orange tab, disco culture, ★★★☆☆. 578: flare, zipper, 1970s, scarce, ★★★★☆. Common verification points: zipper brand (core dating tool), selvedge presence, care label presence, tab color, outseam overlock stitch color.",
      },
    ],
  },
  {
    slug: 'article-701',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス701とは｜レディース定番の歴史と見分け方',
    titleEn: "Levis 701 — The Original Women's Jean: History & Identification",
    descJa: '1934年誕生のレディース定番701。Student Fit表記・ボタンフライ・年代別の特徴と501との違いを徹底解説。',
    descEn: "The 701 born in 1934. Student Fit label, button fly, era features, and differences from the 501.",
    tags: ['701', 'レディース', 'Student Fit', '1934年'],
    sections: [
      {
        headingJa: 'リーバイス701とは',
        headingEn: "What is the Levis 701?",
        bodyJa: 'リーバイス701は1934年に誕生したリーバイス初のレディース向けジーンズです。501がメンズ向けであるのに対し、701はよりスリムでフェミニンなシルエットを持つレディース専用モデルとして開発されました。ボタンフライを採用しており、「Student Fit（学生フィット）」というスローガンが多くのタグに記載されています。1934年から長年にわたってリーバイスのレディースラインの中核を担い、現在でもコレクターから高い人気を誇るヴィンテージモデルです。現行の721・724など700番台レディースシリーズの原点でもあります。',
        bodyEn: "The Levis 701, born in 1934, was Levis first women's jean. While the 501 targeted men, the 701 was developed as a women's-specific model with a slimmer, more feminine silhouette. It uses a button fly and features the 'Student Fit' label on many tags. From its 1934 debut through decades of production, it served as the core of Levis women's line and remains a highly sought vintage model. It is also the origin of today's 700 series women's line (721, 724, etc.).",
      },
      {
        headingJa: '501との主な違い',
        headingEn: 'Key Differences from the 501',
        bodyJa: '701と501の最大の違いはシルエットです。701はヒップ周りが501より細身でストレートに近いシルエットを持ちます。多くのタグに「Student Fit」と記載されており、これが701の識別において最も重要な指標のひとつです。フライはボタンフライで501と同様ですが、腰回りの裁断が女性向けに調整されています。ヴィンテージ市場では501ほどの知名度はないものの、状態の良いBig E期の701は希少品として高評価を受けています。「Student Fit」の表記があれば701と特定できる場合が多いため、必ずタグを確認してください。',
        bodyEn: "The key difference between the 701 and 501 is silhouette. The 701 has a slimmer hip and straighter overall cut compared to the 501. 'Student Fit' on the tag is one of the most important 701 identification markers. Both use button flies, but the 701's cut is adjusted for women's proportions. While less recognized than the 501, Big E era 701s in good condition command significant collector premiums. 'Student Fit' text on the tag often allows definitive 701 identification — always check the tag.",
      },
      {
        headingJa: '年代別の特徴と判定方法',
        headingEn: 'Era Features and Dating',
        bodyJa: '1934〜1954年：本革パッチ・Big Eタブ・ケアラベルなし・セルビッジ・ボタンフライ・「Two Horse Brand」と「Student Fit」の組み合わせが確認できれば超希少。1955〜1971年（Big E全盛）：Jacronパッチ・Big Eタブ・ケアラベルなし・セルビッジ。1971〜1981年：Small eタブ・ケアラベルあり（英語のみ→1971〜73年・多言語→73年以降）・セルビッジ継続。1981年以降：セルビッジなし・現代的な仕様。年代判定は501と同じポイントで行えますが、「Student Fit」表記とレディースカットのシルエットも補助的な指標になります。',
        bodyEn: "1934–1954: leather patch, Big E tab, no care label, selvedge, button fly — 'Two Horse Brand' + 'Student Fit' combination confirms ultra-rare status. 1955–1971 (Big E prime): Jacron patch, Big E tab, no care label, selvedge. 1971–1981: Small e tab, care label (English only = 1971–73, multilingual = post-73), selvedge continuing. Post-1981: no selvedge, modern specs. Dating uses the same points as the 501, with 'Student Fit' label and women's-specific silhouette as additional markers.",
      },
      {
        headingJa: '関連するレディースモデル',
        headingEn: 'Related Womens Models',
        bodyJa: '701と関連するレディースモデルには702・705・912があります。702・705は1950〜60年代に製造されたレディースモデルで、現存数が少ない希少品です。912はオレンジタブラインのスリムテーパードモデルで、オレンジタブ廉価ラインのレディース向けモデルとして展開されました。現行品では721（ハイライズスキニー）・724（ハイライズストレート）が700番台の系譜を引き継いでいます。これらと701ヴィンテージを区別するには、タブ色・ケアラベル・セルビッジを確認してください。',
        bodyEn: "Related women's models include the 702, 705, and 912. The 702 and 705 are women's models from the 1950s–60s with few surviving examples. The 912 is a slim-tapered model from the orange tab budget line for women. Today's 721 (high rise skinny) and 724 (high rise straight) carry forward the 700 series lineage. To distinguish these from vintage 701s, check tab color, care label, and selvedge.",
      },
    ],
  },
  {
    slug: 'article-jacket-types',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイスジャケット完全ガイド｜Type1・Type2・Type3の違い',
    titleEn: "Levis Denim Jacket Guide — Type 1, 2 & 3 Differences",
    descJa: '506XX（Type1）・507XX（Type2）・557XX（Type3）の特徴・年代・希少性を詳解。トラッカージャケットの歴史と見分け方。',
    descEn: '506XX (Type1), 507XX (Type2), 557XX (Type3) — features, eras, rarity, and Trucker Jacket history.',
    tags: ['506XX', '507XX', '557XX', 'Type3', 'トラッカー'],
    sections: [
      {
        headingJa: 'リーバイスデニムジャケットの歴史',
        headingEn: "History of Levis Denim Jackets",
        bodyJa: 'リーバイスのデニムジャケットはジーンズと同様に100年以上の歴史を持ちます。現在「トラッカージャケット」と呼ばれる557XXは1962年に誕生しましたが、その前身として506XX（Type1・1936年〜）・507XX（Type2・1953年〜）が存在します。各タイプはシルエット・ポケット構成・年代が異なり、コレクター市場でそれぞれ異なる評価を受けています。特にType1・Type2は製造期間が短く現存数が極めて少ないため、市場に出ること自体が稀な超希少品です。年代判定はジーンズと同じポイント（タブ・ケアラベル・ジッパー・リベット）で行えます。',
        bodyEn: "Levis denim jackets share a 100+ year history with their jeans. The 557XX Trucker Jacket was born in 1962, preceded by the 506XX (Type1, 1936+) and 507XX (Type2, 1953+). Each type differs in silhouette, pocket configuration, and era, receiving distinct valuations in the collector market. Type1 and Type2 are ultra-rare due to short production runs with extremely few survivors — their appearance on the market is itself rare. Dating uses the same points as jeans: tab, care label, zipper brand, and rivets.",
      },
      {
        headingJa: '506XX（Type1・1936〜1953年頃）',
        headingEn: '506XX — Type 1 (c.1936–1953)',
        bodyJa: '506XXはリーバイス最初のデニムジャケット「Type1」です。胸ポケットが1つ（左側のみ）で、内側にウールのブランケットライナーが付いているものが多く見られます。ウエスト部分が独特のカーブを描き、裾にかけてわずかに広がります。製造期間は1936年頃から1953年頃と比較的短く現存数は極めて少ないです。赤タブ導入（1936年）以降はBig E仕様となり、同時代のScovill・ConmarジッパーやTALON 42ジッパーで年代判定ができます。コレクター市場での評価は最高峰で、良好なコンディションの個体は非常に高価格で取引されます。LVC（Levis Vintage Clothing）による復刻品も存在するため、真偽の確認には複数のポイントを組み合わせることが重要です。',
        bodyEn: "The 506XX is Levis very first denim jacket — the Type 1. It features a single chest pocket (left only) and is often found with a wool blanket lining inside. The waist has a distinctive curved silhouette that flares slightly toward the hem. Production ran roughly from 1936 to 1953 — relatively short — with extremely few survivors. Post-1936 examples carry Big E specification, with Scovill/Conmar or TALON 42 zippers enabling era dating. Collector valuation is at the absolute top. LVC reproductions exist, so combining multiple verification points is critical for authentication.",
      },
      {
        headingJa: '507XX（Type2・1953〜1962年頃）',
        headingEn: '507XX — Type 2 (c.1953–1962)',
        bodyJa: '507XXはType1の後継「Type2」で、1953年頃から1962年頃まで製造されました。Type1との最大の違いは胸ポケットが2つに増えた点と、ウエスト部分にダブルプリーツ（二重のひだ）が付いた点です。ブランケットライナーは廃止されています。製造期間がType1より短く現存数も少ないため希少性はType1と同様に非常に高いです。1962年以前の製造のためすべての個体がBig E期またはそれ以前の仕様です。TALON 42ジッパー・本革またはJacronパッチ・Big Eタブが主要な識別ポイントです。',
        bodyEn: "The 507XX is the Type 1's successor — the Type 2, produced from roughly 1953 to 1962. Key differences from Type 1: two chest pockets (instead of one) and double pleats at the waist. The blanket lining was eliminated. Production ran shorter than Type 1 with similarly few survivors, making rarity equally extreme. All examples predate 1962, so every 507XX carries Big E or earlier specifications. TALON 42 zipper, leather or Jacron patch, and Big E tab are the primary identification points.",
      },
      {
        headingJa: '557XX / 70557XX（Type3・1962年〜）',
        headingEn: '557XX / 70557XX — Type 3 (1962+) Trucker Jacket',
        bodyJa: '557XXは「トラッカージャケット」として知られ、1962年から現在まで継続生産されています。胸に2つのフラップポケット・ウエストに2つのボタン留めポケットという構成が特徴です。Big E期（〜1971年）の品番は「70557XX」で、TALONジッパー・Big Eタブ・ケアラベルなし・セルビッジありの個体は特に高い人気を誇ります。現行品も「Type3」として生産されていますが、ヴィンテージと見分けるにはタブ・ケアラベル・セルビッジ・ジッパーブランドを確認することが重要です。アウトシームのオーバーロックステッチ色（オレンジ→1981〜84年・白→1985〜93年）も有効な指標です。',
        bodyEn: "The 557XX, known as the Trucker Jacket, has been in continuous production from 1962 to the present. Its defining configuration is two flap chest pockets plus two button-closure waist pockets. Big E era (pre-1971) examples carry the '70557XX' model number, with TALON zipper + Big E tab + no care label + selvedge commanding the highest premiums. Current production continues as the 'Type 3,' but distinguishing vintage from modern requires verifying tab, care label, selvedge, and zipper brand. Outseam overlock stitch color (orange = 1981–84, white = 1985–93) is also a useful indicator.",
      },
      {
        headingJa: 'ジャケット年代判定の優先順位',
        headingEn: 'Jacket Dating Priority Order',
        bodyJa: 'デニムジャケットの年代判定は以下の優先順位で行うと効率的です。最重要（どちらか一方で即判定）：①赤タブ（Big E→1971年以前・Small e→1971年以降）・②ケアラベルの有無（なし→1971年以前確定）。重要（年代を10年単位で絞る）：③ジッパーブランド（Scovill→1950年代以前・TALON 42→1950〜60年代・TALON→60年代後半〜70年代前半・YKK→70年代以降）・④セルビッジ有無（あり→1985年以前）。補助（さらに精密化）：⑤ポケット構成でType判定・⑥アウトシームオーバーロック色・⑦リベット状態・⑧パッチ素材。',
        bodyEn: "Efficient jacket dating follows this priority order. Most important (either alone enables instant dating): ①red tab (Big E = pre-1971, Small e = post-1971), ②care label presence (absent = confirmed pre-1971). Important (narrows to within a decade): ③zipper brand (Scovill = pre-1950s, TALON 42 = 1950s–60s, TALON = late 60s–early 70s, YKK = post-1970s), ④selvedge presence (present = pre-1985). Supporting (further precision): ⑤pocket configuration for Type identification, ⑥outseam overlock color, ⑦rivet condition, ⑧patch material.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(catJa: string): Article[] {
  return ARTICLES.filter((a) => a.catJa === catJa);
}

