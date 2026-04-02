# IOL Partner — CLAUDE.md

## 概要

多焦点眼内レンズ（IOL）診断アプリ。患者が4つのライフスタイル質問に答えると、最適なレンズを提案する。

- **アーキテクチャ:** SPA（Single Page Application）、マルチテナント構成
- **仕組み:** 1つのコードベース + クリニック別設定ファイル（config/）で複数院に対応

## クリニック別設定

| クリニック | 設定ファイル | レンズ数 | デプロイ先 |
|---|---|---|---|
| 小沢眼科 | config/kozawa.js | 15 | Netlify |
| 今井眼科 | config/imai.js | 7 | Netlify |
| デモ | config/demo.js | — | Netlify |

- 3サイトとも1つのGitHubリポジトリから自動デプロイ

## 技術スタック

- HTML / CSS / JavaScript（フレームワークなし）
- Netlify でホスティング・自動デプロイ
- フィーチャーフラグ対応
- ORT向けProモードあり

## 関連プロジェクト

- `client-kozawa-ganka` — 小沢眼科の案件全体（IOLアプリメンテナンスはAdvanceプランに含む）
- `client-imai-ganka` — 今井眼科のナレッジベース

## 注意事項

- 新クリニック追加時は config/ に設定ファイルを追加するだけでOK
- 詳細は GUIDE.md を参照
