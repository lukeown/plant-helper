let plants = [
    {commonName: "Basil", sciName: "Ocimum basilicum", type: "Herb", light: "Full Light", water: "Moist", issues: "Overwatering, too little light"},
    {commonName: "Aloe Vera", sciName: "Aloe vera", type: "Succulent", light: "Medium-Full Light", water: "Dry between waterings", issues: "Root and base rot"},
    {commonName: "Flaming Katy", sciName: "Kalanchoe blossfeldiana", type: "Succulent", light: "Low-Medium Light", water: "Dry between waterings", issues: "Etiolation"},
    {commonName: "Mistletoe Cactus", sciName: "Stenocereus pruinosus", type: "Cactus", light: "Low-Medium Light", water: "Mostly dry between waterings", issues: "Overwatering, too much light"},
    {commonName: "Money Tree", sciName: "Pachira aquatica", type: "Tree", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Overwatering, too much light, prone to pests"},
    {commonName: "Rabbits Foot Fern", sciName: "Davallia trichomanoides", type: "Fern", light: "Medium Indirect Light", water: "Moist during Spring-Fall", issues: "Underwatering, too much/little light, prone to pests"},
    {commonName: "Oregano", sciName: "Origanum vulgare", type: "Herb", light: "Full Light", water: "Dry between waterings", issues: "Overwatering, prone to pests, mint rust"},
    {commonName: "Dill", sciName: "Anethum graveolens", type: "Herb", light: "Full Light", water: "Dry between waterings", issues: "Disease, pests, bolting"},
    {commonName: "Parsley", sciName: "Petroselinum crispum", type: "Herb", light: "Medium-Full Light", water: "Mostly dry between waterings", issues: "Root rot, pests, disease"},
    {commonName: "Sage", sciName: "Salvia officinalis", type: "Herb", light: "Full Light", water: "Keep Moist", issues: "Disease, pests, rust"},
    {commonName: "Chives", sciName: "Allium schoenoprasum", type: "Herb", light: "Full Light", water: "Keep Moist", issues: "Bulb Rot, Pests, Disease"},
    {commonName: "Mint", sciName: "Mentha", type: "Herb", light: "Full Light", water: "Keep Moist", issues: "Spreading, Disease, pests"},
    {commonName: "Coriander", sciName: "Coriandrum sativum", type: "Herb", light: "Full Light", water: "Keep Moist", issues: "Pests, Mildew, "},
    {commonName: "Barrell Cactus", sciName: "Echinocactus grusonii", type: "Cactus", light: "Full light", water: "Infrequent, keep mostly dry", issues: "Root rot, occasional pests"},
    {commonName: "Heartleaf Philodendron", sciName: "Philodendron hederaceum", type: "House", light: "Low-Medium Indirect Light", water: "Dry between waterings", issues: "Overwatering, Underwatering, Root Rot"},
    {commonName: "Pink Princess", sciName: "Philodendron erubscens", type: "House", light: "Full Indirect Light", water: "Dry top between waterings", issues: "Too much light, overwatering, underwatering"},
    {commonName: "Rubber Plant", sciName: "Ficus elastica", type: "Tree", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Pests, Not enough light, underwatering, overwatering"},
    {commonName: "String of Hearts", sciName: "Ceropegia woodii", type: "Semi-succulent", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Root rot, overwatering"},
    {commonName: "String of Turtles", sciName: "Peperomia prostrata", type: "Succulent", light: "Medium-Full Indirect Light", water: "Dry top between waterings", issues: "Root rot, overwatering"},
    {commonName: "Spiral Cactus", sciName: "Cereus forbesii", type: "Cactus", light: "Full Light", water: "Dry between waterings", issues: "Occasional pests"},
    {commonName: "Pinstripe Plant", sciName: "Calathea ornata", type: "House", light: "Full Indirect Light", water: "Keep soil moist", issues: "Soil too dry, crispy leaves from bad water"},
    {commonName: "Hen and Chicks", sciName: "Sempervivum tectorum", type: "Succulent", light: "Medium-Full Light", water: "Dry between waterings", issues: "Root rot, etiolation, pests"},
    {commonName: "Bunny Ear Cactus", sciName: "Opuntia microdasys", type: "Cactus", light: "Full Light", water: "Dry top between waterings", issues: "Root rot, pests"},
    {commonName: "Split Leaf Philodendron", sciName: "Monstera deliciosa variegate", type: "House", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Crispy leaves, underwatering"},
    {commonName: "Swiss Cheese Plant", sciName: "Monstera Adansonii", type: "Tropical Vining Perinneal", light: "Medium-Full Indirect Light", water: "Dry between waterings", issues: "Crispy leaves, underwatering"},
    {commonName: "Zebra Plant", sciName: "Haworthia fasciata", type: "Succulent", light: "Medium Indirect Light", water: "Dry between waterings", issues: "Root rot, too much light"},
    {commonName: "Flapjacks", sciName: "Kalanchoe thyrsiflora", type: "Succulent", light: "Medium-Full Indirect Light", water: "Dry between waterings, water sparingly during winter", issues: "Root rot, pests"},
    {commonName: "Devils Backbone", sciName: "Euphorbia Tithymaloides", type: "Tropical/Succulent", light: "Partial-Full Shade", water: "Dry between waterings", issues: "Root rot"},

]
for (i = 0; i < plants.length; i++) {
    addPlantToList(plants[i]); // need to loop through array of plants. If the plant common name matches the common name of the button, it displays.
    var plant = plants[i]
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
    var listItem = `<button id="${plant.commonName}" class="plant-button" onClick='togglePlant("${plant.commonName}")'> ${plant.commonName} </button>` // creates button for plant with id attaining to that plant
    
    document.getElementById('plantInfo').innerHTML += info;
    document.getElementById('plantList').innerHTML += listItem;
}
function togglePlant(plantName) { // needs to take id as parameter
    var componentID = `info-${plantName}`
    var component = document.getElementById(componentID)
    if ( component.style.display == 'none') {// && document.getElementById(`${plantInfo.firstChild} == ${plant}`)) {//toggle the ul with matching id 
        component.style.display ='block';
    } else {
        component.style.display = 'none';//instead of displaying plantInfo, I need to display the info of a specific plant
    }
}


