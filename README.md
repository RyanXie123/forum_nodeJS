# forum_nodeJS
##初始化项目
npm i babel-cli babel-preset-es2015-node4 babel-preset-stage-0 --save-dev

##babel 实时
babel src -d target --watch

npm run compile

export NODE_ENV=dev && node target/server.js
export NODE_ENV=dev && export DEBUG='my*' && node target/server.js