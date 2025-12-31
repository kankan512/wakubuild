# Wakubuild Corporate Site

## 構成

AstroでSSGとして作成。

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## コマンド

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | npmモジュールのインストール                            |
| `npm run dev`             | ローカルサーバーの起動 `localhost:4321`      |
| `npm run build`           | `./dist/` にビルド結果の生成    |
| `npm run preview`         | ビルド結果をプレビューとしてローカルサーバーで確認する     |

## SSGでのメールフォーム

SSGでのメールフォームには[SSGform](https://ssgform.com/)を使用する想定。
無料プランで下記が可能。

- 月間100フォーム送信
- メンバー数無制限
- 送信通知メール
- 送信後転送
- reCAPTCHA
- 自動応答メール
