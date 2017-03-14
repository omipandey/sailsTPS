module.exports = function logRequest(req, res, next) {
    var start = new Date().getTime();
    sails.logger.info("[ Request ] Method :  %s, Ip : %s, Resource : %s", req.method, req.ip, req.originalUrl);
    next();
    res.on("finish", function(){
      var end = new Date().getTime();
      sails.logger.info("[ Response ] Method : %s, IP : %s, Resource : %s, ResponseStatusCode : %s, Time : %s (ms)", req.method, req.ip, req.originalUrl, res.statusCode, end - start);
    });
    
};