# IOL Partner — 多焦点眼内レンズ診断アプリ

眼科クリニック向けのIOL（眼内レンズ）マッチング診断ツール。
患者がライフスタイルに関する4つの質問に答えるだけで、相性の高いレンズを提示する。
1つのコードベースから複数の眼科クリニックにパーソナライズ提供できる設計。

---

## 本番サイト

| サイト | URL | 内容 |
|---|---|---|
| デモ・営業用 | [partner-iol.netlify.app](https://partner-iol.netlify.app) | Ultra Eyes Clinic（架空） |
| 小沢眼科 | [kozawa-iol.netlify.app](https://kozawa-iol.netlify.app) | 15種（自費+選定療養） |
| 今井眼科 | [imai-multifocal-iol.netlify.app](https://imai-multifocal-iol.netlify.app) | 7種（選定療養のみ） |

**すべて同じリポジトリから配信。`git push` すると全サイト同時に自動更新。**

### TODO
- [ ] 質問テキストの改善
- [ ] デザインリニューアル（洗練・華やかさ向上）
- [ ] V2: 色覚に関する質問追加（クリアレンズ/イエローレンズ区分）

---

## 設計

### ファイル構成

```
iol-partner/
├── index.html          ← アプリ本体（全クリニック共通。これ1つだけ）
├── config/
│   ├── demo.js          ← デモ用（Ultra Eyes Clinic）
│   ├── kozawa.js        ← 小沢眼科（15種、自費+選定療養）
│   └── imai.js          ← 今井眼科（7種、選定療養のみ）
├── assets/              ← ロゴ等
├── GUIDE.md             ← 日常の使い方ガイド（← 操作方法はこちら）
└── README.md            ← このファイル（設計・仕組みの説明）
```

### 設計思想

**「コード1つ、データで切替」**

```
index.html（共通） ─── config/kozawa.js を読む ──→ 小沢眼科として動作
                   ─── config/imai.js を読む   ──→ 今井眼科として動作
                   ─── config/demo.js を読む   ──→ デモとして動作
```

- アプリの見た目・機能（`index.html`）は全クリニック共通
- クリニック固有の情報（院名・色・レンズ・機能）はすべて `config/*.js` に分離
- 新規クリニック追加 = config に JS ファイルを1つ追加するだけ。コード変更不要

### クリニック自動判定の仕組み

アプリはアクセスされたURLを見て、どのクリニックの設定を読むか自動で決める。

```
ブラウザでアクセス
    ↓
「今どのURLで開かれた？」を確認
    ↓
kozawa-iol.netlify.app     → config/kozawa.js を読む
imai-multifocal-iol.netlify.app → config/imai.js を読む
それ以外                    → config/demo.js を読む
    ↓
?clinic=xxx パラメータがあれば、そちらを優先
```

この判定は `index.html` 内の `hostMap` で定義している：

```js
const hostMap = {
    'kozawa-iol.netlify.app': 'kozawa',
    'imai-multifocal-iol.netlify.app': 'imai',
};
```

### フィーチャーフラグ

各クリニックの config に `features` オブジェクトがあり、機能のON/OFFをクリニック単位で制御できる。

```js
features: {
    colorQuestion: false,   // V2: 色覚質問
    paperReference: false,  // 論文エビデンス表示
    proMode: true,          // ORT向けプロ比較モード
    sdmMode: false,         // 将来: 共同意思決定
}
```

新機能を作ったら → 先行施設（小沢眼科）だけ `true` にしてテスト → 問題なければ他施設もON、という段階リリースができる。

### CONFIG の構造

| セクション | 内容 |
|---|---|
| `clinic` | 院名、エクスポートファイル名、共有タイトル等 |
| `theme` | brandBlue / brandGold / brandNavy / backgroundColor |
| `logo` | type（svg / image / text）、SVGデータ or 画像パス |
| `features` | フィーチャーフラグ（上記参照） |
| `scoring` | マッチング係数、最低スコア、単焦点推奨閾値 |
| `questions` | 質問の配列（cat, text, key） |
| `scale` | スケール範囲（1〜5）、ラベル |
| `categories` | プロ比較モードのカテゴリ順序 |
| `displayParams` | プロ比較モードの6軸表示定義 |
| `lenses` | レンズデータベース（スコア + 説明文） |

---

## マッチングアルゴリズム

```
totalDiff = |ユーザー回答[遠方] - レンズ[遠方]|
          + |ユーザー回答[中間] - レンズ[中間]|
          + |ユーザー回答[近方] - レンズ[近方]|
          + |ユーザー回答[夜間] - レンズ[夜間]|

相性度(%) = max(10, round(100 - totalDiff × 5.5))
```

ユーザーの回答（1〜5）とレンズの特性値（1〜5）の差が小さいほど相性度が高くなる。

### 単焦点レンズ推奨条件

以下のいずれかに該当する場合、多焦点ではなく単焦点（保険適用）を推奨表示する：

1. 1位の相性スコア ≤ 60%
2. スマホ ≤ 2 かつ PC ≤ 2 かつ 運転 ≥ 4 かつ 夜間 ≥ 4（遠くだけ見えればいい人）

---

## 開発の進め方

### 普段の開発フロー

```
ファイル編集 → localhost で確認 → git push → 全サイトに自動反映
```

### 実験したいとき（sandbox）

本番に影響を与えずに自由にいじれる作業場（ブランチ）を作る。
Claude Code に「sandbox で遊びたい」と言えばOK。

```
main（本番） ← push すると3サイトに反映
  │
  └── sandbox（実験場） ← 何しても本番に影響なし
        │
        気に入った → main にマージ → 本番に反映
        ダメだった → 捨てる → なかったことに
```

### 詳しい操作方法

→ **[GUIDE.md](GUIDE.md)** を参照

---

## インフラ構成

```
GitHub（ultra-eyes/iol-partner）
    │
    │  git push すると自動で
    │
    ├──→ partner-iol.netlify.app      （デモ）
    ├──→ kozawa-iol.netlify.app       （小沢眼科）
    └──→ imai-multifocal-iol.netlify.app （今井眼科）
```

- **GitHub**: コードの保管場所。変更履歴がすべて残る
- **Netlify**: 配信サーバー。GitHubと連携して自動デプロイ
- **ビルド不要**: HTMLをそのまま配信するのでビルドプロセスなし

---

## 関連リポジトリ

| リポジトリ | 内容 |
|---|---|
| `ultrize-hq` | ULTRIZE 事業ナレッジ本部 |
| `client-kozawa-ganka` | 小沢眼科の提案書・マニュアル群 |
| `client-imai-ganka` | 今井眼科のマニュアル群 |
| `ecoh-theme` | eCOH. の WordPress テーマ |
