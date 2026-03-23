# IOL Partner — 多焦点眼内レンズ診断アプリ

眼科クリニック向けのIOL（眼内レンズ）マッチング診断ツール。
患者がライフスタイルに関する4つの質問に答えるだけで、相性の高いレンズを提示する。

## ステータス

| 項目 | 状況 |
|---|---|
| **現在のバージョン** | v1.0（CONFIG外出し対応済み） |
| **本番デプロイ** | [partner-iol.netlify.app](https://partner-iol.netlify.app)（小沢眼科版・旧コード） |
| **このリポジトリ** | 新アーキテクチャ版。まだデプロイ未実施 |
| **対応クリニック** | 小沢眼科グループ（15種）/ 今井眼科（7種） |

### TODO
- [ ] 質問テキストの改善
- [ ] デザインリニューアル（洗練・華やかさ向上）
- [ ] Netlifyデプロイ設定（サブドメイン or パラメータ切替）
- [ ] V2: 色覚に関する質問追加（クリアレンズ/イエローレンズ区分）

---

## アーキテクチャ

```
iol-partner/
├── index.html          ← 共通アプリ本体（全クリニック共通）
├── config/
│   ├── kozawa.js        ← 小沢眼科（15種、自費+選定療養）
│   └── imai.js          ← 今井眼科（7種、選定療養のみ）
└── assets/              ← ロゴ等（今後使用）
```

### 設計思想
- **コード1つ、データで切替** — アプリ本体（`index.html`）は全クリニック共通。クリニック固有の情報はすべて `config/*.js` に分離
- **フィーチャーフラグ** — 先行施設（小沢眼科）でテストし、安定したら他施設にもONにする段階リリース

---

## 使い方

### ローカル確認
```bash
cd ~/Dev/iol-partner
python3 -m http.server 8080
```
- 小沢眼科版: http://localhost:8080?clinic=kozawa
- 今井眼科版: http://localhost:8080?clinic=imai
- パラメータなし: デフォルトで kozawa

### 新規クリニック追加
1. `config/kozawa.js` をコピーして `config/{clinic_id}.js` を作成
2. CONFIG内の以下を編集:
   - `clinic` — 院名・フッター等
   - `theme` — ブランドカラー
   - `logo` — ロゴ（SVG / 画像 / テキスト）
   - `categories` — 取扱カテゴリ（`['自費診療', '選定療養']` or `['選定療養']`）
   - `lenses` — 取扱レンズとスコア
   - `features` — 有効にする機能
3. `?clinic={clinic_id}` でアクセス

---

## CONFIGの構造

| セクション | 内容 |
|---|---|
| `clinic` | 院名、エクスポートファイル名、共有タイトル等 |
| `theme` | brandBlue / brandGold / brandNavy / backgroundColor |
| `logo` | type（svg/image/text）、SVGデータ or 画像パス |
| `features` | フィーチャーフラグ（colorQuestion, paperReference, proMode, sdmMode） |
| `scoring` | マッチング係数、最低スコア、単焦点推奨閾値 |
| `questions` | 質問の配列（cat, text, key） |
| `scale` | スケール範囲（1〜5）、ラベル |
| `categories` | プロ比較モードのカテゴリ順序 |
| `displayParams` | プロ比較モードの6軸表示定義 |
| `lenses` | レンズデータベース（スコア + 説明文） |

---

## マッチングアルゴリズム

```
totalDiff = Σ |ユーザー回答[key] - レンズスコア[key]|  （4軸）
相性度(%) = max(10, round(100 - totalDiff × 5.5))
```

### 単焦点レンズ推奨条件
以下のいずれかに該当する場合、単焦点（保険適用）を推奨:
1. 1位の相性スコア ≤ 60%
2. スマホ ≤ 2 かつ PC ≤ 2 かつ 運転 ≥ 4 かつ 夜間 ≥ 4

---

## 関連

- **事業ナレッジ**: [ultrize-hq](../ultrize-hq/)
- **旧版（小沢眼科ベタ書き）**: Netlifyにデプロイ済み。このリポジトリで置き換え予定
- **提案書での参照**: `client-kozawa-ganka/proposals/` にスクリーンショットを掲載
