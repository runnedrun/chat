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
    addListItem("saylist", useUser + accountColor + accountColor.length);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  var getTheirColor1 = (reclean.slice(reclean.length-1))
  var getTheirColor2 = (reclean.slice(reclean.length-getTheirColor1+1,reclean.length-1))
  console.log(getTheirColor1)
  console.log(getTheirColor2)
  var workPlease = reclean.split(": ")[0]
  var stylize = (workPlease.bold().fontcolor(accountColor) + ": " + reclean.split(": ")[1])
  chatlist.push(stylize);
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

