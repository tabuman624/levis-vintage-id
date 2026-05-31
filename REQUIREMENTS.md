# LEVI'S VINTAGE ID. — 要件表

## サイト方針

| 項目 | 内容 |
|---|---|
| ターゲット | グローバル（日英バイリンガル） |
| コアバリュー | AIツール特化（写真1枚から年代・型番を判定） |
| 収益モデル | AdSense + eBay/Mercariアフィリエイト |
| 将来展望 | ジャケット専用フロー、有料プラン検討 |

---

## 機能一覧

### ✅ 実装済み

| 機能 | 概要 |
|---|---|
| AI鑑定（ジーンズ） | Gemini 2.5 Flashによる写真鑑定。年代・型番・工場・国・信頼度を返す |
| 必須/任意スロット分離 | 赤タブ・ケアラベルを必須、他6枚を任意に分離したUI |
| 確定/推定/不明の表示 | 鑑定結果を「確定・推定・不明」に構造化して表示 |
| 精度向上アドバイス | next_stepsで追加撮影を促す |
| フィードバック収集 | 「正確だった/違う気がする」のユーザー評価 |
| スロット使用状況追跡 | どのスロットが使われたか記録 |
| アフィリエイトクリック追跡 | eBay/Mercariクリックを記録 |
| 写真保存 | Supabase Storageに800px/JPEG/0.7で保存 |
| 最新鑑定フィード（/feed） | 世界中の鑑定結果をリアルタイム表示。60秒ISR |
| 日英バイリンガル | 全ページ日本語・英語対応 |
| 記事コンテンツ（30本+） | ヴィンテージLevi's年代判定記事 |
| タイムライン・チャート・用語集 | 情報コンテンツページ群 |

---

### 🔲 将来検討

#### データドリブン機能

| 機能 | 概要 | 必要データ |
|---|---|---|
| モデル別・年代別ランキング | 「今月最も鑑定された型番TOP10」 | `model_normalized`, `era_decade` |
| 希少品発見ランキング | 「今月の激レア発見」上位表示 | `rarity`, `confidence` |
| 日本 vs 海外マーケット比較 | localeで分けた市場傾向の違い | `locale`, `model_normalized` |
| フィード→記事リンク | 鑑定モデルから関連記事へ自動誘導 | `model_normalized` ↔ article slug |

#### サービス拡張

| 機能 | 概要 |
|---|---|
| ジャケット専用フロー | Type1/2/3ジャケット向け別ページ or フロー |
| 鑑定精度改善ループ | feedbackデータを使ったプロンプト定期改善 |
| 価格帯表示 | eBay/Mercari価格をスクレイピングして相場表示 |
| 有料プラン | 鑑定回数制限 + プレミアム精度モード |

---

## データ構造（Supabase）

### identifications テーブル

| カラム | 型 | 用途 |
|---|---|---|
| id | uuid | 主キー |
| created_at | timestamptz | 作成日時 |
| era | text | AI返却の年代（自由文） |
| era_decade | text | 正規化年代（1960s, 1970s, current等） |
| model | text | AI返却の型番（自由文） |
| model_normalized | text | 正規化型番（501, 505等） |
| factory | text | 製造工場 |
| country | text | 製造国 |
| confidence | text | HIGH / MID / LOW |
| rarity | text | 希少性（自由文） |
| locale | text | ja / en |
| image_count | int | アップロード枚数 |
| slots_used | text[] | 使用スロット一覧 |
| photo_urls | text[] | Storageパス一覧 |
| feedback | text | helpful / not_helpful |
| affiliate_click | text | ebay / mercari |

### Storage

| バケット | 用途 | パス形式 |
|---|---|---|
| identifications | 鑑定写真 | `{YYYY-MM}/{uuid}/{index}.jpg` |

---

## 技術スタック

| 項目 | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| UI | Tailwind CSS |
| AI | Google Gemini 2.5 Flash |
| DB / Storage | Supabase (PostgreSQL + Storage) |
| ホスティング | Vercel |
| i18n | next-intl |
