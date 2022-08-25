function webAlert() {
    alert("This is a website");
}

function webConfirm() {
    var x;
    if (confirm("Do you want to exit?") == true) {
    x = "Welcome back!";
    } else {
    x = "Bye!";
}
document.getElementById("exit").innerHTML = x;
}

function webPrompt() {
	var y = prompt("How many times have you visited this site?");
	document.write("Your count: " + y);
}


       
       
