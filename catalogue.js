let plants = [
    {commonName: "Basil", sciName: "Ocimum basilicum", type: "Herb", light: "Full Light", water: "Moist", issues: "Overwatering, too little light"},
    {commonName: "Aloe Vera", sciName: "Aloe vera", type: "Succulent", light: "Medium-Full Light", water: "Dry between waterings", issues: "Root and base rot"},
    {commonName: "Flaming Katy", sciName: "Kalanchoe blossfeldiana", type: "Succulent", light: "Low-Medium Light", water: "Dry between waterings", issues: "Etiolation"},
    {commonName: "Mistletoe Cactus", sciName: "Stenocereus pruinosus", type: "Cactus", light: "Low-Medium Light", water: "Mostly dry between waterings", issues: "Overwatering, too much light"},
    {commonName: "Money Tree", sciName: "Pachira aquatica", type: "Tree", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Overwatering, too much light, prone to pests"},
    {commonName: "Rabbits Foot Fern", sciName: "Davallia trichomanoides", type: "Fern", light: "Medium Indirect Light", water: "Moist during Spring-Fall", issues: "Underwatering, too much/little light, prone to pests"},

]
for (i = 0; i < plants.length; i++) {
    addPlantToList(plants[i]); // need to loop through array of plants. If the plant common name matches the common name of the button, it displays.
    var plant = plants[i]
    console.log(plant)
}
function addPlantToList(plant) { // adds plant and info to button elements
    //should make button that targets only the info of that plant - not the whole array - find array method that seperates by index?
    var info = `<ul style="display:none" id="info-${plant.commonName}" >
                    <li>Scientific Name: ${plant.sciName}</li>
                    <li>Plant Type: ${plant.type}</li>
                    <li>Light Needs: ${plant.light}</li>
                    <li>Water Needs: ${plant.water}</li>
                    <li>Common Issues: ${plant.issues}</li>
                </ul>` // creates unordered list for each plant
    var listItem = `<button id="${plant.commonName}" onClick='togglePlant("${plant.commonName}")'> ${plant.commonName} </button>` // creates button for plant with id attaining to that plant
    
    document.getElementById('plantInfo').innerHTML += info;
    document.getElementById('plantList').innerHTML += listItem;
}
function togglePlant(plantName) { // needs to take id as parameter
    var componentID = `info-${plantName}`
    var component = document.getElementById(componentID)
    console.log(component)
    console.log(plantName)
    console.log(componentID)
    if ( component.style.display == 'none') {// && document.getElementById(`${plantInfo.firstChild} == ${plant}`)) {//toggle the ul with matching id 
        component.style.display ='block';
    } else {
        component.style.display = 'none';//instead of displaying plantInfo, I need to display the info of a specific plant
    }
}


