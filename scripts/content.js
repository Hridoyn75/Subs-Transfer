
  // Retrieve the array string from localStorage
  const GetFromLocalAsString = localStorage.getItem('PendingSubs');
  // Convert the array string back to an array
  let GotFromLocalStorage = JSON.parse(GetFromLocalAsString);

  if(!GotFromLocalStorage){
    GotFromLocalStorage = [];
  }

  const PaidUser = true;

  let SpeedLarge = 6000;
  let SpeedMid = 2500;
  let SpeedMini = 1500;
  if(PaidUser){
    SpeedLarge = 3000;
    SpeedMid = 500;
    SpeedMini = 10;
  }

function openLinks(linksArray) {
  let index = 0;
  let CopyofLocal = GotFromLocalStorage;
  function openNextLink() {
    if (index >= linksArray.length) {
      location.reload();
      return;
    }
    const link = linksArray[index];
    window.open(link);
    localStorage.setItem("ActiveEffectOnChannelPage", true);
    CopyofLocal = CopyofLocal.filter((_, i) => i !== 0);
    localStorage.setItem('PendingSubs', JSON.stringify(CopyofLocal));

    setTimeout(() => {
      document.querySelector("#remain-subs").textContent = CopyofLocal.length;
      index++;
      setTimeout(() => {
        openNextLink();
      }, SpeedMini); 
    }, SpeedLarge);
  }
  openNextLink();
}


if (window.location.href.includes("https://www.youtube.com/@") && localStorage.getItem("ActiveEffectOnChannelPage") === "true"){
  console.log("running code of Channel Page");
  setTimeout(() => {
    const SubsBtn = document.querySelector("#subscribe-button button");
    SubsBtn.click();
    window.close();
  }, SpeedMid);
  localStorage.setItem("ActiveEffectOnChannelPage", false);
}


