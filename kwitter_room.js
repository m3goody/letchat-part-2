var firebaseConfig = {
      apiKey: "AIzaSyC7PiP9t0HTr7nf6imb185Wc9-fbTgECao",
      authDomain: "practice-c94-16dc2.firebaseapp.com",
      databaseURL: "https://practice-c94-16dc2-default-rtdb.firebaseio.com",
      projectId: "practice-c94-16dc2",
      storageBucket: "practice-c94-16dc2.appspot.com",
      messagingSenderId: "944696367400",
      appId: "1:944696367400:web:7c4edd6158a71010ca981d"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
