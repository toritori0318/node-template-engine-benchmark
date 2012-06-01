
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Express', layout :false })
};
exports.index_haml = function(req, res){
  res.render('index.haml', { title: 'Welcome to Express', layout :false })
};
exports.index_whiskers = function(req, res){
  res.render('whiskers/index.html', { title: 'Welcome to Express', layout :false })
};
exports.index_thunder = function(req, res){
  res.render('thunder/index.html', { title: 'Welcome to Express', layout :false })
};
exports.index_hogan = function(req, res){
  res.render('hogan/index.html', { title: 'Welcome to Express', layout :false })
};
exports.index_no_template = function(req, res){
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end('<html><head></head><body><p>Welcome to Express</p></body></html>');
};
