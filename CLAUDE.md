# IOL Partner — CLAUDE.md

## 概要

多焦点眼内レンズ（IOL）診断アプリ。患者が4つのライフスタイル質問に答えると、最適なレンズを提案する。

- **アーキテクチャ:** SPA（Single Page Application）、マルチテナント構成
- **仕組み:** 1つのコードベース + クリニック別設定ファイル（config/）で複数院に対応

## クリニック別設定

| クリニック | 設定ファイル | レンズ数 | URL |
|---|---|---|---|
| デモ | config/demo.js | — | partner-iol-demo.ultra-eyes.com |
| 小沢眼科 | config/kozawa.js | 15 | kozawa-iol.ultra-eyes.com（準備中） |
| 今井眼科 | config/imai.js | 7 | imai-iol.ultra-eyes.com（準備中） |

- 1つのGitHubリポジトリから全サブドメインへ自動FTPデプロイ（GitHub Actions）

## 技術スタック

- HTML / CSS / JavaScript（フレームワークなし）
- Xserver（ultra-eyes.com）でホスティング
- GitHub Actions + FTP で自動デプロイ（main push時）
- フィーチャーフラグ対応
- ORT向けProモードあり

## デプロイ

- **トリガー:** `main` ブランチへのpush
- **方式:** GitHub Actions → FTP → Xserver
- **Secrets:** `FTP_HOST` / `FTP_USER` / `FTP_PASS`（GitHubリポジトリのSettings > Secrets）
- **サブドメイン追加時:** `.github/workflows/deploy.yml` のコメントアウトを解除

## 関連プロジェクト

- `client-kozawa-ganka` — 小沢眼科の案件全体（IOLアプリメンテナンスはAdvanceプランに含む）
- `client-imai-ganka` — 今井眼科のナレッジベース

## 注意事項

- 新クリニック追加時は config/ に設定ファイルを追加するだけでOK
- 詳細は GUIDE.md を参照
