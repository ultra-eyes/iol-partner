# IOL Partner — 日常の使い方ガイド

## ローカルで開発・確認する

```bash
cd ~/Dev/iol-partner
python3 -m http.server 8080
```

ブラウザで開く：

| クリニック | URL |
|---|---|
| 小沢眼科（15種） | http://localhost:8080?clinic=kozawa |
| 今井眼科（7種） | http://localhost:8080?clinic=imai |
| デフォルト（小沢） | http://localhost:8080 |

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

### 新規クリニックに提供
1. `config/kozawa.js` をコピーして `config/{clinic_id}.js` を作成
2. 院名・カラー・ロゴ・レンズを書き換え
3. `?clinic={clinic_id}` でアクセス

---

## 変更を保存・公開する

```bash
cd ~/Dev/iol-partner
git add .
git commit -m "変更内容のメモ"
git push
```

GitHubにpush → Netlifyが自動検知 → 数秒で本番反映。

Claude Codeで `/commit` と打っても同じことができます。