if (window.location.href === "https://www.youtube.com/subs-transfer"){

console.log("running Code of Custom Subs-transfer Page on YouTube");
document.title = "Subs-Transfer";

  const BodyElement = document.querySelector("body");

  var HeadTag = document.querySelector('head');

  // create css code element

  const CSSElement = document.createElement("style")

  CSSElement.innerHTML = `
body{
  background-color: rgb(43, 55, 61);
}
.intro{
  text-align: center;
  color: white;
  margin: 20px auto;
  margin-top: 10px;
  padding: 10px 0;
  width: 500px;
  max-width: 90%;
}
.intro h1, .intro p{
  margin: 0;
}
.intro h1{
  color: yellow;
  font-size: 25px;
}
.logo {
  height: 30px;
  object-fit: contain;
}
  .transfer-system{
    text-align: center;
    background-color: rgba(58, 54, 54, 0.7);
    margin: 15px;
    color: white;
    padding: 10px;
    max-width: 700px;
    border-radius: 10px;
    border: 1px solid white;
}
.transfer-system textarea{
    height: 200px;
    max-height: 500px;
    min-height: 50px;
    width: 90%;
    border-radius: 10px;
    outline: none;
    padding: 25px;
    resize: vertical;
}
.transfer-system button  {
    padding: 10px 20px;
    background-color: rgb(20, 20, 58);
    border: 1px white solid;
    margin: 10px auto;
    color: white;
    border-radius: 10px;
    cursor: pointer;
}
.getbtn{
  text-decoration: none;
  background-color: yellow!important;
  color: black!important;
  border: 2px black solid!important;
}
.transfer-system h2 {
    margin: 10px;
    color: yellow;
}
.transfer-system p {
  padding: 10px 25px;
  color: rgb(0, 139, 219);

}
.transfer-system p span {
  color: yellow;
}
.box-row{
  display: flex;
  justify-content: center;
  align-items: center;
}
.float-div{
  background-color: rgb(0, 139, 219);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  text-align: center;
}
.import-number{
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.import-number input[type="number"]{
  width: 100px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  margin-right: 20px;
}
.import-number input[type="checkbox"]{
  transform: scale(2);
  border-radius: 10px;
  margin-right: 10px;
  outline: none;
}
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: yellow;
  color: rgb(20, 20, 58);
  text-align: center;
  padding: 5px;
  border: 2px solid black;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(50%);
  opacity: 0;
  transition: opacity 0.3s;
}
#ImportAllDiv:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
#version-box{
  background-color: transparent;
  padding: 15px 50px;
  color: white;
  position: fixed;
  right: 75px;
  top: 20px;
  border-radius: 10px;
  // border: 2px solid red;
  text-align: center;
}
#version-box p {
  font-size: 1.5rem;
  color: yellow;
}
#version-box button {
  padding: 10px 20px;
  border: 2px solid black;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: yellow;
}

@media only screen and (max-width: 700px) {
  .box-row {
    flex-direction: column;
  }
}

  `

  HeadTag.appendChild(CSSElement);



  BodyElement.innerHTML = `
     <div id="version-box">
      <p>${PaidUser ? "Paid Trial Version" : "Free Version"}</p>
       <button ${PaidUser && "style='display:none'"}>Get Premium</button>
     </div>
      <div class="intro">
        <h1> <span><img class="logo" src="https://i.postimg.cc/90ktyYmX/icon.png" alt="Logo"></span> Subs-Transfer</h1>
        <p>Re-connect with your previous Subscriptions</p>
      </div>
      <div class="box-row">
        <div class="transfer-system" style="min-width:50%; min-height: 500px; padding-top:50px;">
          <p id="demo-output">Remaining Subscriptions : <span id="remain-subs">${GotFromLocalStorage.length}</span></p>
          <div class="import-number">
           <input id="import-number-input" type="number"" placeholder="type" />
           <div id="ImportAllDiv">
            <input type="checkbox" id="import-all" name="import-all">
            <label id="importlabel" for="import-all">Import All</label>
            <span class="tooltip">
             <span class="tooltiptext">Premium Only</span>
            </span>
           </div>
          </div>
          <button id="run-script">Run Script</button>
          <p id="TakenTimeOutput" style="display:none"></p>
          <p id="InPaidTime" style="display:none"></p>
        </div>
        <div style="min-width:40%; ${!PaidUser && 'margin-top:50px'} " >
          <div class="transfer-system">
            <h2>Add Subscriptions List</h2>
            <textarea placeholder="Paste the List of Subscriptions" name="main-input" id="main-input"></textarea>
            <div>
            <button id="clear-data" style="background: red; color:black; border: none; margin-right:20px;">Clear</button>
            <button id="start-system">Save</button>
            </div>
          </div>
          <div class="transfer-system">
            <p style="color:red">Don't Have Subscription List?</p>
            <button id="get-list-btn" class="getbtn">Collect Subscription List</button>
          </div>
        </div>
      </div>
  `

  
  const ClearData = document.getElementById("clear-data");

  ClearData.addEventListener("click", () =>{
    localStorage.setItem("PendingSubs", "[]");
    document.getElementById("remain-subs").textContent = 0;
    alert("Your Database has been cleared successfully :)")
    
  })

  const ImportAllbtn = document.querySelector('#import-all');
  const ImportNumberInput = document.querySelector('#import-number-input');
  const TakenTimeOutput = document.querySelector('#TakenTimeOutput');
  const InPaidTime = document.querySelector('#InPaidTime');


// Add an event listener for the 'input' event
ImportNumberInput.addEventListener('input', function(event) {
  let TakenTimePaid = Math.floor(event.target.value * 3 + event.target.value * 0.010);
  let TakenTimeFree = Math.floor(event.target.value * 6 + event.target.value * 1.5);
  const TakenTimeInMinPaid = Math.floor(TakenTimePaid / 60);
  const TakenTimeInSecPaid = Math.floor(TakenTimePaid % 60);
  const TakenTimeInMinFree = Math.floor(TakenTimeFree / 60);
  const TakenTimeInSecFree = TakenTimeFree % 60;

  if(event.target.value > 1000){
    alert("maximum Limit is 1000")
    event.target.value = 1000;
    return
  }

  if(PaidUser){
    TakenTimeOutput.style.display = "block";
    TakenTimeOutput.style.color = "yellow";
    if (TakenTimePaid >= 60){
      TakenTimeOutput.textContent = "It will take only " + TakenTimeInMinPaid + " Minutes " + TakenTimeInSecPaid + " Seconds"
    }
    if(TakenTimePaid <= 60) {
      TakenTimeOutput.textContent = "It will take only "  + TakenTimePaid + " Seconds"
    }
  }else{
    if(event.target.value > 50){
      event.target.value = 50;
      alert("You Need Premium version of this extension to import more than 50 Subscriptions at a time.");
    }else{
      TakenTimeOutput.style.display = "block";
      TakenTimeOutput.style.color = "red";
      InPaidTime.style.display = "block";
      InPaidTime.style.color = "yellow";
      let TakenTimePaid = event.target.value * 3 + event.target.value * 0.010;
      if (TakenTimeFree >= 60){
        TakenTimeOutput.textContent = "Free: It will take " + TakenTimeInMinFree + " Minutes and " + TakenTimeInSecFree + " Seconds";
        InPaidTime.textContent = "Premium: It will take " + TakenTimeInMinPaid + " Minutes and " + TakenTimeInSecPaid + " Seconds";
      }else{
        TakenTimeOutput.textContent = "Free: It will take " + TakenTimeFree + " Seconds";
        InPaidTime.textContent = "Premium: It will take " + TakenTimePaid + " Seconds";
      }

    }
    

  }
});

  if(!PaidUser){
    ImportAllbtn.disabled = true;
    document.getElementById("importlabel").style.color = "#b8b8b9";
  }else{
    document.querySelector(".tooltip").style.display = "none";
  }

ImportAllbtn.addEventListener("click", function() {
  if (ImportAllbtn.checked) {
    ImportNumberInput.value = GotFromLocalStorage.length;
  }else {
    ImportNumberInput.value = 0;
  }
});

 document.getElementById("run-script").addEventListener("click", ()=>{
    
    if(!PaidUser && ImportNumberInput.value > 50){
      alert("You Need Premium version of this extension to import more than 50 Subscriptions at a time.");
      return
    }if(ImportNumberInput.value > GotFromLocalStorage.length){
      alert("Your given number is greater than your Remaining Subscriptions")
      return
    } if(ImportNumberInput.value <= 0) {
      alert("Sorry, Your given input is not valid :)")
      return
    } else{
      const slicedArray = GotFromLocalStorage.slice(0, parseInt(ImportNumberInput.value));
      openLinks(slicedArray);
    }

 })


 document.querySelector("#get-list-btn").addEventListener("click", () =>{
  localStorage.setItem("isGettingList", true);
  window.open("https://www.youtube.com/feed/channels", "_blank");
})



  const StartBTN = document.getElementById('start-system');

  function isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      return false;
    }
  }
  StartBTN.addEventListener('click', () =>{
    let MainInputString = document.getElementById("main-input").value;

    // Save the array string in localStorage
    if(MainInputString !== "") {
      if(!isJSON(MainInputString) || !isNaN(MainInputString)){
        alert("Your input format is not Valid");
        return
      }
      localStorage.setItem('PendingSubs', MainInputString);
      document.querySelector("#remain-subs").textContent = JSON.parse(MainInputString).length;
      alert("Data saved successfully");
      document.getElementById("main-input").value = null;
    } else {
      alert("No data found!")
    }

  })
}

