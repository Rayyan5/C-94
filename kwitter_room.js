

  const firebaseConfig = {
    apiKey: "AIzaSyC1BGS3txRhRXvSGoJgW--0EkxPDJh2nGc",
    authDomain: "kwitter95-452a0.firebaseapp.com",
    databaseURL: "https://kwitter95-452a0-default-rtdb.firebaseio.com",
    projectId: "kwitter95-452a0",
    storageBucket: "kwitter95-452a0.appspot.com",
    messagingSenderId: "268959194424",
    appId: "1:268959194424:web:2be451f0c4e91a8f3075cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);











  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
