'use strict'

import path from 'path';
import ProjectCore from 'project-core'; 

const $ = global.$ = new ProjectCore();

//加载配置文件
$.init.add((done) => {
    $.config.load(path.resolve(__dirname,'config.js'));
    const env = process.env.NODE_ENV || null;
    if(env){
        $.config.load(path.resolve(__dirname,'../config',env+'.js'))
    }
    $.env = env;
    done();
});

//初始化
$.init((err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }else{
        console.log('hello123 [env=%s]',$.env);
    }
});