'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _projectCore = require('project-core');

var _projectCore2 = _interopRequireDefault(_projectCore);

var _mongoose = require('mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const $ = global.$ = new _projectCore2.default();

//加载配置文件
$.init.add(done => {
    $.config.load(_path2.default.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV || null;
    if (env) {
        $.config.load(_path2.default.resolve(__dirname, '../config', env + '.js'));
    }
    $.env = env;
    done();
});

//初始化mongodb
$.init.load(_path2.default.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(_path2.default.resolve(__dirname, 'models'));

//初始化
$.init(err => {
    if (err) {
        console.log(err);
        process.exit(-1);
    } else {
        console.log('hello123 [env=%s]', $.env);
    }

    const item = new $.model.User({
        name: 'xieru2',
        password: '123456',
        nickname: '测试用户'
    });
    item.save(console.log('saved success'));
});