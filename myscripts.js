//Show elements when the Generate button is clickec
function generateElements()
{
  var elementlist = document.getElementsByClassName("element");
  var bttn = document.getElementsByClassName("generate_bttn");
  const facts = [];
  var j;

  for (j = 0; j < elementlist.length; j++) {
    
    if (Math.round(Math.random()) == 0) {
      facts.push(elementlist[j]);
    } else {
      facts.unshift(elementlist[j]);
    }
    document.getElementById("myOL").appendChild(facts[j]);
  }

  for (let index = 0; index < elementlist.length; index++) {
    elementlist[index].style.visibility = "visible";
    
  }
}

function randomizeElements() {
  var bttn = document.getElementsByClassName("addBtn");
  const facts = [];
  bttn.onclick = function() {
    let element = newElement();

    if (Math.round(Math.random()) == 0) {
      facts.push(element);
    } else {
      facts.unshift(element);
    }
    console.log(facts);
  } 
  
  return facts
}

var bttn = document.getElementsByClassName("generate_bttn");
bttn.onclick = function() {console.log("hello")};


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myOL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  li.style.visibility = "hidden";
  li.className = "element"
  return inputValue;  
} 