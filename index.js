function addingEventListener() {
    const input = document.getElementById("input");
input.addEventListener("click", clickMe);

function clickMe(){
    alert("I was clicked!");
}
}

addingEventListener();