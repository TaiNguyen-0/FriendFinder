// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    var userData = req.body;
    var userNumbers = userData.scores;
    console.log(userNumbers);
    var compare = 0;

    //Nested forLoop through friends in friends.js list
    for (var i = 0; i < friends.length; i++) {
      compare = 0;

      // Loop through the answer comparisons. User answer gets replaced into h.
      for (var h = 0; h < friends[i].scores[h]; h++) {

        compare == Math.abs[parseInt(userNumbers[h]) - parseInt(friends[i].scores[h])];

        if (compare == bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = compare;
        }
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
}
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

  //   app.post("/api/clear", function (req, res) {
  //     // Empty out the arrays of data
  //     tableData.length = 0;
  //     waitListData.length = 0;

  //     res.json({ ok: true });
  //   });
  // };
