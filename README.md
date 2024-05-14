## 概要

このリポジトリは、モノレポ構成のブログアプリです。

## URL
https://suu-blog.pages.dev/

## 構成
![image](https://github.com/su-san1129/suu-blog/assets/48959170/23d5c781-8b50-4f21-8e73-82f18384c76d)

## 開発環境のセットアップ

1. リポジトリをクローンします。

```
$ git clone https://github.com/su-san1129/suu-blog.git
```

2. 依存関係をインストールします。

```
$ pnpm install
```

3. データベースを起動します。

```
$ make db-up
```

4. クライアントとサーバーを起動します。

```
$ pnpm run:client
$ pnpm run:server
```

## 使用技術

フロントエンド: React, TypeScript, Vite  
バックエンド: Hono, TypeScript, Prisma  
データベース: MySQL  
パッケージマネージャー: pnpm  
インフラ: Docker 

## 今後の予定

ブログ記事の CRUD 機能の実装  
UI デザインの改善  
テストの追加  
デプロイ環境の整備
