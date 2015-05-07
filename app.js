// 开始加载系统和第三方的服务
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var ejs = require('ejs'); // ejs --> HTML

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// ejs --> HTML
app.engine('html', ejs.__express);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// 打开开发者模式
app.use(logger('dev'));
// JSON数据解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// COOKIE解析
app.use(cookieParser());
// 静态页位置
app.use(express.static(path.join(__dirname, 'public')));

// 路由规则映射，映射到routes文件夹下面的index.js 和 users.js文件
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
// 监听404错误端口
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
// 开发者模式
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
// 监听系统错误500
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
