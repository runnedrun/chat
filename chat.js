// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

var digitChecker = "f"
// The Master List... ______________________________________________

var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var cleanerUser = (String(jackIsDumb));
    var ccleanerUser = cleanerUser.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var useUser = (ccleanerUser + ": " + antijosh);
    addListItem("saylist", useUser);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  chatlist.push(reclean);
  var workPlease = reclean.split(": ")
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

