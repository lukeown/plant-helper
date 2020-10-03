//function submitEvent(event) {
    //event.preventDefault()

    //const name = document.getElementById('name').value
    //const phone = document.getElementsById('phone').value
    //output.innerText = `Name = ${name} Phone = ${phone}`
//}

//const output = document.getElementById('output')
//const form = document.getElementById('myForm')
//form.addEventListener('submit', submitEvent)

//function submitEvent(event) {
  //  event.preventDefault()

    //const shortName = document.getElementById('shortName').value
    //const sciName = document.getElementById('sciName').value
//}
//const form = document.getElementById('myForm')
//form.addEventListener('sub-button', submitEvent)


var shortName = []
var plants = []




    
    
    //document.getElementById("myForm").submit();
    //console.log( "Requested Plants: " + shortName + sciName ) ;
    //plants =+ (shortName, sciName)

 //
 function addPlant() { 
    plants.push(document.getElementById("shortName").value);
    plants.push(document.getElementById("sciName").value);
    console.log(plants); //to confirm it has been added to the array 
 }

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyBfUzdoYxk26tQj7MuQt9CU4Qj7TflOahA",
    authDomain: "planter-8ffdc.firebaseapp.com",
    databaseURL: "https://planter-8ffdc.firebaseio.com/",
    storageBucket: "planter-8ffdc.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();