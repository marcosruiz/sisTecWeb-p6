var appRouter = function(app, http) {
  var path = require('path');

  /*
  It sends a form log in and Sing up
  */
  app.get("/", function(req, res){
    console.log("GET / was called. ");
    res.sendFile('templates/index.html', {root: path.join(__dirname, '..')});
  });
  app.get("/login.html", function(req, res){
    console.log("GET / was called. ");
    res.sendFile('templates/login.html', {root: path.join(__dirname, '..')});
  });
}

module.exports = appRouter;
