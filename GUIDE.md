# IOL Partner — 日常の使い方ガイド

## 現在の本番サイト

| サイト | URL | クリニック |
|---|---|---|
| デモ・営業用 | partner-iol.netlify.app | Ultra Eyes Clinic |
| 小沢眼科 | kozawa-iol.netlify.app | 小沢眼科グループ（15種） |
| 今井眼科 | imai-multifocal-iol.netlify.app | 今井眼科医院（7種） |

すべて同じリポジトリ（iol-partner）から配信。git pushすると3サイト同時に自動更新される。

---

## ローカルで開発・確認する

```bash
cd ~/Dev/iol-partner
python3 -m http.server 8080
```

ブラウザで開く：

| クリニック | URL |
|---|---|
| 小沢眼科 | http://localhost:8080?clinic=kozawa |
| 今井眼科 | http://localhost:8080?clinic=imai |
| デモ | http://localhost:8080?clinic=demo |
| デフォルト（デモ） | http://localhost:8080 |

ファイルを編集 → ブラウザをリロード → 即反映。ビルド不要。

---

## 何をどこで編集するか

| やりたいこと | 編集するファイル |
|---|---|
| 小沢眼科のレンズ情報を変更 | `config/kozawa.js` の `lenses` |
| 今井眼科のブランドカラーを変更 | `config/imai.js` の `theme` |
| 質問の文言を変更 | 各 `config/*.js` の `questions` |
| UIやレイアウトを変更 | `index.html`（全クリニック共通で反映） |
| 特定クリニックだけ機能ON/OFF | `config/*.js` の `features` |

---

## よくあるシナリオ

### 新しいレンズが採用された
→ `config/kozawa.js` の `lenses` 配列に1つ追加

### デザインを変えたい
→ `index.html` のCSS/HTMLを編集（全クリニックに反映）

### 特定クリニックの機能をOFF
→ `config/imai.js` の `features.proMode` を `false` に

---

## 新規クリニックを追加する手順（完全版）

例：「山田眼科」を追加する場合

### ステップ1: 設定ファイルを作成

```bash
# kozawa.js をコピーしてテンプレートにする
cp config/kozawa.js config/yamada.js
```

`config/yamada.js` の中を編集：
- `clinic` → 院名、フッター等を「山田眼科」に
- `theme` → ブランドカラーを変更
- `logo` → ロゴ設定（SVG / 画像 / テキスト）
- `categories` → 取扱カテゴリ（自費+選定 or 選定のみ）
- `lenses` → 取扱レンズとスコアを設定
- `features` → 有効にする機能を選択

### ステップ2: ホスト名マッピングを追加

`index.html` の `hostMap` に1行追加：

```js
const hostMap = {
    'kozawa-iol.netlify.app': 'kozawa',
    'imai-multifocal-iol.netlify.app': 'imai',
    'yamada-iol.netlify.app': 'yamada',    // ← 追加
};
```

### ステップ3: GitHubにpush

```bash
cd ~/Dev/iol-partner
git add .
git commit -m "山田眼科の設定を追加"
git push
```

（Claude Codeで `/commit` でもOK）

### ステップ4: Netlifyでサイトを作成

1. https://app.netlify.com にログイン
2. **Add new project** → **GitHub** → **iol-partner** を選択
3. Project name に **`yamada-iol`** と入力
4. **Deploy** を押す
5. もし「Build image no longer supported」で失敗したら：
   - Project configuration → Build & deploy → 下にスクロール
   - Build image selection → Configure → 最新イメージを選択
   - Deploys → Trigger deploy → Deploy project

### ステップ5: 確認

`yamada-iol.netlify.app` にアクセスして「山田眼科」が表示されればOK。

---

## 変更を保存・公開する

```bash
cd ~/Dev/iol-partner
git add .
git commit -m "変更内容のメモ"
git push
```

GitHubにpush → Netlifyが自動検知 → 全サイトに数秒で反映。

Claude Codeで `/commit` と打っても同じことができます。

---

## 仕組みの概要

- **コード（index.html）は1つ**。全クリニック共通
- **クリニック固有の情報（config/*.js）はデータだけ**。院名・カラー・レンズ・機能フラグ
- **どの設定を読むかはURLで自動判定**。`kozawa-iol.netlify.app` → kozawa の設定
- **`?clinic=xxx` パラメータでも切替可能**。ローカル開発やデモで便利
- **フィーチャーフラグ**で、先行施設だけ新機能をONにできる
