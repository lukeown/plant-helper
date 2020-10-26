
var firebaseConfig = {
  apiKey: "AIzaSyBfUzdoYxk26tQj7MuQt9CU4Qj7TflOahA",
  authDomain: "https://planter-8ffdc.firebaseapp.com",
  databaseURL: "https://planter-8ffdc.firebaseio.com",
  projectId: "planter-8ffdc",
  storageBucket: "https://planter-8ffdc.appspot.com",
  messagingSenderId: "296044948144",
  appId: "1:296044948144:web:cd95ad326ec47ceda46975",
  measurementId: "G-Q0CCEDY6NM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const planterFirebase = firebase.database().ref();
var recommendations = planterFirebase.child("recommendations");
var commonName = []

function addPlant() {
  var commonName = document.getElementById("commonName").value
  var sciName = document.getElementById("sciName").value

  console.log(commonName + ' ' + sciName)
  recommendations.push({
    "commonName": commonName,
    "sciName": sciName,
});
}
