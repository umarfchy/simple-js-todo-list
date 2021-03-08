const addTaskBtn = document.getElementById("addTaskBtn");
const inputField = document.getElementById("inputField");
let listOfTasks = document.getElementById("listOfTasks");
// reset input field
document
  .getElementById("resetInputField")
  .addEventListener("click", () => (inputField.value = ""));

//   reset task list
document.getElementById("resetList").addEventListener("click", () => {
  document.getElementById("listOfTasks").innerHTML = "";
});
addTaskBtn.addEventListener("click", () => {
  // make a list item
  const li = `<li>${inputField.value}</li>`;

  // add items on the list
  listOfTasks.innerHTML = listOfTasks.innerHTML + li;
});

// Execute a function when the user releases a key on the keyboard
inputField.addEventListener("keyup", (event) => {
  // trigger search on clicking enter
  if (event.key === "Enter") {
    // Trigger the button element with a click
    addTaskBtn.click();
  }
});

// const items = document.getElementsByTagName("li");
// for (let i = 0; i < items.length; i++) {
//   const item = items[i];
//   item.addEventListener("click", (e) =>
//     e.target.parentNode.removeChild(e.target)
//   );
// }

listOfTasks.addEventListener("click", (e) => {
  e.target.parentNode.removeChild(e.target);
});
