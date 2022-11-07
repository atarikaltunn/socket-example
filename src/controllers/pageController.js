const path = require("path");

exports.getIndexPage = (req, res) => {
  const pageLocation = path.join(__dirname, "..", "views", "/index.html");
  
  res.sendFile(pageLocation, function(err) {
    
    return err ? res.status(err.status).end() : res.status(200).end();

  });
};
