console.log ("starting up API")
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
button.addEventListener("click", function() {
     localStorage.messages = textbox.value;   
    });
button.addEventListener("click", function(){    
          var newMessage = document.createElement("li");
          newMessage.innerHTML = textbox.value;    
     }     
);
