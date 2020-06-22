# todo list
簡易todo list應用程式

## 功能
+ 可註冊帳號、使用三方Facebook帳號登入，管理自己的todo list
+ 擁有CRUD功能操作todo list

## 相關安裝
1. 開啟terminal(終端機)，開啟作業目錄下執行:
```
git clone https://github.com/rd1123/todo_sequelize.git
```
2. 移動至目錄todo_sequelize
```
cd path/todo_sequelize
```
3. 使用npm安裝相關套件
```
npm install
```
4. 有使用facebook三方登入，需建立.env檔並輸入三變數
```
FACEBOOK_ID=xxxxx
FACEBOOK_SECRET=xxxxx
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```
5. 確認是否建立todo_sequelize database
6. 輸入指令啟動本機伺服器
```
npm run dev
```
出現連結成功即可
# 使用工具
+ [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
+ [Express](https://www.npmjs.com/package/express)
+ [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
+ [method-override](https://www.npmjs.com/package/method-override)
+ [bcryptjs](https://www.npmjs.com/package/bcryptjs)
+ [connect-flash](https://www.npmjs.com/package/connect-flash)
+ [dotenv](https://www.npmjs.com/package/dotenv)-
+ [passport](https://www.npmjs.com/package/passport)
+ [express-session](https://www.npmjs.com/package/express-session)
+ [mysql2](https://www.npmjs.com/package/mysql2)
+ [passport-facebook](https://www.npmjs.com/package/passport-facebook)
+ [passport-local](https://www.npmjs.com/package/passport-local)
+ [sequelize](https://www.npmjs.com/package/sequelize)
+ [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)