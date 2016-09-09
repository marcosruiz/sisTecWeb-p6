var appRouter = function(app) {

  /*
  It sends a form log in and Sing up
  */
  app.get("/", function(req, res){
    console.log("GET / was called. ");
    res.sendfile(__dirname + '/index.html');
  });
}

module.exports = appRouter;
