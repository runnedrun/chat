// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

// The Master List... ______________________________________________

var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var useUser = (realUser + ": " + antijosh)
    addListItem("saylist", useUser);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  chatlist.push(r);
  var limit = chatlist.slice(chatlist.length - 25, chatlist.length);
  chat.html(limit.join("<br>"));
 })

