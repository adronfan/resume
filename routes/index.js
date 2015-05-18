var express = require('express');
var router = express.Router();

/* GET home page. */
// 主页-首页
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/jianli', function(req, res, next) {
  res.render('jianli', {});
});

router.get('/xiangmu', function(req, res, next) {
  res.render('xiangmu', {});
});

router.get('/gongsijianjie', function(req, res, next) {
  res.render('gongsijianjie', {});
});

router.get('/hezuohuoban', function(req, res, next) {
  res.render('hezuohuoban', {});
});

router.get('/shouhou', function(req, res, next) {
  res.render('shouhou', {});
});

router.get('/test', function(req, res, next) {
  res.render('test', {});
});
module.exports = router;
