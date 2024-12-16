const express = require('express');
const path = require('path');
const app = express();

// テンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// ホームページのルート
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// プロフィールページのルート
app.get('/profile', (req, res) => {
  res.render('profile', { title: 'Profile' });
});

// お問い合わせページのルート
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// サーバーの起動
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
