document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("task-input");
  const add = document.getElementById("addTodoBtn");
  const emptymsg = document.getElementById("empty-state");
  const todolist = document.getElementById("todoList");
  const storageKey = "Todo List";

  // Get todos from local storage
  const getTodosFromLocal = () => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  };

  let todos = getTodosFromLocal();

  // Save todos back to local storage
  const saveTodos = () => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  };

  // Update empty state message visibility
  const updateEmptyState = () => {
    emptymsg.style.display = todos.length !== 0 ? "none" : "block";
  };

  // Render all todos to the UI
  const renderTodos = () => {
    todolist.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${todo}</span>
               <button onclick="deleteTodo(${index})">
                 <img src="./asset/delete.svg" alt="Delete button" />
               </button>`;
      todolist.append(li);
    });
    updateEmptyState();
  };

  // Expose deleteTodo globally to be callable from the button inline
  window.deleteTodo = (index) => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  };

  // Add a new task, checking case-insensitive uniqueness
  const addTask = () => {
    let task = input.value.trim();
    if (task) {
      let taskLower = task.toLowerCase();
      if (!todos.some((todo) => todo.toLowerCase() === taskLower)) {
        todos.push(task);
        saveTodos();
        input.value = "";
        renderTodos();
      } else {
        input.value = "";
      }
    }
  };

  add.addEventListener("click", addTask);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  renderTodos();
});