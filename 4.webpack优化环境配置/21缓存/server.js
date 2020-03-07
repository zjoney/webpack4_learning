/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/**
 服务器代码
启动服务器：
  npm i nodemon -g
  nodemon server.js

  node server.js
  访问服务器地址:
  http://localhost:3000/
 */

const express = require('express');
const app = express();
app.use(express.static('build', { maxAge: 1000 * 3600 }));
app.listen(3000);