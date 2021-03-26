// Write your JavaScript code here!

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      let destination = document.getElementById("missionTarget");
      destination.innerHTML = `
         <h3>Mission Destination</h3>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol> 
         <img src="${json[0].image}">
         `;
      });   
   });

   let form = document.querySelector('form');
   let pilotName = document.querySelector("input[name = pilotName]");
   let copilotName = document.querySelector("input[name = copilotName]");
   let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
   let cargoMassInput = document.querySelector("input[name = cargoMass]");
   let faultyItems = document.getElementById("faultyItems");

   form.addEventListener("submit", function(event){

      event.preventDefault();

      if(pilotName.value === "" || copilotName.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("Please fill in all fields!");
      }else if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Please enter numbers for cargo mass and fuel level!");
      }else if(!(isNaN(pilotName.value)) || !(isNaN(copilotName.value))){
         alert("Please enter valid names for pilot and copilot!");
      }else{
         faultyItems.style.visibility = "visible"
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value} is ready for launch!`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} is ready for launch!`;

         if(fuelLevelInput.value < 10000){
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low to launch!";
         }else{
            document.getElementById("fuelStatus").innerHTML = "Fuel level acceptable to launch!";
         };

         if(cargoMassInput.value > 10000){
            document.getElementById("cargoStatus").innerHTML = "There is too much mass to launch!"; 
         }else{
            document.getElementById("cargoStatus").innerHTML = "Cargo mass acceptable to launch!"; 
         };

         if(fuelLevelInput.value < 10000 || cargoMassInput.value > 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";    
         }else{
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
            document.getElementById("launchStatus").style.color = "green";
         };
      };
   });
});