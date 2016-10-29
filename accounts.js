//buttons! ----------------------------------------------------

$("#button").click(function() {
  $("#siscreen").css({display: "inline-block"});
})

$("#signup").click(function() {
  $(".su").css({display: "block"});
})

$("#return").click(function() {
  $("#siscreen").css({display: "none"});
})

//Create account ----------------------------------------------

var create = $("#create");

//new user -------------

var newUser = $("#enteruser");

var user = "blah"


//password check -------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");

//On button press ------

create.click(function() {
  user = newUser.val();
  if (pass1.val() == pass2.val()) {
    var newPass = pass1.val()
  }
    else {
      $("#nomatch").css({display: "block"})
    }
  storeValue(user,newPass)
  pass1.val("")
  pass2.val("")
  newUser.val("")
})

//Sign In ----------------------------------------------------

var username = $("#username");

var password = $("#password");


//On button press --------------

$("#signbutton").click(function() {
  var realUser = username.val()
  var realPass = password.val()
  once(realUser, function(password) {
    if (password == realPass) {
      yournameworks = [""]
      yournameworks.push(realUser)
      console.log(session.name)
    }
      else {
        $("#wrong").css({display: "block"})
      }
  })
})

//Sign in session -------------------------------------------

var yournameworks = []

var session = {
  name: yournameworks,
}

