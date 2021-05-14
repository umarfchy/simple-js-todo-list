const addTaskBtn = document.getElementById("addTaskBtn");
const inputField = document.getElementById("inputField");
let listOfTasks = document.getElementById("listOfTasks");

//   reset task list
document.getElementById("resetList").addEventListener("click", () => {
  document.getElementById("listOfTasks").innerHTML = "";
});

//add items in list
addTaskBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Cant leave input field empty!!!");
  } else {
    // make a list item
    const li = `<li><div class="text-center"><p>${inputField.value}</p></div>
    <button onclick=${"randomF(event)"} class="btn btn-primary"><i class="fas fa-trash"></i></button>
    </li>`;
    // add items on the list
    listOfTasks.innerHTML = listOfTasks.innerHTML + li;
    inputField.value = "";
  }
});

// Execute a function when the user releases a key on the keyboard
inputField.addEventListener("keyup", event => {
  // trigger search on clicking enter
  if (event.key === "Enter") {
    // Trigger the button element with a click
    addTaskBtn.click();
  }
});

const randomF = e => {
  e.target.parentNode.remove();
};
