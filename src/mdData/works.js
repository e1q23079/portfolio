const worksText = `
# Works
***
今まで開発に携わってきた・開発したシステム，作成した作品をいくつか紹介します．

## 謎解き×旅RPG「幻宝伝説 関西に眠る記憶」
![memoriesThatSleepInKansai](/files/memoriesThatSleepInKansai.png)
関西の観光名所を巡りながら謎解きを進めるマルチプレイRPG

「関西情報系学生団体交流会（KC3）」主催のハッカソン，「KC3 Hack2025」にて友人と開発を行った．

### コンセプト
関西の名所に隠された秘密に迫る楽しさを体験してもらう

### 仕様
- WEBで動作する謎解きRPG
- Socket.IOを活用し，リアルタイム通信でゲームをプレイできる
### 新規性
![mtsik01](/files/mtsik01.png)
- キャラクターになりきれる2人プレイRPG
    - 2人の異なる2人の視点で物語を進める
    - 2人の選択によって会話が相互に影響し合う
- 実在の関西の観光スポット×ファンタジーの融合
    - 関西の観光スポットの観光を疑似体験しながら謎解きを進める
### 工夫点
![mtsik04](/files/mtsik04.png)
- プレイヤーごとの進行速度の違いに対応
    - 待機ポイントを設定することで，進行のバランスを調節
    - お互いが待機ポイントに到達後，次のステップに移動する
    - 待機ポイントに通信を絞ることで，サーバーへの負荷を軽減
### 頑張ったこと
- サーバー環境の構築
- SSL化
### 使用技術
- フロントエンド
    -  HTML
    -  CSS
    -  Bootstrap
    -  JavaScript
    -  Socket.IO
    -  jsQR
- バックエンド
    - Docker
    - Python
        - Flask
        - Socket.IO
    - Waiterss
    - Ubuntu Server
    - Nginx
    - namecheap
    - Let's Encrypt
### 開発期間
1週間

※アイディア期間：1週間
### 開発人数
2人
### コード量
約3984行

### ホームページ
[https://momijiworks.me/](https://momijiworks.me/)
### GitHub
[https://github.com/kc3hack/2025_22](https://github.com/kc3hack/2025_22)

## 文化祭モバイルオーダーシステム
「大阪工業大学」の文化祭「北山祭」で「HxSコンピュータ部」が「フランクフルト」の模擬店で使用したシステム

「HxSコンピュータ部」のメンバーで開発を行った．

バックエンドとフランクフルト焼き時間予測システムを担当した．

### コンセプト
文化祭をもっと楽しく，もっと面白く，快適にする
### 仕様
- WEBアプリで注文すると，管理者の端末に表示される
- フランクフルトを焼き始めるタイミングを，管理者の端末に通知する
### 新規性
- 商品の受け取り時にニックネームで呼び出し
    - 名前ではなく，ユニークなニックネームを用いて，イベントの雰囲気を盛り上げる
- 焼き時間予測システム
    - 注文された受け取り時刻から，フランクフルトの焼き時間を逆算して予測して，調理担当に通知する
### 工夫点・頑張ったこと
- フェッチAPI
    - フェッチAPIを使うことで，ページの更新を行わないで，ブラウザ上に通知ができるようにした
### 使用技術
- フロントエンド
    - HTML
    - CSS
    - Bootstrap
    - JavaScript
- バックエンド
    - Python
    - Flask
    - MySQL
    - Docker
### 開発期間
約1カ月
### 開発人数
約10人
### コード量
約2610行

### GitHub
[https://github.com/oithxs/mobile-order-2024](https://github.com/oithxs/mobile-order-2024)

## 部室入退室管理システム
「HxSコンピュータ部」で，部室にいる人をリアルタイムで把握するために開発したシステム

「HxSコンピュータ部」のメンバーで開発を行った．

Discord Botの開発を担当した．

### コンセプト
部室の利用をもっと便利にするため，誰がいるか一目でわかるように可視化する
### 仕様
- 部室への入室をWi-Fiへの接続状況から検知する
- 検知した結果をDiscordのロールとして付与する
### 新規性
- Discordのロールで入室状況を可視化
### 工夫点
-  モブプログラミング
    -  効率的な開発を行うため，Visual Studio CodeのLive Shareでモブプログラミングを行った
### 使用技術
- フロントエンド
    - HTML
    - CSS
    - Bootstrap
    - JavaScript
- バックエンド
    - Python
    - Flask
    - Didcord Bot
    - Docker
    - SQLite
### 開発期間
約2週間
### 開発人数
約10人
### コード量
約416行

### GitHub
[https://github.com/oithxs/clubroom-observer](https://github.com/oithxs/clubroom-observer)
## 百人一首競技タイピング
![HKTyping](/files/HKTyping.png)
百人一首でタイピング対決ができるサイト

「文学基礎」の授業で，「小倉百人一首×情報科学」のアイディアを出す課題で思いつき，実際に開発を行うことにした．

### コンセプト
タイピングで競いながら百人一首を学べる
### 仕様
- WebSocketで通信を行い，2人で競うタイピングゲーム
### 新規性
- 百人一首と情報を掛け合わせたコンテンツであること
### 工夫点
- 大学の静的なサーバーで稼働できる
    - WebSocketサーバー，Achexを使用
- 古典を彷彿とさせるデザイン
    - 百人一首のイメージ画面上で再現
### 使用技術
- HTML
- CSS
- JavaScript
- WebSocket
    - Achex
### 開発期間
1週間程度
### 開発形態
個人開発
### コード量
約721行

### GitHub
[https://github.com/e1q23079/HKTyping](https://github.com/e1q23079/HKTyping)

## MimiWoMamoru
Bluetoothのイヤホンやヘッドホンを使っていると，PCの音量設定が爆音になる現象がよく発生していたため開発した耳を守るためのツール
### コンセプト
PCの爆音設定からあなたの耳を守る
### 仕様
- 音量設定の以上な変化を検知すると，音量を下げる
### 新規性
- 音量設定の変化を検知している
### 工夫点
- カスタマイズ性
    - 環境により動作が異なるため，ファイルから設定を読み込めるようにした
### 使用技術
- Python
### 開発期間
約1週間
### 開発形態
個人開発
### コード量
177行

### GitHub
[https://github.com/e1q23079/MimiWoMamoru](https://github.com/e1q23079/MimiWoMamoru)

## HITSUDAN
![HITSUDAN](/files/HITSUDAN.png)
筆談で会話をする際，字を書くより，WEBアプリにするともっと会話がしやすくなると思い，開発を始めた．
### コンセプト
筆談を簡単に，会話を楽しくする
### 仕様
- 会話した内容が，WEBアプリ上に表示される
### 工夫点
- シンプルなボタン
    - PCやスマートフォンに不慣れでも操作ができる
### 使用技術
- HTML
- CSS
- JavaScript
- Web Speech API 
### 開発期間
約1週間
### 開発形態
個人開発
### コード量
46行

### GitHub
[https://github.com/e1q23079/hitsudan](https://github.com/e1q23079/hitsudan)

## ステレオテスト
![image05](/files/image05.png)
スピーカーやイヤホンの左右がわからなくなるので，開発したAndroidのアプリ

Androidアプリ開発の勉強を兼ねて作成

### コンセプト
スピーカーやイヤホンの右と左がわかる
### 仕様
- 「右」，「左」のボタンをタップすると，音が鳴る
### 新規性
- 右と左がわかるそれだけの機能に絞られ，シンプルであること
### 工夫点
- シンプルさを追求
### 使用技術
- Android Java
### 開発期間
約1カ月
### 開発形態
個人開発
### コード量
約152行

### GitHub
[https://github.com/e1q23079/StereoTest](https://github.com/e1q23079/StereoTest)

## instantgram
インスタのアカウントなしでインスタを見たかったので開発したChrome用の拡張機能
### コンセプト
インスタグラムにログインしないでインスタグラムを見る
### 仕様
- インスタグラムのログイン画面を消す
### 新規性
- ログイン画面の要素自体をJavaScriptで削除している
- Chromeの拡張機能として開発している
### 工夫点・頑張った点
- ログイン画面の要素のidの調査
### 使用技術
- JavaScript
### 開発期間
約3日
### 開発形態
個人開発
### コード量
約19行

### GitHub
[https://github.com/e1q23079/instantgram](https://github.com/e1q23079/instantgram)

## yubiControl
PCから離れたところから，PCを操作したいと思い開発
### コンセプト
画面に触れずにPCを操作
### 仕様
- 親指と人差し指で摘まむと右クリックできる
### 工夫点・頑張った点
- 親指と人差し指が摘ままれていることの検知
    - 何度もパラメータを変更し，実験を行った
### 使用技術
- Python
- MediaPipe
### 開発期間
約5日
### 開発形態
個人開発
### コード量
65行

### GitHub
[https://github.com/e1q23079/yubiControl](https://github.com/e1q23079/yubiControl)

## 「遊霊ワンルームからの脱出」
謎解きの学生プロジェクト（MAGIOT）のメンバーで作成
![ポルターガイスト01](/files/pol01.png)

![ポルターガイスト02](/files/pol02.jpg)

ぬいぐるみを落下させたり，ごみ箱を倒したり，金庫を開けたり...物騒なものを担当しています．
### 使用技術
- M5Stick
    ![m5Stick](/files/m5stick01.png)
    - Arduino言語
    - UDP通信
    - サーボモーター
- 3Dプリンター
    - Designspark
    - Autodesk Fusion
### 工夫点・頑張った点
- サーボモーターの動力の向きを変える機構の作成
### 動画
- デモプレイ
    - https://youtu.be/9rlT2fYRkhg
- メイキング映像
    - https://youtu.be/47vlNDix_Ug

## 基礎ゼミの文化祭動画編集
基礎ゼミで，各チームが作成したアニメーションの総集編の作成を行いました．
### 使用ソフト
- Adobe Premiere Pro

## その他
他にも，作成したプログラムをGitHubに公開しています．

[https://github.com/e1q23079/](https://github.com/e1q23079/)

`;

export default worksText;