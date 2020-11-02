let plants = [
    {commonName: "Basil", sciName: "Ocimum basilicum", type: "Herb", light: "Full Light", water: "Moist", issues: "Overwatering, too little light"},
    {commonName: "Aloe Vera", sciName: "Aloe vera", type: "Succulent", light: "Medium-Full Light", water: "Dry between waterings", issues: "Root and base rot"},
    {commonName: "Flaming Katy", sciName: "Kalanchoe blossfeldiana", type: "Succulent", light: "Low-Medium Light", water: "Dry between waterings", issues: "Etiolation"},
    {commonName: "Mistletoe Cactus", sciName: "Stenocereus pruinosus", type: "Cactus", light: "Low-Medium Light", water: "Mostly dry between waterings", issues: "Overwatering, too much light"},
    {commonName: "Money Tree", sciName: "Pachira aquatica", type: "Tree", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Overwatering, too much light, prone to pests"},
    {commonName: "Rabbit's Foot Fern", sciName: "Davallia trichomanoides", type: "Fern", light: "Medium Indirect Light", water: "Moist during Spring-Fall", issues: "Underwatering, too much/little light, prone to pests"},

]


function addPlantToList(plant) { // adds plant and info to button elements
    var listItem = `<div id="${plant.commonName}"<button onclick='togglePlant()'> ${plant.commonName} </button>` // creates button for plant with id attaining to that plant
    //should make button that targets only the info of that plant - not the whole array - find array method that seperates by index?
    
    var info = `<ul id="${plant.commonName}">
                    <li>Scientific Name: ${plant.sciName}
                    <li>Plant Type: ${plant.type}
                    <li>Light Needs: ${plant.light}
                    <li>Water Needs: ${plant.water}
                    <li>Common Issues: ${plant.issues}
                </ul>` // creates unordered list for specific plant with list items inside that reference specific keys in the plants array
    document.getElementById('plantInfo').innerHTML += info;
    document.getElementById('plantList').innerHTML += listItem;
}


function togglePlant() { // toggles the plant info card
    var plantInfo = document.getElementById("plantInfo")//ul by id - UGH I WISH I COULD GET THIS TO WORK;
    if (plantInfo.style.display === "none") {
      plantInfo.style.display = "block";
    } else {
      plantInfo.style.display = "none";
    }
  }

for (i = 0; i < plants.length; i++) {
    addPlantToList(plants[i]);
}

// how the button generator works
// button generator will make buttons for every commonName in the plants array, with the id matching its commonName
// var listItem = `<div id="${commonName}"<button onclick='togglePlant()'>${plant.commonName} </button>`

// there will then be a for loop for the togglePlant function that will iterate through the array and only pull the card ...
// ... with a commonName that matches its id

//function togglePlant() {
  //  if (listItem == document.getElementById(plant.commonName).value); {
    //    plantInfo.style.display = "block";
      //  }  
    
//}

//make ul inside listItem that has info