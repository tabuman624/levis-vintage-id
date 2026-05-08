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
    titleJa: 'リーバイス501の年代別見分け方【完全版】',
    titleEn: "Levi's 501 Dating Guide — Complete Edition",
    descJa: '1950年代〜1980年代まで、赤タブ・ジッパー・ケアラベル・セルビッジで判定する完全ガイド。',
    descEn: "Complete guide to dating Levi's 501 from the 1950s to 1980s.",
    tags: ['501', '年代判定', 'Big E'],
    sections: [
      {
        headingJa: 'リーバイス501とは',
        headingEn: "What is the Levi's 501?",
        bodyJa: 'リーバイス501は1873年に誕生した世界初のジーンズで、150年以上作り続けられているアパレル史上最長寿のモデルです。ボタンフライとストレートシルエットを特徴とし、マーロン・ブランドやジェームズ・ディーンが着用したことでポップカルチャーのアイコンとなりました。ヴィンテージ市場では特に1950年代〜1970年代前半のモデルが高い人気を誇り、コンディションの良い個体は国内外で高値で取引されています。501は単なる古着ではなく、アメリカ文化の歴史そのものを体現した存在として世界中のコレクターに愛されています。',
        bodyEn: "The Levi's 501 was born in 1873 as the world's first jeans, making it the longest-running garment in apparel history at over 150 years. Known for its button fly and straight silhouette, it became a pop culture icon when worn by Marlon Brando and James Dean. In the vintage market, models from the 1950s to early 1970s are particularly sought after, with quality examples commanding high prices both domestically and internationally. The 501 is not merely old clothing — it embodies American cultural history and is cherished by collectors worldwide.",
      },
      {
        headingJa: '年代判定の5大ポイント',
        headingEn: 'The 5 Key Dating Points',
        bodyJa: '501の年代を判定するには複数のポイントを組み合わせることが重要です。第一のポイントは赤タブです。バックポケット右上の赤いタブの文字が両面大文字「LEVI\'S」であればBig E（1971年以前）、片面小文字「Levi\'s」であれば1971年以降です。第二のポイントはケアラベルです。1971年にアメリカで洗濯表示が法的に義務化されたため、ケアラベルがなければ1971年以前確定です。第三のポイントはジッパーです（505などジッパーフライのモデル向け）。ConmarならA1940s、TALON 42なら1950〜60s、YKKなら1970s以降です。第四のポイントはセルビッジで、裾内側に白い耳があれば1981年以前です。第五のポイントはパッチで、本革なら1954年以前の可能性が高くなります。',
        bodyEn: "Dating a 501 requires combining multiple points. First: red tab — both sides uppercase 'LEVI'S' = Big E (pre-1971); one side lowercase = post-1971. Second: care label — none means pre-1971, legally confirmed. Third: zipper (for zipper-fly models like 505) — Conmar = 1940s, TALON 42 = 1950s-60s, YKK = 1970s+. Fourth: selvedge — white ear inside hem = pre-1981. Fifth: patch — genuine leather suggests pre-1954.",
      },
      {
        headingJa: '年代別の詳細な特徴',
        headingEn: 'Detailed Features by Era',
        bodyJa: '1947年以前の超希少モデルにはクロッチリベット（股部分の金属鋲）や隠しステッチが存在します。1950年代前半の501XXは本革パッチ・ケアラベルなし・セルビッジデニムの三点が揃い、現在最も希少価値の高いカテゴリです。1954〜1971年のBig E全盛期は合皮パッチに変わりますが、ケアラベルなし・赤タブ大文字・セルビッジが揃います。1971〜1981年の移行期はケアラベルが追加され赤タブも小文字に変わりますが、セルビッジは1981年まで継続されます。1981年以降はロータリー織機に移行しセルビッジが廃止されました。年代が下がるほど価値は相対的に下がりますが、デッドストック（未使用タグ付き）の個体は年代に関わらず高い評価を受けます。',
        bodyEn: "Pre-1947 ultra-rare models feature crotch rivets and hidden stitching. Early 1950s 501XX — leather patch, no care label, selvedge — represents the highest rarity category today. The 1954–1971 Big E prime era shifted to synthetic patches but retained no care label, uppercase tab, and selvedge. The 1971–1981 transition added care labels and switched to lowercase tabs, but selvedge continued until 1981. Post-1981 saw the rotary loom transition and end of selvedge. Value generally decreases with later eras, though deadstock examples command premiums regardless of era.",
      },
      {
        headingJa: '鑑定精度を上げる撮影のコツ',
        headingEn: 'Photography Tips for Better Identification',
        bodyJa: 'AI鑑定の精度を上げるには複数のポイントを撮影してアップロードすることが重要です。赤タブは必ず両面を撮影してください。ケアラベルはタグ全体が読めるように明るい場所で撮影します。ジッパー刻印は斜め光を当てて刻印が浮き上がるように撮影します。セルビッジは裾を折り返して白い耳が見えるように撮影します。ボタン裏刻印も斜め光が有効です。一つのポイントだけでなく複数を組み合わせることで、より確実な年代判定が可能になります。写真はピントが合っていること・明るい場所で撮影していること・対象物が画面内に収まっていることを確認してからアップロードしてください。',
        bodyEn: "To improve AI identification accuracy, photograph and upload multiple points. Always photograph both sides of the red tab. Shoot the care label in good lighting with all text readable. Use angled light to make zipper stamps stand out. Fold the hem to show the white selvedge edge. Angled light also works well for button back stamps. Combining multiple points yields more reliable dating than any single feature. Before uploading, confirm photos are in focus, taken in good lighting, and show the subject clearly within the frame.",
      },
    ],
  },
  {
    slug: 'article-red-tab',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: '赤タブで年代を見分ける方法｜Big Eとは何か',
    titleEn: 'Red Tab Dating — What is Big E?',
    descJa: '両面大文字・片面小文字の違い、1971年という分岐点、オレンジタブとの違いを解説。',
    descEn: 'Explains the Big E vs lowercase tab difference and the critical 1971 divide.',
    tags: ['赤タブ', 'Big E', '1971年'],
    sections: [
      {
        headingJa: '赤タブとは何か',
        headingEn: 'What is the Red Tab?',
        bodyJa: '赤タブとはリーバイスのジーンズやジャケットのバックポケット右上に縫い付けられた、小さな赤い布製のラベルのことです。1936年にリーバイスが商標を守るために導入したこのタブは、以来リーバイスのアイコニックなデザイン要素として世界中に認知されています。現在も現行品に使われており、タブのデザインや文字の大小がヴィンテージ品の年代判定において最も重要な指標のひとつとなっています。赤タブは見た目は小さいですが、その一枚が何万円もの価値の差を生み出すコレクターにとって最重要ポイントです。',
        bodyEn: "The red tab is a small red fabric label sewn onto the upper right of the back pocket on Levi's jeans and jackets. Introduced in 1936 to protect the brand's trademark, it has since become one of Levi's most iconic design elements worldwide. Still used on current production, the tab's design and letter case are among the most important indicators for dating vintage pieces. Despite its small size, this single label can mean a difference of tens of thousands of yen in value — making it the top priority for collectors.",
      },
      {
        headingJa: 'Big Eとは｜1971年という決定的な分岐点',
        headingEn: 'Big E — The Decisive 1971 Divide',
        bodyJa: '「Big E」とはヴィンテージコレクターの間で使われる用語で、赤タブの「LEVI\'S」表記が両面とも大文字のモデルを指します。1936年に赤タブが導入されてから1971年まで、すべてのリーバイス製品は両面大文字の赤タブが使用されていました。しかし1971年を境に、コスト削減のためタブの文字が片面小文字「Levi\'s」に変更されました。この変更により、Big Eかどうかだけで1971年前後を瞬時に判定できるようになりました。Big Eは現在のヴィンテージ市場において最も重視される指標のひとつで、同じ年代・型番・コンディションでもBig Eかどうかで価値が大きく変わることがあります。',
        bodyEn: '"Big E" is a collector term for models where the red tab reads "LEVI\'S" in uppercase on both sides. From the introduction of the red tab in 1936 until 1971, all Levi\'s used this double-uppercase specification. In 1971, one side changed to lowercase "Levi\'s" as a cost-cutting measure. This change allows instant pre/post-1971 dating based on tab case alone. Big E is one of the most important indicators in today\'s vintage market — two pieces of the same era, model, and condition can differ significantly in value based solely on this.',
      },
      {
        headingJa: 'タブの種類と年代一覧',
        headingEn: 'Tab Types and Era Reference',
        bodyJa: 'リーバイスのタブには主に4種類があります。タブなし（1936年以前）：タブ導入前の超希少モデル。赤タブ両面大文字・Big E（1936〜1971年）：コレクター最重視。赤タブ片面小文字・スモールE（1971年〜現在）：現行品に近い仕様。オレンジタブ（1969〜1979年）：廉価ライン向けのオレンジ色タブ。オレンジタブはBig Eとは異なる廉価ラインで、ベルボトムなどファッション向けモデルに使用されました。現在は廃止されており一定のコレクター人気があります。スモールEとオレンジタブを混同しないよう注意が必要です。',
        bodyEn: "Levi's tabs fall into four main categories. No tab (pre-1936): ultra-rare pre-introduction models. Red tab double-uppercase Big E (1936–1971): top collector priority. Red tab single-lowercase Small E (1971–present): closer to current production spec. Orange tab (1969–1979): orange-colored tab for budget-line models used on fashion pieces like bell-bottoms. Now discontinued with its own collector following. Be careful not to confuse Small E with Orange Tab — they are distinct categories.",
      },
      {
        headingJa: '正しい確認・撮影方法',
        headingEn: 'Correct Verification and Photography',
        bodyJa: 'Big Eの確認で最も重要なのは必ず両面を見ることです。表面だけ大文字でも裏面が小文字であればスモールE（1971年以降）です。撮影のコツは、タブを軽く引っ張り文字が正面を向くようにしてから接写することです。自然光か白色光のもとでピントが合っていることを確認して撮影してください。スマートフォンのマクロモードを使うと細かい文字まで鮮明に撮影できます。タブが褪色・摩耗している場合は光の角度を変えながら複数枚撮影し、最も文字がはっきり見えるものをAI鑑定に使用してください。両面を別々に撮影し、両方をアップロードすることで鑑定精度が上がります。',
        bodyEn: "The most critical rule is always checking both sides. Even if the front appears uppercase, a lowercase back means it's post-1971 Small E. Photography tip: gently pull the tab so text faces forward, then shoot close-up in natural or white light with confirmed focus. Smartphone macro mode captures fine text clearly. For faded or worn tabs, try different angles and take multiple shots — use the clearest image. Photograph both sides separately and upload both for higher identification accuracy.",
      },
    ],
  },
  {
    slug: 'article-zipper',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ジッパーブランドで年代を特定する方法',
    titleEn: 'Dating by Zipper Brand — TALON, YKK, Conmar',
    descJa: 'Conmar・TALON 42・YKKの違いと年代の対応関係を詳しく解説。',
    descEn: 'Detailed guide to Conmar, TALON 42, and YKK zipper eras.',
    tags: ['ジッパー', 'TALON', 'YKK', 'Conmar'],
    sections: [
      {
        headingJa: 'なぜジッパーで年代がわかるのか',
        headingEn: 'Why Zippers Reveal the Era',
        bodyJa: 'ヴィンテージリーバイスの年代判定において、ジッパーブランドは赤タブ・ケアラベルと並ぶ重要な指標です。リーバイスが使用するジッパーブランドは年代によって明確に変化しており、ブランド名を確認するだけで製造年代を10年単位で絞り込むことができます。ただし、501はボタンフライのためジッパーがなく、505・517・557XXなどジッパーフライのモデルに有効です。ジッパーブランドは赤タブやケアラベルと組み合わせることで、より精度の高い年代判定が可能になります。一つの指標だけでなく複数を組み合わせることが確実な鑑定の基本です。',
        bodyEn: "Zipper brand is one of the top three dating indicators for vintage Levi's alongside the red tab and care label. The brands Levi's used changed clearly over the decades, allowing era narrowing to within roughly ten years. Note this applies to zipper-fly models like the 505, 517, and 557XX — the 501 has no zipper. Combining zipper brand with red tab and care label yields higher-precision dating. Using multiple indicators rather than any single one is the foundation of reliable identification.",
      },
      {
        headingJa: '主要3ブランドの特徴と年代',
        headingEn: 'The Three Major Brands and Their Eras',
        bodyJa: 'Conmar（1940年代〜1950年代前半）：アメリカ製のジッパーブランドで「CONMAR」または「CONMAR GRIPPER」の刻印が特徴です。現存数が少なく、Conmarジッパーを持つリーバイスは超希少品です。TALON 42（1950年代〜1960年代）：TALONはアメリカの老舗ジッパーメーカーで「42」はスライダーのサイズ規格を表します。Big E期のコアな時代を代表するジッパーです。TALON（42なし）（1960年代後半〜1970年代前半）：同じTALONですが「42」の刻印がない後期仕様です。YKK（1970年代以降）：日本の吉田工業製で現在も世界最大のジッパーブランドです。リーバイスが1970年代初頭にコスト削減のため採用しました。',
        bodyEn: "Conmar (1940s–early 1950s): American-made, stamped 'CONMAR' or 'CONMAR GRIPPER.' Rare survivors make Conmar-equipped Levi's ultra-rare. TALON 42 (1950s–1960s): TALON was a major American zipper maker; '42' denotes the slider size specification — representing the core Big E era. TALON no 42 (late 1960s–early 1970s): same brand without the '42' stamp. YKK (1970s onward): made by Japan's Yoshida Kogyo, now the world's largest zipper brand, adopted by Levi's in the early 1970s for cost reduction.",
      },
      {
        headingJa: 'TALON 42とTALONの見分け方',
        headingEn: 'Distinguishing TALON 42 from TALON',
        bodyJa: '同じTALONブランドでも「42」の有無で年代が異なります。スライダーのプル部分や本体に「TALON 42」と刻印されていれば主に1950〜1960年代、「TALON」のみであれば主に1960年代後半〜1970年代前半です。この違いを知っているだけで、同じBig E期のモデルをさらに10年単位で絞り込めます。実際の刻印は非常に小さく摩耗していることが多いため、スマートフォンのマクロモードと斜め光を組み合わせて撮影することが重要です。どちらのTALONも赤タブ大文字・ケアラベルなしと組み合わさることが多く、これらが揃えばBig E期と確信できます。',
        bodyEn: "'TALON 42' stamped on the pull or slider body suggests mainly 1950s–60s; 'TALON' alone suggests mainly late 1960s–early 1970s. Knowing this lets you narrow Big E era models by an additional decade. The stamps are very small and often worn — smartphone macro mode combined with angled lighting is essential. Both TALON variants typically accompany an uppercase tab and no care label, and when all three are present, Big E era identification is highly reliable.",
      },
      {
        headingJa: '撮影のコツと注意点',
        headingEn: 'Photography Tips and Cautions',
        bodyJa: 'ジッパーの刻印撮影で最も効果的なのは斜め光（サイドライティング）です。スマートフォンのライトを刻印に対して斜め45度程度から当てると、刻印の凸凹が影になって浮かび上がります。プル部分だけでなくスライダー本体の両面も撮影してください。摩耗が激しい場合は複数の角度から撮影し最も鮮明なものを使います。ジッパーを少し開いた状態でスライダーを引き出すと撮影しやすくなります。YKKは比較的読みやすいですが、ConmarやTALONは摩耗していることが多いため特に注意が必要です。刻印が読み取れない場合は「不明」として他のポイントで補完することも重要です。',
        bodyEn: "Angled side lighting is the most effective technique. Hold a phone light at roughly 45 degrees to the stamp — the engraving relief casts shadows and stands out. Photograph both the pull tab and both faces of the slider body. For heavily worn stamps, shoot multiple angles and use the sharpest result. Slightly opening the zipper and pulling out the slider makes photography easier. YKK is relatively readable; Conmar and TALON are often worn and need extra care. If the stamp is unreadable, note it as 'unknown' and supplement with other identification points.",
      },
    ],
  },
  {
    slug: 'article-care-label',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ケアラベルで1971年を見分ける｜決定的指標',
    titleEn: 'Care Label Dating — The Definitive 1971 Indicator',
    descJa: '洗濯表示義務化の歴史と、ケアラベルの有無・言語による年代判定を詳解。',
    descEn: 'The history of mandatory care labeling and precise dating by label presence and language.',
    tags: ['ケアラベル', '1971年', '年代判定'],
    sections: [
      {
        headingJa: 'ケアラベルとは何か',
        headingEn: 'What is a Care Label?',
        bodyJa: 'ケアラベルとは衣類に付いている洗濯方法や素材の表示タグのことです。ヴィンテージリーバイスの場合、ウエストバンドの内側に縫い付けられているタグがケアラベルにあたります。洗濯温度・乾燥方法・素材・製造国などが記載されており、これらの情報がヴィンテージ品の年代判定に役立ちます。特に重要なのはケアラベルが存在するかどうかという点です。これだけで年代を1971年前後に二分できる、最も確実な指標のひとつです。赤タブと並んでケアラベルの有無は、ヴィンテージリーバイス鑑定において欠かせない確認ポイントです。',
        bodyEn: "A care label is a tag sewn inside a garment providing washing instructions and material information. On vintage Levi's, it is the tag sewn inside the waistband, listing wash temperature, drying method, fabric content, and country of manufacture. The most important factor is simply whether a care label exists — this single point divides any piece into pre- or post-1971 with high certainty. Alongside the red tab, care label presence or absence is an indispensable verification point in vintage Levi's identification.",
      },
      {
        headingJa: '1971年という決定的な分岐点',
        headingEn: 'The Decisive 1971 Turning Point',
        bodyJa: '1971年7月、アメリカの連邦取引委員会（FTC）は「Care Labeling Rule（ケアラベル規則）」を施行しました。この規則により、アメリカで販売されるすべての衣類に洗濯表示を記載することが法的に義務付けられました。この法律は現在も有効であり、1971年以降に製造されたリーバイスには必ずケアラベルが付いています。逆にケアラベルがない＝1971年以前の製品という判定が、法律的な根拠をもって成立します。赤タブの大文字・小文字と合わせて確認することで、年代判定の精度が大幅に向上します。',
        bodyEn: "In July 1971, the US Federal Trade Commission enacted the Care Labeling Rule, legally requiring washing instructions on all garments sold in America. This law remains in effect today, meaning all Levi's manufactured after 1971 must carry a care label. Conversely, no care label definitively means pre-1971, backed by legal authority. Combining care label status with red tab case confirmation significantly improves dating accuracy.",
      },
      {
        headingJa: 'ケアラベルの種類と年代の関係',
        headingEn: 'Care Label Types and Their Eras',
        bodyJa: 'ケアラベルなし（1971年以前確定）：最重要の判定指標です。英語のみ表記（1971〜1973年頃）：義務化直後の移行期で「WASH WARM」「TUMBLE DRY」などシンプルな英語表記が特徴です。多言語表記・英語＋スペイン語等（1973年以降）：輸出市場の拡大に伴い多言語化しました。絵記号（ピクトグラム）あり（1980年代以降）：洗濯桶・アイロンなどの絵記号が追加されました。バーコードあり（1980年代後半〜）：在庫管理システム導入によるものです。複数言語が増えるほど、また記載項目が増えるほど年代が新しくなる傾向があります。',
        bodyEn: "No label (confirmed pre-1971): most important dating indicator. English only (c.1971–1973): simple text like 'WASH WARM' and 'TUMBLE DRY' in the transition period. Multilingual English + Spanish etc. (post-1973): multilingual as export markets expanded. Pictogram symbols (post-1980s): washing tub, iron, and other icons added. Barcode (post-late 1980s): introduced with inventory management systems. More languages and more listed items generally indicate a later date.",
      },
      {
        headingJa: '正しい確認・撮影方法',
        headingEn: 'Correct Verification and Photography',
        bodyJa: 'ケアラベルはウエストバンドの内側、通常はバックセンターやサイドシームの近くに縫い付けられています。撮影のコツは、タグを引き出してすべての文字が画面内に収まるよう明るい場所で撮影することです。複数のタグが重なっている場合は各タグを個別に撮影してください。特に重要なのはケアラベルがない場合も写真を撮ることです。内側の状態全体を撮影することで、AIが「タグなし＝1971年以前」という判定の根拠として活用できます。後からタグが縫い付けられているリメイク品の場合、縫い目の状態や糸の色が他のタグと異なることが多いので注意してください。',
        bodyEn: "Care labels are sewn inside the waistband, usually near the back center or side seam. Photography tip: pull out the tag and shoot in good lighting with all text visible in frame. If multiple tags are layered, photograph each individually. Critically: even when there is no care label, photograph the inside to document its absence — AI uses this to confirm pre-1971. Watch for later-added tags on reworked garments: the stitching and thread color of added tags often differ noticeably from original construction.",
      },
    ],
  },
  {
    slug: 'article-505',
    catJa: '型番別', catEn: 'Model Guide',
    titleJa: 'リーバイス505の特徴と年代別の見分け方',
    titleEn: "Levi's 505 Features & Dating Guide",
    descJa: '1967年誕生のジッパーフライモデル。70505（Big E期）の見分け方と501との違いを解説。',
    descEn: 'The zipper-fly model born in 1967. Identifying the Big E era 70505 and differences from the 501.',
    tags: ['505', '70505', 'Big E'],
    sections: [
      {
        headingJa: 'リーバイス505とは',
        headingEn: "What is the Levi's 505?",
        bodyJa: 'リーバイス505は1967年に発売されたジッパーフライのストレートジーンズです。501のボタンフライに対してジッパーを採用したことで、より現代的な使いやすさを実現しました。シルエットは501に近いストレートですが、股上がやや浅くよりスリムな印象です。1967年の発売から1971年までのBig E期は「70505」という品番で呼ばれ、コレクターから高い人気を誇ります。ヴィンテージ市場では501ほどの知名度はないものの、希少なBig E期の70505は入手困難なプレミア品として取引されています。505はジッパーフライのためジッパーブランドによる年代判定が有効という点も特徴です。',
        bodyEn: "The Levi's 505 is a zipper-fly straight jean released in 1967, offering more modern convenience than the 501's button fly. The silhouette is close to the 501's straight cut but with a slightly lower rise and slimmer impression. From its 1967 launch to 1971, Big E era examples carry the '70505' model number and are highly coveted. While less well-known than the 501 in the vintage market, rare Big E 70505s trade as hard-to-find premium pieces. The zipper fly also makes zipper brand dating particularly useful for the 505.",
      },
      {
        headingJa: '501との違いと見分け方',
        headingEn: 'Differences from the 501',
        bodyJa: '501と505の最大の違いはフライ（前開き）です。ボタンが縦に並んでいれば501、ジッパーであれば505です。シルエットも微妙に異なり505の方がやや細身でモダンな印象です。品番はウエストバンドの内側タグまたはバックポケット上部のペーパーラベルで確認できます。「70505」という表記があればBig E期（1967〜1971年）の初期モデルです。501はジッパーがないためジッパー年代判定ができませんが、505ではTALONジッパーならBig E期〜1970年代前半、YKKなら1970年代以降と判定できます。',
        bodyEn: "The key difference between the 501 and 505 is the fly — vertical buttons = 501, zipper = 505. The 505 silhouette is also slightly slimmer and more modern. The model number appears on the inside waistband tag or back pocket paper label: '70505' indicates a Big E era (1967–1971) model. Unlike the 501 (no zipper), the 505 benefits from zipper brand dating: TALON suggests Big E era to early 1970s, YKK suggests 1970s onward.",
      },
      {
        headingJa: '年代別の特徴と価値',
        headingEn: 'Era Features and Value',
        bodyJa: '1967〜1971年（70505・Big E期）：TALONジッパー・赤タブ大文字・ケアラベルなし・セルビッジあり。最も希少で価値が高い。1971〜1975年：小文字タブ・英語のみケアラベル・TALONまたはYKKジッパー。1975〜1981年：多言語ケアラベル・YKKジッパー・セルビッジあり。1981年以降：セルビッジなし・大量生産仕様。Big E期の70505は501のBig Eに比べて流通量が少なく、状態の良い個体は特に希少です。コンディション・セルビッジの有無・タブの状態がそのまま価格に反映されます。',
        bodyEn: '1967–1971 (70505, Big E): TALON zipper, uppercase tab, no care label, selvedge — rarest and most valuable. 1971–1975: lowercase tab, English-only label, TALON or YKK. 1975–1981: multilingual label, YKK, selvedge present. Post-1981: no selvedge, mass-production spec. Big E 70505s had lower production volumes than the 501 Big E, making well-preserved examples particularly rare. Condition, selvedge presence, and tab condition directly translate to price.',
      },
    ],
  },
  {
    slug: 'article-selvedge',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'セルビッジデニムとは｜見分ける方法',
    titleEn: 'What is Selvedge Denim? How to Identify',
    descJa: 'シャトル織機とロータリー織機の違い、1981年廃止の理由、耳の確認方法を詳解。',
    descEn: 'Shuttle vs rotary looms, why selvedge ended around 1981, and how to find and photograph it.',
    tags: ['セルビッジ', '1981年', '耳付き'],
    sections: [
      {
        headingJa: 'セルビッジデニムとは',
        headingEn: 'What is Selvedge Denim?',
        bodyJa: 'セルビッジ（Selvedge）とはシャトル織機で織られたデニム生地の端処理のことです。「耳（ミミ）」とも呼ばれ、生地の両端に織り込まれた自己完結した縁が特徴です。ジーンズの裾を折り返すと内側に見える白い縁に赤や白の細いラインがセルビッジの証です。現代のデニムのほとんどはロータリー織機で大量生産されており、セルビッジは手間とコストのかかる希少な製法です。セルビッジデニムは現在でも高級デニムブランドが採用する品質の証とされており、特に日本のデニムブランドが高く評価する要素です。ヴィンテージリーバイスにおけるセルビッジの確認は、年代判定と価値評価の両面で重要です。',
        bodyEn: "Selvedge is the self-finished edge of denim woven on a shuttle loom. Also called the 'ear,' it appears as a white edge with a thin red or white line inside the folded hem. Most modern denim is mass-produced on rotary looms, making selvedge a rare and labor-intensive method. Selvedge remains a quality benchmark for premium denim brands today — particularly highly regarded by Japanese brands. For vintage Levi's, verifying selvedge is important both for era dating and value assessment.",
      },
      {
        headingJa: 'シャトル織機とロータリー織機の違い',
        headingEn: 'Shuttle Loom vs Rotary Loom',
        bodyJa: 'シャトル織機は横糸を折り返しながら織るため、生地端が自然に閉じてセルビッジが生まれます。生産速度は遅いですが生地が緻密で独特の凸凹感と風合いを持ちます。リーバイスは1981年頃にロータリー織機へ完全移行しました。ロータリー織機は生産効率が大幅に向上しますが、生地端が切りっぱなしになるため端処理（ロック縫い）が別途必要です。この移行はコスト削減と大量生産対応のための経営判断でしたが、結果として「セルビッジあり＝1981年以前」という明確な年代判定の指標を生み出しました。',
        bodyEn: "Shuttle looms fold the weft thread back, creating a natural self-finished selvedge edge. Production is slower, but the resulting fabric is denser with distinctive texture and character. Levi's fully transitioned to rotary looms around 1981. Rotary looms greatly increase production efficiency but leave raw edges requiring separate serging. This cost-reduction and mass-production shift inadvertently created a clear vintage dating marker: selvedge present = pre-1981.",
      },
      {
        headingJa: 'セルビッジの確認方法と撮影',
        headingEn: 'How to Check and Photograph Selvedge',
        bodyJa: 'セルビッジの確認方法はとても簡単です。ジーンズの裾を3〜4cm折り返し内側の端を見てください。白い縁（耳）に赤や白の細いラインがあればセルビッジあり→1981年以前の証拠です。端が切りっぱなしでロック縫いだけならセルビッジなし→1981年以降の可能性が高いです。撮影は裾を折り返した状態で白い耳が画面内に収まるよう明るい場所で行ってください。両足とも確認するとより確実です。セルビッジが存在する場合、同じ年代・型番の製品でも価値が大きく上がるため必ず確認・撮影してください。',
        bodyEn: "Checking for selvedge is simple. Fold up the hem 3–4cm and look at the inner edge. White edge (ear) with a thin red or white line = selvedge present → pre-1981 proof. Cut edge with only a serged seam = no selvedge → likely post-1981. Photograph with the hem folded so the white edge is clearly visible, in good lighting. Check both legs for certainty. Selvedge presence significantly increases value even between same-era, same-model pieces — always verify and document it.",
      },
      {
        headingJa: 'セルビッジが価値を高める理由',
        headingEn: 'Why Selvedge Increases Value',
        bodyJa: 'セルビッジデニムがヴィンテージ市場で高い評価を受けるのは主に4つの理由があります。①製造年代の証明：1981年以前の製品であることが確実になります。②生地の品質：シャトル織機のデニムは緻密で独特の風合いと堅牢性を持ちます。③希少性：現在では大量生産のセルビッジデニムを製造できるメーカーが限られています。④コレクター文化：特に日本のデニム愛好家がセルビッジに特別な価値を見出し世界的な評価が高まりました。日本では「セルビッジデニム＝品質の証」という認識が定着しており、セルビッジの有無で市場価値が大きく変わることがあります。',
        bodyEn: "Selvedge commands premium prices for four main reasons. ①Era proof: confirms pre-1981 manufacture with certainty. ②Fabric quality: shuttle-loom denim is denser with distinctive texture and durability. ③Rarity: manufacturers capable of producing selvedge denim at scale are now limited. ④Collector culture: Japanese denim enthusiasts especially place special value on selvedge, elevating its global reputation. In Japan, 'selvedge = quality' is well established, and presence or absence can significantly shift market value.",
      },
    ],
  },
  {
    slug: 'article-button',
    catJa: 'ポイント別', catEn: 'Feature Guide',
    titleJa: 'ボタン裏刻印｜工場番号の読み方',
    titleEn: 'Button Back Stamps — Factory Number Guide',
    descJa: '刻印1・2番がSF工場を意味する理由と主要工場番号一覧。撮影のコツも解説。',
    descEn: 'Why stamps 1 and 2 mean SF factory, complete factory number list, and photography tips.',
    tags: ['ボタン刻印', '工場番号', 'SF工場'],
    sections: [
      {
        headingJa: 'ボタン裏刻印とは',
        headingEn: 'What are Button Back Stamps?',
        bodyJa: 'ヴィンテージリーバイスのフロントボタン裏面には小さな数字が刻まれています。この数字はリーバイスの製造工場を示す工場コードで、1950年代〜1970年代頃のモデルに確認できます。工場番号は主に1桁〜2桁の数字で、ボタンをウエストバンドから引き出して裏面を見ることで確認できます。この刻印は年代判定への直接的な貢献は限定的ですが製造工場の特定に役立ちます。特にサンフランシスコ工場製（1・2番）はコレクター市場で最高の希少性を持ち、同じ年代・型番・コンディションでもSF工場製かどうかで評価が変わることがあります。',
        bodyEn: "A small number stamped on the back of vintage Levi's front buttons identifies the manufacturing facility. Found on models from roughly the 1950s through 1970s, factory numbers are typically 1–2 digits visible by pulling the button out from the waistband. While the stamp's direct contribution to era dating is limited, it identifies the specific plant — San Francisco factory pieces (stamps 1 and 2) command the highest collector premiums, and SF factory provenance can affect valuation even between same-era, same-condition pieces.",
      },
      {
        headingJa: 'サンフランシスコ工場が希少な理由',
        headingEn: 'Why San Francisco Factory Items Are Rare',
        bodyJa: 'リーバイ・ストラウスは1853年にサンフランシスコへ移住し、1873年にバレンシア・ストリートに世界初のジーンズ工場を設立しました。ボタン裏刻印1番（Valencia Street工場）と2番（22nd Street工場）はまさにこのリーバイス発祥の地で作られた製品を示します。これらのSF工場はアメリカのジーンズ産業の衰退とともに閉鎖されており、発祥地という歴史的価値と絶対数の少なさが相まってSF工場製リーバイスは特別な希少性を持ちます。コレクターにとってSF工場刻印はブランドの原点に触れられる特別な証明です。',
        bodyEn: "Levi Strauss emigrated to San Francisco in 1853 and established the world's first jeans factory on Valencia Street in 1873 — the very birthplace of Levi's. Stamps 1 (Valencia Street) and 2 (22nd Street) identify pieces made at this historic origin. These SF factories closed as American denim manufacturing declined, and the combination of historical significance and limited surviving quantities gives SF factory Levi's their special rarity. For collectors, an SF stamp is tangible proof of connection to the brand's origin.",
      },
      {
        headingJa: '主要工場番号一覧',
        headingEn: 'Major Factory Number Reference',
        bodyJa: '1番：Valencia Street Factory（San Francisco, CA）→ リーバイス発祥地・最希少。2番：22nd Street Factory（San Francisco, CA）→ SF第2工場・最希少。3番：Sioux City Factory（Iowa）→ 中程度の希少性。4番：Amarillo Factory（Texas）→ 標準的な希少性。5番：Blackstone Factory（Virginia）→ 標準的な希少性。6番：El Paso Factory（Texas）→ 標準的な希少性。工場番号の解釈は研究者によって諸説あります。また同じ番号でも時期によって工場が変わっている可能性があるため他のポイントと組み合わせて総合的に判断することが重要です。',
        bodyEn: "1: Valencia Street (San Francisco) — birthplace, rarest. 2: 22nd Street (San Francisco) — SF second factory, rarest. 3: Sioux City (Iowa) — moderate rarity. 4: Amarillo (Texas) — standard. 5: Blackstone (Virginia) — standard. 6: El Paso (Texas) — standard. Factory number interpretations vary among researchers, and the same number may have corresponded to different facilities at different times. Always combine with other dating points for comprehensive assessment.",
      },
      {
        headingJa: '刻印の撮影方法',
        headingEn: 'How to Photograph the Stamp',
        bodyJa: 'ボタン裏の刻印は小さく摩耗していることが多いです。まずウエストバンドからボタンを引き出し裏面が見えるようにします。スマートフォンのライトを刻印に対して斜め45度程度から当て、マクロモードで接写して数字が判読できる状態で撮影します。刻印が薄い場合は角度を変えながら複数枚撮影し最も鮮明なものを使用します。フロントの全ボタン（通常5個）を確認することで確実性が増し、複数のボタンに同じ番号が確認できれば信頼性も上がります。',
        bodyEn: "Button back stamps are small and often worn. Pull the button from the waistband to expose the back. Hold a phone light at roughly 45 degrees and use macro mode to shoot close-up, ensuring the number is legible. For faint stamps, try multiple angles and use the sharpest result. Checking all front buttons (usually five) increases certainty — confirming the same number on multiple buttons improves reliability.",
      },
    ],
  },
  {
    slug: 'article-1950s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1950年代リーバイスの特徴と見分け方',
    titleEn: "1950s Levi's — Features & Identification",
    descJa: '501XX期の本革パッチ・Conmarジッパー・セルビッジなど最希少期の特徴を詳解。',
    descEn: "Leather patch, Conmar zipper, selvedge — the rarest 501XX era in detail.",
    tags: ['1950年代', '501XX', '本革パッチ'],
    sections: [
      {
        headingJa: '1950年代リーバイスの時代背景',
        headingEn: "1950s Levi's — Historical Context",
        bodyJa: '1950年代はリーバイスにとって大きな転換期でした。マーロン・ブランド（映画「乱暴者」1953年）やジェームズ・ディーン（映画「理由なき反抗」1955年）がジーンズを着用したことで、リーバイスは労働者の作業着からヤングカルチャーのアイコンへと変貌しました。この時代のリーバイスは「501XX」と呼ばれ、現在でもヴィンテージ市場で最も希少で価値の高いカテゴリのひとつです。使用された素材・縫製技術・ディテールのすべてが現代とは異なり、コレクターにとって特別な魅力を持っています。',
        bodyEn: "The 1950s were a pivotal era for Levi's. Marlon Brando (The Wild One, 1953) and James Dean (Rebel Without a Cause, 1955) wearing jeans transformed Levi's from workwear to youth culture icon. Levi's from this era are called '501XX' and remain one of the rarest and most valuable categories in today's vintage market. Every aspect — materials, construction, and details — differs from modern production, giving them special appeal for collectors.",
      },
      {
        headingJa: '501XXの特徴的なディテール',
        headingEn: '501XX Defining Details',
        bodyJa: '501XXを見分けるための主要なポイントは以下の通りです。本革パッチ（1954年頃まで）：バックウエストの二頭の馬デザインが本革製です。赤タブ両面大文字（Big E）：この時代はすべてBig E仕様です。ケアラベルなし：1971年以前のためケアラベルは存在しません。セルビッジデニム：シャトル織機で織られた耳付きデニムです。Conmarジッパー（505等）：1950年代前半に使用されました。フラッシャー（紙タグ）に「Two Horse Brand」の記載があり、ボタン裏刻印で工場も判明します。これらの特徴が揃えば501XX期の可能性が高くなります。',
        bodyEn: "Key 501XX identification points: Leather back patch (until c.1954) — the two-horse design is genuine leather. Big E red tab — all examples use the double-uppercase specification. No care label — pre-1971 means no care labeling. Selvedge denim — shuttle-loom woven with ear. Conmar zipper (on 505 etc.) — used through the early 1950s. The paper flasher tag references 'Two Horse Brand,' and button stamps identify the factory. When these features align, 501XX era is highly probable.",
      },
      {
        headingJa: '1950年代前半と後半の違い',
        headingEn: 'Early vs Late 1950s',
        bodyJa: '1950年代前半（〜1954年頃）：本革パッチ・Conmarジッパー・Big Eタブ・ケアラベルなし・セルビッジあり。これが揃えばXX期初期の最高希少モデルです。1950年代後半（1954〜1960年頃）：合皮または紙パッチに変更・TALON 42ジッパー・Big Eタブ・ケアラベルなし・セルビッジあり。前半に比べ希少性は若干下がりますが依然として高評価です。どちらもBig Eタブ・ケアラベルなし・セルビッジという共通特徴を持ちます。',
        bodyEn: 'Early 1950s (to c.1954): leather patch, Conmar zipper, Big E tab, no care label, selvedge — highest-rarity early XX era. Late 1950s (c.1954–1960): synthetic or paper patch, TALON 42 zipper, Big E tab, no care label, selvedge — slightly lower rarity but still highly regarded. Both periods share Big E tab, no care label, and selvedge as common features.',
      },
      {
        headingJa: '価値と注意点',
        headingEn: 'Value and Cautions',
        bodyJa: '1950年代のリーバイスは製造から70年以上が経過しており良好なコンディションの個体は年々減少しています。本革パッチの残存状態・Big Eタブの鮮明さ・セルビッジの状態がそのまま価格に反映されます。注意点として現存数が少ないため偽造品や別の年代のものが誤って1950年代と表記されるケースがあります。複数のポイントを組み合わせて総合的に判断し疑問がある場合は専門家への相談も検討してください。AI鑑定は複数の写真を送るほど精度が上がるため可能な限り多くのポイントを撮影してください。',
        bodyEn: "1950s Levi's are now 70+ years old and good-condition examples grow rarer each year. Leather patch condition, Big E tab clarity, and selvedge condition directly translate to price. Important caution: misidentification and misrepresentation occur given the limited supply. Always combine multiple identification points, and consider expert consultation when in doubt. AI identification improves with more photos — photograph as many points as possible.",
      },
    ],
  },
  {
    slug: 'article-1960s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1960年代リーバイスの特徴と見分け方',
    titleEn: "1960s Levi's — Features & Identification",
    descJa: 'Big E全盛期。前半（TALON 42）と後半（TALON）の違いや文化的背景も解説。',
    descEn: 'Big E prime era. TALON 42 vs TALON differences and cultural context.',
    tags: ['1960年代', 'Big E全盛', 'TALON'],
    sections: [
      {
        headingJa: '1960年代リーバイスの概要',
        headingEn: "1960s Levi's Overview",
        bodyJa: '1960年代はリーバイスがグローバルブランドとして飛躍した時代です。ベトナム戦争・公民権運動・ヒッピーカルチャーなど激動の時代を背景に、ジーンズはアメリカのカウンターカルチャーの象徴となりました。ビートルズやローリング・ストーンズなどが着用し、ヨーロッパや日本でも人気が広まりました。この時代のリーバイスはすべてBig E期にあたり、ケアラベルなし・セルビッジデニムという高品質な仕様を維持していました。また1967年には505が誕生し製品ラインナップが拡充されました。',
        bodyEn: "The 1960s saw Levi's emerge as a global brand. Against the backdrop of Vietnam, Civil Rights, and hippie culture, jeans became a symbol of American counterculture. The Beatles, Rolling Stones, and other musicians spread their popularity to Europe and Japan. All Levi's from this era fall within the Big E period, maintaining high-quality no-care-label, selvedge denim specification. 1967 also saw the birth of the 505, expanding the product lineup.",
      },
      {
        headingJa: '前半と後半の主な違い',
        headingEn: 'Key Differences Between Early and Late 1960s',
        bodyJa: '1960年代前半（1960〜1964年頃）：TALON 42ジッパーが主流・赤タブ大文字・ケアラベルなし・合皮または紙パッチ・セルビッジあり。1960年代後半（1965〜1971年頃）：TALON（42なし）ジッパーに移行・1967年に505が誕生・1969年からオレンジタブの廉価ラインが登場・赤タブ大文字継続・セルビッジ継続。最も確実な見分け方はジッパーブランドで、「TALON 42」なら前半、「TALON（42なし）」なら後半の可能性が高くなります。',
        bodyEn: 'Early 1960s (c.1960–1964): TALON 42 zipper dominant, uppercase tab, no care label, synthetic or paper patch, selvedge. Late 1960s (c.1965–1971): transition to TALON no 42, 505 born 1967, orange tab budget line from 1969, uppercase tab and selvedge continuing. The most reliable distinguisher is the zipper brand: TALON 42 = likely early 1960s; TALON without 42 = likely late 1960s.',
      },
      {
        headingJa: '1960年代モデルの価値と文化的意義',
        headingEn: '1960s Value and Cultural Significance',
        bodyJa: '1960年代のリーバイスは1950年代のXX期ほどの超希少性はないものの、Big E期のコアな時代としてコレクターから高い人気を誇ります。コンディションの良い個体・セルビッジが確認できる個体・タブが鮮明な個体は高値で取引されます。1960年代前半のTALON 42期は1950年代に近い評価を受けることがあります。文化的な価値も高く、この時代を代表するポップカルチャーとの関連性がコレクターの想像力を刺激します。世界中が激動した1960年代を生き延びたリーバイスは、単なる衣類を超えた歴史的価値を持っています。',
        bodyEn: "1960s Levi's don't reach the ultra-rarity of 1950s XX pieces, but as the prime Big E period they command strong collector interest. High-condition pieces, confirmed selvedge examples, and items with clear tabs trade at premium prices. Early 1960s TALON 42 pieces sometimes receive valuations closer to 1950s levels. Cultural value is also significant — the connection to the defining pop culture of this turbulent era gives surviving pieces historical value that transcends mere clothing.",
      },
    ],
  },
  {
    slug: 'article-1970s',
    catJa: '年代別', catEn: 'Era Guide',
    titleJa: '1970年代リーバイスの特徴と見分け方',
    titleEn: "1970s Levi's — Features & Identification",
    descJa: '1971年の大転換点。ケアラベル追加・タブ変更・YKK移行の流れをタイムライン解説。',
    descEn: '1971 transition: care labels, lowercase tab, and YKK adoption explained by timeline.',
    tags: ['1970年代', '移行期', '1971年'],
    sections: [
      {
        headingJa: '1970年代リーバイスの概要',
        headingEn: "1970s Levi's Overview",
        bodyJa: '1970年代はリーバイスにとって大きな転換期でした。1971年を境にケアラベルの義務化・赤タブの小文字化・YKKジッパーへの移行が起き、長く続いたBig E期が終わりました。同時にディスコ文化・グルーヴ時代を反映したベルボトム（646）などの新しいシルエットが生まれ、ファッションとしてのジーンズが最盛期を迎えた時代でもあります。1970年代のリーバイスは前半（〜1971年）と後半（1971年〜）で仕様が大きく異なり、年代判定において最も細かい注意が必要な時期です。',
        bodyEn: "The 1970s were a major transition period for Levi's. The 1971 pivot brought mandatory care labels, lowercase tab, and YKK adoption, ending the long Big E era. Simultaneously, new silhouettes like the bell-bottom 646 emerged reflecting disco culture, making it the peak era for fashion jeans. 1970s Levi's differ significantly between pre- and post-1971, requiring the most careful attention to detail when dating.",
      },
      {
        headingJa: '1971年前後の変化タイムライン',
        headingEn: '1971 Transition Timeline',
        bodyJa: '1970〜1971年前半：Big E期の最末期。ケアラベルなし・大文字タブ・TALONジッパー・セルビッジあり。コレクター価値はBig E全盛期と同等。1971年後半：ケアラベル追加（英語のみ）・小文字タブに変更。Big E期終了。1973年頃：ケアラベルが多言語化。1970年代中盤〜：YKKジッパーへの移行が進む。1979年：オレンジタブライン廃止。1981年：セルビッジ廃止・ロータリー織機に完全移行。この流れを把握することで、1970年代の細かい年代判定が可能になります。',
        bodyEn: '1970–mid 1971: final Big E era — no label, uppercase tab, TALON, selvedge; collector value matches prime Big E. Late 1971: care label added (English only), tab changed to lowercase; Big E era ends. c.1973: multilingual care label. Mid-1970s+: YKK zipper adoption progresses. 1979: orange tab line discontinued. 1981: selvedge ends, full rotary loom transition. Understanding this flow enables precise dating within the 1970s.',
      },
      {
        headingJa: '1970年代モデルの価値と特徴',
        headingEn: '1970s Value and Features',
        bodyJa: '1970〜1971年前半（Big E末期）：Big E全盛期と同等の評価を受けることが多い。ケアラベルなし・大文字タブが揃えば高評価。1971年後半〜1981年：Big E期より価値は下がるが、セルビッジありの個体は依然人気。コンディションが重要で良好な個体は相応の価格がつく。1981年以降：セルビッジなし・現代的な仕様に近くなるためヴィンテージとしての評価は相対的に低くなる。ただしデッドストックや特殊なモデルは例外。この時代は流通量が多いためコンディションが価値を大きく左右します。',
        bodyEn: '1970–mid 1971 (final Big E): often equivalent valuation to prime Big E; no label + uppercase tab together = high regard. Late 1971–1981: lower than Big E era but selvedge examples remain popular; condition is critical. Post-1981: no selvedge and closer to modern spec means relatively lower vintage valuation, though deadstock and special models are exceptions. Higher production volumes mean condition is the primary value driver in this era.',
      },
    ],
  },
  {
    slug: 'article-big-e-value',
    catJa: '価値・希少性', catEn: 'Value & Rarity',
    titleJa: 'Big Eリーバイスとは｜価値と希少性',
    titleEn: "Big E Levi's — Value & Rarity",
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
    titleEn: "Why SF Factory Levi's Are Rare",
    descJa: 'リーバイス発祥の地とSF工場の歴史。刻印1・2番の意味を詳しく解説。',
    descEn: "Levi's birthplace history and the full story behind stamps 1 and 2.",
    tags: ['SF工場', '刻印1・2', '希少性'],
    sections: [
      {
        headingJa: 'リーバイスとサンフランシスコの歴史',
        headingEn: "Levi's and San Francisco History",
        bodyJa: 'リーバイ・ストラウスはバイエルン出身のユダヤ系移民で、1853年にゴールドラッシュで沸くサンフランシスコへ移住しました。最初はドライグッズの卸売業を始め、1873年に仕立て職人のジェイコブ・デービスと共同でリベット付きジーンズの特許を取得しました。この年バレンシア・ストリートに世界初のジーンズ工場が設立されました。ボタン裏刻印1番（Valencia Street工場）と2番（22nd Street工場）はこの歴史的な発祥地で作られた製品の証です。150年以上の歴史を持つブランドの原点に触れられる特別なアイテムとして世界中のコレクターに評価されています。',
        bodyEn: "Levi Strauss was a Bavarian Jewish immigrant who moved to Gold Rush-era San Francisco in 1853. Starting as a dry goods wholesaler, he jointly patented riveted jeans with tailor Jacob Davis in 1873 — the year the world's first jeans factory was established on Valencia Street. Stamps 1 (Valencia Street) and 2 (22nd Street) prove a piece was made at this historic origin point. As tangible connections to the birthplace of a brand with over 150 years of history, they are prized by collectors worldwide.",
      },
      {
        headingJa: 'SF工場の閉鎖と現在の希少性',
        headingEn: 'SF Factory Closure and Current Rarity',
        bodyJa: 'サンフランシスコのValencia Street工場（刻印1番）と22nd Street工場（刻印2番）は、アメリカのジーンズ産業の衰退とともに閉鎖されました。アメリカ製造業全体のコスト高騰と海外生産への移行が背景にあります。工場閉鎖後に新たにSF工場製の製品が生まれることはありません。発祥地という歴史的価値・閉鎖による生産終了・流通量の少なさが相まってSF工場製リーバイスは特別な希少性を持ちます。同じ年代・型番・コンディションであってもSF工場製かどうかで評価が変わることがあります。',
        bodyEn: "San Francisco's Valencia Street (stamp 1) and 22nd Street (stamp 2) factories closed as American denim manufacturing declined due to rising US costs and the shift to overseas production. No new SF factory production is possible. The combination of historical significance, production cessation, and limited surviving quantities gives SF factory Levi's special rarity. SF factory provenance can affect valuation even between same-era, same-model, same-condition pieces.",
      },
      {
        headingJa: 'コレクター市場での評価と注意点',
        headingEn: 'Collector Market Valuation and Cautions',
        bodyJa: 'SF工場製のリーバイスは特に日本のコレクター間で高く評価されています。出品説明文に「SF刻印」「Valencia刻印」と記載されていればより高い関心を集める傾向があります。ただし最終的な評価は年代・型番・コンディション・他の仕様が複合的に絡み合って決まります。SF工場製であることは加点要素であり、それだけで価値が保証されるわけではありません。また工場番号の解釈には諸説あるためSF工場製と確定するには複数の資料・専門家の意見を参照することをおすすめします。',
        bodyEn: "SF factory Levi's are particularly prized among Japanese collectors. Listings noting 'SF stamp' or 'Valencia stamp' attract greater interest. However, final valuation combines era, model, condition, and other specifications — SF factory provenance is additive, not a standalone value guarantee. Factory number interpretations vary among researchers, so confirming SF factory origin is best done by referencing multiple sources and expert opinions.",
      },
    ],
  },
  {
    slug: 'article-selling',
    catJa: '売買', catEn: 'Buy & Sell',
    titleJa: 'ヴィンテージリーバイスを高く売るポイント',
    titleEn: "How to Sell Vintage Levi's for Top Dollar",
    descJa: '出品タイトル・写真・価格設定のコツ。メルカリとeBayの使い分けも解説。',
    descEn: 'Listing titles, photography, pricing, and Mercari vs eBay strategy.',
    tags: ['売却', '出品', 'メルカリ', 'eBay'],
    sections: [
      {
        headingJa: '売る前に年代・型番を正確に把握する',
        headingEn: 'Know Your Item Before Listing',
        bodyJa: '高く売るための第一歩は自分が何を持っているかを正確に把握することです。「古いリーバイス」という曖昧な説明より「1960年代後半 501 Big E TALONジッパー セルビッジあり」と具体的に書かれている方が購入者の信頼を得やすく高値がつきやすくなります。AI鑑定を活用して年代・型番・製造工場を確認してから出品しましょう。ただし鑑定結果は「AIによる推定」であることを明記し確定情報として記載しないよう注意してください。正確な情報提供は購入者との信頼関係構築にも直結します。',
        bodyEn: "The first step is knowing exactly what you have. Specific descriptions like 'late 1960s 501 Big E TALON zipper selvedge' build buyer trust and command higher prices than vague 'old Levi's' listings. Use AI identification to confirm era, model, and factory before listing. Always note that results are AI estimates — never present them as confirmed facts. Providing accurate information also directly builds trust with buyers.",
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
        bodyEn: "Essential shots: ①full front, back, side; ②red tab close-up (both sides); ③care label full (or inside if absent); ④zipper stamp with angled light; ⑤button back stamp; ⑥selvedge with folded hem; ⑦damage and repairs. Effective title example: 'リーバイス 501 Big E 1960年代 TALONジッパー セルビッジ ヴィンテージ' (include model, era, zipper, tab, selvedge). eBay title example: 'Levi's 501 Big E 1960s TALON Zipper Selvedge Vintage Denim.'",
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
    titleEn: "Buying Vintage Levi's on eBay",
    descJa: '効果的な検索キーワード・写真確認ポイント・詐欺対策を初心者向けに解説。',
    descEn: 'Search terms, photo verification, and fraud prevention for beginners.',
    tags: ['eBay', '購入', '海外'],
    sections: [
      {
        headingJa: 'eBayでヴィンテージリーバイスを探すメリット',
        headingEn: "Why Buy Vintage Levi's on eBay",
        bodyJa: 'eBayはヴィンテージリーバイスを探す上で世界最大級のマーケットプレイスです。アメリカ・ヨーロッパ・日本など世界中の出品者が利用しており、国内では見つからない希少なモデルも見つかる可能性があります。特にBig E期のモデル・SF工場製・デッドストック品などはeBayの方が選択肢が豊富です。一方で英語でのやり取りが必要・関税・送料・詐欺リスクなど国内プラットフォームにはない注意点もあります。これらを理解した上で活用することで、メルカリでは出会えないプレミア品を入手できる可能性があります。',
        bodyEn: "eBay is one of the world's largest marketplaces for vintage Levi's. With sellers worldwide, rare models unavailable domestically may be findable here. Big E era models, SF factory pieces, and deadstock in particular have greater selection on eBay. However, English communication, international shipping costs, customs duties, and fraud risk are challenges absent from domestic platforms. Understanding these factors lets you access premium pieces unavailable on Mercari.",
      },
      {
        headingJa: '効果的な検索キーワード',
        headingEn: 'Effective Search Keywords',
        bodyJa: 'Big E期を探す：「Levi\'s Big E」「501 Big E vintage」「Levis 1960s Big E」。セルビッジを探す：「Levi\'s selvedge」「501 selvedge vintage」「Levis redline selvedge」。年代で絞る：「Levi\'s 1950s」「501XX vintage」「70505 Big E」。eBayのCompleted Listings（成約済み）フィルターを使うと実際に売れた価格が確認でき相場把握に非常に有効です。入札前に必ず相場を確認しましょう。アラート機能（Saved Searches）を設定しておくと新着出品が出た際に通知を受け取れます。',
        bodyEn: "For Big E era: 'Levi's Big E', '501 Big E vintage', 'Levis 1960s Big E.' For selvedge: 'Levi's selvedge', '501 selvedge vintage', 'Levis redline selvedge.' By era: 'Levi's 1950s', '501XX vintage', '70505 Big E.' eBay's Completed Listings filter shows actual transaction prices — extremely useful for market research. Always check before bidding. Set up Saved Searches for new listing alerts.",
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
    titleEn: "Finding Vintage Levi's on Mercari",
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
    titleEn: "Storing & Caring for Vintage Levi's",
    descJa: '洗濯・乾燥・長期保管のDO/DONT。革パッチや赤タブのケアも解説。',
    descEn: 'DO/DONT for washing, drying, storage, plus leather patch and tab care.',
    tags: ['ケア', '保管', '洗濯'],
    sections: [
      {
        headingJa: 'ヴィンテージデニムケアの基本',
        headingEn: 'Core Vintage Denim Care Philosophy',
        bodyJa: 'ヴィンテージリーバイスのケアで最も重要な考え方は「なるべく手を加えない」ことです。現代のジーンズと同じように洗濯・乾燥機にかけると生地の縮み・色落ち・タブや縫い目の傷みが加速します。特に1981年以前のセルビッジデニムは繊細で丁寧な扱いがコンディション維持に直結します。コレクター目的で保有する場合はほとんど着用せず保管のみで管理するケースが多いですが、着用する場合でも月1〜2回程度の洗濯頻度にとどめることが理想です。コンディションが価値に直結するためケアを怠らないことが資産価値の維持につながります。',
        bodyEn: "The core philosophy is minimum intervention. Treating vintage Levi's like modern jeans — machine washing and tumble drying — accelerates shrinkage, fading, and damage to tabs and seams. Pre-1981 selvedge denim is especially delicate; careful handling directly maintains condition. Collector pieces are often stored unworn, but even wearable pieces ideally should be washed no more than once or twice monthly. Since condition correlates directly to value, proper care is inseparable from preserving the asset's worth.",
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
    titleJa: 'リーバイス型番完全ガイド',
    titleEn: "Levi's Model Number Complete Guide",
    descJa: '505・517・519・646・506XX・507XX・557XXなど主要型番の特徴と希少性を網羅。',
    descEn: 'Complete coverage of 505, 517, 519, 646, 506XX, 507XX, 557XX and other major models.',
    tags: ['型番サマリー', '557XX', '506XX'],
    sections: [
      {
        headingJa: '型番の読み方と分類',
        headingEn: 'How to Read Model Numbers',
        bodyJa: 'リーバイスの型番は大きくジーンズ系（下半身）とジャケット系（上半身）に分かれます。ジーンズ系は501・505・517・519・646など3桁の数字が中心で、ジャケット系は506XX・507XX・557XXなど末尾に「XX」が付くモデルが有名です。末尾の「XX」は1954年頃まで使われていた内部品番でXX期のモデルは特に希少とされます。頭に「70」または「7」が付くもの（70505・70557XXなど）はBig E期（〜1971年）の品番です。これを知っておくだけで出品タイトルや商品説明から多くの情報が読み取れます。',
        bodyEn: "Levi's model numbers divide into jeans (bottoms) and jacket (tops) categories. Jeans use three-digit numbers: 501, 505, 517, 519, 646, etc. Jackets are known by 'XX' suffix models: 506XX, 507XX, 557XX, etc. The 'XX' was an internal designation until around 1954, making XX-era models especially rare. Numbers prefixed with '70' or '7' (70505, 70557XX, etc.) indicate Big E era (pre-1971). Knowing this lets you extract significant information from listing titles and descriptions.",
      },
      {
        headingJa: 'ジーンズ系主要モデル詳解',
        headingEn: 'Major Jeans Models in Detail',
        bodyJa: '501（1873年〜）：ボタンフライ・ストレート・ヴィンテージ価値最高。505（1967年〜）：ジッパーフライ・ストレート・Big E期は70505。517（1960年代後半〜）：ジッパーフライ・ブーツカット・ヒッピー時代の象徴。519（1960年代〜）：ジッパーフライ・スーパースリム・希少モデル。646（1970年代前後）：ジッパーフライ・ベルボトム・ディスコ文化の象徴・オレンジタブに多い。これらのモデルは独特のシルエットと時代性から根強いコレクター需要があります。型番が判明している場合は出品情報に必ず記載してください。',
        bodyEn: '501 (1873+): button fly, straight, highest vintage value. 505 (1967+): zipper fly, straight, Big E era = 70505. 517 (late 1960s+): zipper fly, bootcut, hippie era icon. 519 (1960s+): zipper fly, super slim, rare model. 646 (around 1970s): zipper fly, bell bottom, disco culture icon, common in orange tab. These models sustain strong collector demand for their distinctive silhouettes and era associations. Always include confirmed model numbers in listing information.',
      },
      {
        headingJa: 'ジャケット系主要モデル詳解',
        headingEn: 'Major Jacket Models in Detail',
        bodyJa: '506XX（Type 1、1936〜1953年頃）：胸ポケット1つ・ブランケットライナー付きが多い・製造期間が短く現存数が極めて少ない超希少品。507XX（Type 2、1953〜1962年頃）：胸ポケット2つ・ウエストにダブルプリーツ・こちらも超希少。557XX（Type 3、1962年〜）：トラッカージャケットとも呼ばれる・胸2つのフラップポケットとウエスト2つのボタン留めポケット・現在も継続生産されているがBig E期（〜1971年）の70557XXは特に人気が高い。Type 1・2は市場に出ること自体が稀な超希少品です。',
        bodyEn: '506XX (Type 1, c.1936–1953): one chest pocket, often with blanket lining — short production means extremely few survivors. 507XX (Type 2, c.1953–1962): two chest pockets, double waist pleats — also extremely rare. 557XX (Type 3, 1962+): the Trucker Jacket — two flap chest pockets and two button-closure waist pockets; still in current production but the Big E era 70557XX is especially coveted. Type 1 and Type 2 jackets are so rare that their appearance on the market is itself a rare event.',
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
