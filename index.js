let toDoList = "";

const addToDo = () => {
  let userInput = document.getElementById('userInput').value;
  toDoList += `<h3>${userInput}</h3>`;
  document.getElementById('itemList').innerHTML = toDoList;
  //clear input field after submission
  document.getElementById('userInput').value = "";
}










/* ISSUES/TASKS
--keep items painted on screen for next item submission DONE
--checkbox to marked when item is completed (line through completed item)
--when user clicks enter, item gets added to list
--save items in local storage?
--add a service worker
--add list themes
*/