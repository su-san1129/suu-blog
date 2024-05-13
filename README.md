## 概要

このリポジトリは、モノレポ構成のブログアプリです。  
フロントエンドに React、バックエンドに Node.js、データベースに MySQL を使用しています。

## 開発環境のセットアップ

1. リポジトリをクローンします。

```
$ git clone https://github.com/su-san1129/suu-blog.git
```

2. 依存関係をインストールします。

```
$ make install
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
バックエンド: Node.js, TypeScript, Express  
データベース: MySQL  
パッケージマネージャー: pnpm  
インフラ: Docker 

## 今後の予定

ブログ記事の CRUD 機能の実装
UI デザインの改善
テストの追加
デプロイ環境の整備
