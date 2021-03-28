username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
var firebaseConfig = {
    apiKey: "AIzaSyBJgRbwCCBCvYivVksdQvRkCwKEoMCof7I",
    authDomain: "me-chat-ff80a.firebaseapp.com",
    databaseURL: "https://me-chat-ff80a-default-rtdb.firebaseio.com",
    projectId: "me-chat-ff80a",
    storageBucket: "me-chat-ff80a.appspot.com",
    messagingSenderId: "858101402528",
    appId: "1:858101402528:web:10a933a2906d74525cb2c5",
    measurementId: "G-9EL1LLHVQQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    roomNames = childKey;
    firebaseMessageId = childKey;
    messageData = childData;
   //Start code
      console.log(firebaseMessageId);
      console.log(messageData);
      name = messageData['name'];
      message = messageData['message'];
      like = messageData['like'];
      nameWithTag = "<h4> " + name + "<img class='userTick' src='tick.png'></h4>";
      messageWithTag = "<h4 class='messageH4'>" + message + "</h4>";
      likeButton = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
      spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
      row = nameWithTag + messageWithTag + likeButton + spanWithTag;
      document.getElementById("output").innerHTML += row;
   //End code
} });  }); }
getData();
function updateLike(messageId) {
    console.log("clicked on like button - " + messageId);
    buttonId = messageId;
    likes = document.getElementById(buttonId).value;
    updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);
    firebase.database().ref(roomname).child(messageId).update({
          like : updatedLikes
    })
}
function send() {
    messageText = document.getElementById("msg").value;
    if (messageText == "") {

    } else {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
    }
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html"
}
