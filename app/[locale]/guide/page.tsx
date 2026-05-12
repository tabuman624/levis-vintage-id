import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const base = locale === 'ja' ? '' : '/en';

  const guides = [
    {
      num: '01',
      req: 'text-rust',
      reqLabel: t('必須', 'Required'),
      title: t('赤タブ（Red Tab）', 'Red Tab'),
      why: t('両面大文字「LEVIS」なら1971年以前のBig E。最重要ポイントです。', 'Both sides uppercase "LEVIS" = pre-1971 Big E. Most critical point.'),
      tip: t('タブを引き出して両面を接写。ピントが合っているか確認してください。', 'Pull out the tab and shoot both sides close-up. Check focus carefully.'),
      image: "/images/guide/Levi's_501_jeans_'big_E'_Red_Tab_(2025-12-19)_3.jpg",
      credit: null,
    },
    {
      num: '02',
      req: 'text-rust',
      reqLabel: t('必須', 'Required'),
      title: t('ケアラベル', 'Care Label'),
      why: t('ケアラベルなし→1971年以前確定。1枚で年代を二分できます。', 'No care label = pre-1971 confirmed. One photo divides the era in two.'),
      tip: t('タグ全体が読めるよう明るい場所で撮影。ない場合も内側を撮影してください。', 'Shoot the full tag in good lighting. If absent, photograph the inside anyway.'),
      image: '/images/guide/IMG_9593.jpeg',
      credit: null,
    },
    {
      num: '03',
      req: 'text-rust',
      reqLabel: t('必須', 'Required'),
      title: t('ジッパー刻印', 'Zipper Stamp'),
      why: t('Conmar→1940s、TALON 42→1950〜60s、YKK→1970s以降。', 'Conmar→1940s, TALON 42→1950–60s, YKK→1970s+'),
      tip: t('スマホのライトを斜め45度から当てて刻印を浮き上がらせてから接写。', 'Hold phone light at 45 degrees to make the stamp stand out, then shoot close-up.'),
      image: '/images/guide/IMG_9590.jpeg',
      credit: null,
    },
    {
      num: '04',
      req: 'text-stitch',
      reqLabel: t('重要', 'Important'),
      title: t('ボタン裏の刻印', 'Button Back Stamp'),
      why: t('数字＝工場番号。1・2番はSF工場で最高希少性。', 'Number = factory code. 1 or 2 = SF factory, highest rarity.'),
      tip: t('ウエストバンドからボタンを引き出し、斜め光でマクロ撮影。全ボタンを確認。', 'Pull button from waistband, use angled light and macro mode. Check all buttons.'),
      image: '/images/guide/IMG_9558.jpeg',
      credit: null,
    },
    {
      num: '05',
      req: 'text-stitch',
      reqLabel: t('重要', 'Important'),
      title: t('セルビッジ（裾内側）', 'Selvedge'),
      why: t('白い耳が確認できれば1981年以前確定。', 'White selvedge edge = pre-1981 confirmed.'),
      tip: t('裾を3〜4cm折り返して内側の端を撮影。赤いラインが見えればセルビッジあり。', 'Fold hem 3–4cm and shoot the inner edge. A red line confirms selvedge.'),
      image: '/images/guide/960px-Selvagedenim.jpg',
      credit: '© Liface / Wikimedia Commons / CC BY-SA 3.0',
    },
    {
      num: '06',
      req: 'text-stitch',
      reqLabel: t('重要', 'Important'),
      title: t('バックポケット（ステッチ）', 'Back Pocket Stitching'),
      why: t('アルキュエートステッチの糸色で年代判定。黄色糸→1970年代中頃以前確定。', 'Arcuate stitch thread color dates the piece. Yellow thread = pre-mid-1970s confirmed.'),
      tip: t('ポケット全体と糸の色がわかるよう自然光で撮影。', 'Shoot the full pocket in natural light so thread color is clearly visible.'),
      image: "/images/guide/Levi's_501_Raw's_Story_-4.jpg",
      credit: '© carianoff / Wikimedia Commons / CC BY-SA 2.0',
    },
    {
      num: '07',
      req: 'text-fade',
      reqLabel: t('任意', 'Optional'),
      title: t('パッチ（ウエスト裏）', 'Back Patch'),
      why: t('本革パッチ→1954年以前確定。素材と状態が年代と価値を示す。', 'Leather patch = pre-1954 confirmed. Material and condition indicate era and value.'),
      tip: t('パッチ全体の文字が読めるよう正面から撮影。', 'Shoot straight-on so all text on the patch is readable.'),
      image: "/images/guide/Levi's_501_Two_Horses_patch_(2025-12-19)_5.jpg",
      credit: null,
    },
  ];

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">{t('撮影ガイド', 'Photo Guide')}</p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] text-4xl mb-6">{t('撮影のポイント', 'Photography Points')}</h1>
        <p className="text-sm text-fade font-light leading-loose mb-12">{t('AIの鑑定精度は写真の品質と撮影ポイントに大きく左右されます。多いほど・鮮明なほど精度が上がります。', 'AI accuracy depends heavily on photo quality and which details you capture. More photos = better accuracy.')}</p>

        <div className="space-y-8">
          {guides.map((g) => (
            <div key={g.num} className="card-denim overflow-hidden">
              {/* 画像 */}
              <div className="relative w-full" style={{aspectRatio:'3/2', background:'rgba(0,0,0,0.2)'}}>
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  style={{objectFit:'cover'}}
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                {/* クレジット */}
                {g.credit && (
                  <p style={{position:'absolute',bottom:'6px',right:'8px',fontFamily:'DM Mono,monospace',fontSize:'8px',color:'rgba(255,255,255,0.5)',background:'rgba(0,0,0,0.4)',padding:'2px 6px',borderRadius:'2px'}}>
                    {g.credit}
                  </p>
                )}
                {/* 番号バッジ */}
                <div style={{position:'absolute',top:'12px',left:'12px',fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'rgba(232,213,163,0.9)',fontSize:'32px',lineHeight:1,textShadow:'0 2px 8px rgba(0,0,0,0.8)'}}>
                  {g.num}
                </div>
              </div>

              {/* テキスト */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono text-[8px] uppercase tracking-widest ${g.req}`}>{g.reqLabel}</span>
                  <h3 className="font-playfair font-bold text-stitch text-lg">{g.title}</h3>
                </div>
                <p className="text-sm text-fade font-light leading-relaxed mb-3">{g.why}</p>
                <div style={{borderTop:'1px solid rgba(232,213,163,0.1)',paddingTop:'12px',marginTop:'4px'}}>
                  <p style={{fontFamily:'DM Mono,monospace',fontSize:'10px',color:'rgba(184,204,228,0.7)',lineHeight:1.8}}>
                    📷 {g.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stitch-line my-10" />
        <div className="text-center">
          <Link href={`${base}/identify`} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
