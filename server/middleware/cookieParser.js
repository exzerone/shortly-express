const parseCookies = (req, res, next) => {
  var result = {};
  var cookies = req.headers.cookie;
  if (cookies && req.headers){
    var array = cookies.split('; ')
    array.forEach((cookie)=>{
      var split = cookie.split('=');
      result[split[0]] = split[1];
    })
  }
  req.cookies = result;
  next();
};

module.exports = parseCookies;