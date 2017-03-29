/**
 * Created by hufp on 2017/3/29.
 */

/*
* Node.js EventEmitter 学习
* */
var events  = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listen1', arg1, arg2);
});

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listen2', arg1, arg2);
});

emitter.on('someEvent2', function (arg1, arg2) {
    console.log('listen3', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
emitter.emit('someEvent2', 'Hello', 'Node.js!!');