# LEVI'S VINTAGE ID.

ヴィンテージリーバイスの年代・型番・製造工場をAIが写真から鑑定するWebアプリ。

## セットアップ手順

### 1. リポジトリのクローン
```bash
git clone https://github.com/YOUR_USERNAME/levis-vintage-id.git
cd levis-vintage-id
```

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 環境変数の設定
```bash
cp .env.example .env.local
```

`.env.local` を編集してGemini APIキーを設定：
```
GEMINI_API_KEY=your_key_here
```

> Gemini APIキーは [Google AI Studio](https://aistudio.google.com/apikey) で無料取得できます。

### 4. 開発サーバーの起動
```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く。

---

## Vercelへのデプロイ

### 1. GitHubにプッシュ
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/levis-vintage-id.git
git push -u origin main
```

### 2. Vercelに接続
1. [vercel.com](https://vercel.com) にアクセス
2. 「New Project」→ GitHubリポジトリを選択
3. 環境変数を設定：
   - `GEMINI_API_KEY` → Gemini APIキーを入力
   - `NEXT_PUBLIC_SITE_URL` → `https://your-domain.com`
4. 「Deploy」をクリック

### 3. 独自ドメインの設定（任意）
Vercelダッシュボードの「Domains」から設定。

---

## ページ構成

| URL | ページ |
|-----|--------|
| `/` | TOPページ |
| `/identify` | AI鑑定ページ |
| `/guide` | 撮影ガイド |
| `/legal` | プライバシーポリシー・免責事項 |
| `/en` | TOP（英語） |
| `/en/identify` | 鑑定ページ（英語） |

---

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイル**: Tailwind CSS
- **i18n**: next-intl（日英対応）
- **AI**: Google Gemini API (gemini-1.5-flash)
- **ホスティング**: Vercel

---

## ライセンス

本サービスは Levi Strauss & Co. とは無関係の独立サービスです。
