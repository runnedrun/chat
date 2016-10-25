var input = $("#input")

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val()
    addListItem("saylist", message); 
  }
  
})