if (window.location.href === "https://www.youtube.com/feed/channels" && localStorage.getItem("isGettingList") === "true"){
 
  localStorage.setItem("isGettingList", false);
  console.log("Running code of Channels Page");

    var BodyOfPage = document.querySelector("#end");

    // Create a new element
    var FloatedDiv = document.createElement('div');

    var HeadTag = document.querySelector('head');
    // create css code element
    const CSSElement = document.createElement("style")
  
    CSSElement.innerHTML = `
  .float-div{
    position: absolute;
    top: 25vh;
    left: 30%;
    background-color: rgb(0, 139, 219);
    padding: 30px;
    border-radius: 10px;
    border: 1px solid white;
    text-align: center;
  }
  .float-div h1{
    font-size: 3.5rem;
    margin-bottom: 15px;
  }
  .float-div button{
    padding: 10px 30px;
    background-color: yellow;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
  }
  .float-div p {
    font-size: 2rem;
    background-color: yellow;
    color: green;
    font-weight: bold;
    padding: 10px 30px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .float-div p span {
    color: black;
  }
  
    `
    HeadTag.appendChild(CSSElement);

    FloatedDiv.innerHTML = `
    <div class="float-div">
      <h1>Subs-Transfer</h1>
      <p> Total Subscription Found : <span id="number-of-subs"></span> </p>
      <button id="copy-btn">Copy All</button>
    </div>
    
    `
    BodyOfPage.appendChild(FloatedDiv);

    const GetSubscriptionsArray = () =>{
    
            // Create an empty array to store href values
            // Select all <a> tags with id "endpoint"
            var anchorElements = document.querySelectorAll('.channel-link');
            
            var hrefValues = [];
    
            // Iterate over each <a> tag and extract href value
            anchorElements.forEach(function (element) {
            hrefValues.push(element.getAttribute('href'));
            });
            // Output the href values
            const uniqueArray = [...new Set(hrefValues)];
            return (uniqueArray)
    }
    
    function copyToClipboard() {
    
            const array = GetSubscriptionsArray()
    
            // Convert the array to a string
            var arrayString = JSON.stringify(array);
    
            // Use the Clipboard API to copy the array to the clipboard
            navigator.clipboard.writeText(arrayString)
              .then(function() {
                alert('Your Subscriptions List have been copied to your clipboard successfully!');
                localStorage.setItem("isGettingList", false);
                window.close();
              })
              .catch(function(error) {
                console.error('Failed to copy array to clipboard: ', error);
              });


}
    
  document.querySelector("#copy-btn").addEventListener('click', copyToClipboard ) 
    

  var outputElement = document.querySelector('#number-of-subs');
    
  outputElement.textContent = GetSubscriptionsArray().length;
  setInterval(() => {
          window.scrollTo({
                  top: document.documentElement.scrollHeight,
                });
          outputElement.textContent = GetSubscriptionsArray().length;
  }, 500);
}





















