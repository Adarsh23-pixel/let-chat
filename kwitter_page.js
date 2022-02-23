//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAs_l53cNLO8R0nzDUlDqCSGNCIOmBiP80",
      authDomain: "kwitter-28a43.firebaseapp.com",
      databaseURL: "https://kwitter-28a43-default-rtdb.firebaseio.com",
      projectId: "kwitter-28a43",
      storageBucket: "kwitter-28a43.appspot.com",
      messagingSenderId: "23835514181",
      appId: "1:23835514181:web:8d67f6e179f147b6e89a2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() { 
          msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push
           ({ name:user_name,
             message:msg,
              like:0 
            
            }); 
            document.getElementById("msg").value = ""; }

