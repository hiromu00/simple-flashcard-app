# 英検3級 英単語カード

英検3級の頻出英単語100語を学習できるインタラクティブなフラッシュカードアプリ。品詞別フィルタリング、進捗管理、例文表示機能を搭載。

![英検3級 英単語カード](images/screenshot.png)

## 主要機能

### 📚 豊富な単語データ
- **100語の英検3級頻出単語**（Web調査に基づく実際の頻出語）
- 品詞別内訳：動詞25語、名詞35語、形容詞25語、副詞15語
- 各単語に英文例文付き

### 🎯 学習支援機能
- **カードフリップ**: クリックで裏返して意味・例文を確認
- **品詞フィルタ**: ドロップダウンで特定の品詞のみを学習可能
- **プログレスバー**: 学習進捗をリアルタイム表示
- **シャッフル機能**: Fisher-Yatesアルゴリズムでランダム学習

### 🎨 モダンなUI/UX
- グリーン系カラーの学習アプリデザイン
- 3Dカードフリップアニメーション
- レスポンシブ対応

## 使用技術

- **フロントエンド**: HTML5, CSS3, JavaScript (ES6+)
- **データ管理**: JSON
- **非同期処理**: Fetch API
- **アニメーション**: CSS3 Transform & Transition

## プロジェクト構造

```
simple-flashcard-app/
├── index.html              # メインHTML
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── script.js          # アプリロジック
├── data/
│   └── words.json         # 単語データ（100語）
├── images/
│   └── screenshot.png     # デモ画像
├── README.md              # このファイル
└── .gitignore            # Git除外設定
```

## セットアップ

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/yourusername/simple-flashcard-app.git
   cd simple-flashcard-app
   ```

2. **ブラウザで開く**
   ```bash
   # ローカルサーバーを起動（推奨）
   python3 -m http.server 8000
   # ブラウザで http://localhost:8000 にアクセス
   ```
   
   または、`index.html`を直接ブラウザで開く（一部ブラウザではCORSエラーが発生する場合があります）

## 使い方

1. **カード確認**: 英単語カードをクリックして裏面（意味・品詞・例文）を表示
2. **ナビゲーション**: 「前へ」「次へ」ボタンでカードを移動
3. **品詞フィルタ**: ドロップダウンで特定の品詞（動詞/名詞/形容詞/副詞）のみを学習
4. **シャッフル**: 「シャッフル」ボタンでランダム順に並び替え
5. **進捗確認**: プログレスバーで学習の進み具合を確認

## 技術的な工夫点

### データ管理
- 単語データをJSONファイルに外部化し、保守性を向上
- Fetch APIによる非同期データ読み込み
- エラーハンドリング実装

### UI/UX設計
- CSS Grid/Flexboxでレスポンシブレイアウト
- `perspective`と`rotateY`で3Dカードフリップ
- `backdrop-filter: blur()`によるすりガラス効果
- スムーズなアニメーション（`transition`）

### アルゴリズム
- Fisher-Yates Shuffle による完全ランダム並び替え
- `Array.filter()`による効率的な品詞フィルタリング

## ライセンス

MIT License

## 制作者

開発者名 - [@yourhandle](https://github.com/yourusername)
