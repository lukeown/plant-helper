var config = {
  apiKey: "AIzaSyBfUzdoYxk26tQj7MuQt9CU4Qj7TflOahA",
  authDomain: "planter-8ffdc.firebaseapp.com",
  databaseURL: "https://planter-8ffdc.firebaseio.com",
  storageBucket: "planter-8ffdc.appspot.com",
};

firebase.initializeApp(config);

var myFirebase = firebase.database().ref();
var recommendations = myFirebase.child("recommendations");
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