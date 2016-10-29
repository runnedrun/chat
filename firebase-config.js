var firebaseConfig = {
  apiKey: "AIzaSyBPS8LUaOKzSRdfnjwpoJtq0xmoVASioQ0",
  authDomain: "chat-4e85b.firebaseapp.com",
  databaseURL: "https://chat-4e85b.firebaseio.com/"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-2")


function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    callback(data.val());
  })
}

function once(name, callback) {	
  store.child("vars").child(name).once("value", function(data) {		
    callback(data.val());
  })
}

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}