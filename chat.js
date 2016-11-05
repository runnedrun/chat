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
    addListItem("saylist", ccleanerUser +"\\\," + antijosh + "\\\," + accountColor);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var chatObject = {
    username: "",
    color: "",
    message: "",
  }
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  chatObject.username = (reclean.split("\\\,")[0]);
  chatObject.color = (reclean.split("\\\,")[2]);
  chatObject.message = (reclean.split("\\\,")[1]);
  var lookForCommand = chatObject.message
  var isImg = lookForCommand.indexOf("/img")
  if (isImg > -1) {
    var imgSrc = (lookForCommand.split("/img"))[1];
    chatObject.message = ("<img src='" + imgSrc +"' />")
  }
  var finalMessage = ((chatObject.username).bold().fontcolor(chatObject.color) + ": ".bold().fontcolor(chatObject.color) + chatObject.message)
  chatlist.push(finalMessage);
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

