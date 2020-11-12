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

  console.log(commonName + ' ' + sciName + ': ' + notes)
  recommendations.push({
    "commonName": commonName,
    "sciName": sciName,
    "notes": notes,
});
}

function hamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}