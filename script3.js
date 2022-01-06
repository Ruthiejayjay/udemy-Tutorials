// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("CLICK!!!");
// })


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLenght() {
   return input.value.length;
}

function createListItem() {
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";
}

function addListAfterClick(){

      if (inputLenght() > 0) {
         createListItem();
      }
}

/**
 * 
 * @param {KeyboardEvent} event 
 */
function addListAfterKeypress(event){
   if (inputLenght() > 0 && event.keycode === 13) {
      createListItem();
   }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)