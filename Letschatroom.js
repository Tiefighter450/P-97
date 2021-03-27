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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      roomNames = childKey;
     //Start code
     console.log("Room name - " + roomNames);
     row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomname(this.id)' >#" + roomNames + "</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
username = localStorage.getItem("username");
document.getElementById("usernameOutput").innerHTML = "Welcome " + username + " to Me chat!";
function addRoom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "letschatpage.html";
}
function redirectToRoomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "letschatpage.html";
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html"
}