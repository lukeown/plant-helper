var firebaseConfig = {
  apiKey: "AIzaSyBfUzdoYxk26tQj7MuQt9CU4Qj7TflOahA",
  authDomain: "planter-8ffdc.firebaseapp.com",
  databaseURL: "https://planter-8ffdc.firebaseio.com",
  projectId: "planter-8ffdc",
  storageBucket: "planter-8ffdc.appspot.com",
  messagingSenderId: "296044948144",
  appId: "1:296044948144:web:cd95ad326ec47ceda46975",
  measurementId: "G-Q0CCEDY6NM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database();

const planterFirebase = firebase.database().ref();
var recommendations = planterFirebase.child("recommendations");
var commonName = []

function addPlant() {
  var commonName = document.getElementById("commonName").value
  var sciName = document.getElementById("sciName").value
  var notes = document.getElementById("notes").value
  var email = document.getElementById("email").value

  console.log(commonName + ' ' + sciName + ': ' + notes)
  recommendations.push({
    "commonName": commonName,
    "sciName": sciName,
    "notes": notes,
    "email": email
  
});
}

var mq = window.matchMedia( "(orientation: portrait)")

function openNav() {
  if ( mq.matches ) {
    document.getElementById("mySidebar").style.height = "24vw";
    document.getElementById("main").style.marginTop = "22vw";
    document.getElementById("mySidebar").style.width = "100%";

  } else {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").style.height = "100%";
  }
}

function closeNav() {
  if ( mq.matches ) {
    document.getElementById("main").style.marginTop = "0";
    document.getElementById("mySidebar").style.height = "0";

  } else {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  }
}

