const form = document.getElementById("toDoForm");
const input = document.getElementById("toDoInput");
const list = document.getElementById("toDoList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    addTask(taskText);
    input.value = "";
    input.focus();
});

function addTask(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const deleteBn = document.createElement("button");
    deleteBn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(deleteBn);
    list.appendChild(li);
}

list.addEventListener("click", (event) => {
    const clickElement = event.target;
    if (clickElement.tagName === "SPAN") {
        clickElement.classList.toggle("done");
    }

    if (clickElement.tagName === "BUTTON") {
        clickElement.parentElement.remove();
    }
});