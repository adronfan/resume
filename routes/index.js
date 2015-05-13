var express = require('express');
var router = express.Router();

/* GET home page. */
// 主页-首页
router.get('/', function(req, res, next) {
  res.render('index', {});
});

// 流水线
router.get('/jianli', function(req, res, next) {
  res.render('jianli', {});
});

// 购买流程
router.get('/xiangmu', function(req, res, next) {
  res.render('xiangmu', {});
});

// 购买流程
router.get('/gongsijianjie', function(req, res, next) {
  res.render('gongsijianjie', {});
});

// 购买流程
router.get('/hezuohuoban', function(req, res, next) {
  res.render('hezuohuoban', {});
});

// 售后
router.get('/shouhou', function(req, res, next) {
  res.render('shouhou', {});
});

router.get('/test', function(req, res, next) {
  res.render('test', {});
});
module.exports = router;
