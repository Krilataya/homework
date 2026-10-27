import { todoKeys } from "./constants.js";
import { setTodosToLocalStorage } from "./storage.js";
import {
	createTodo,
	completeTodoById,
	updateTodoById,
	deleteTodoById,
} from "./service.js";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

const createTodoElement = (todo) => {
	const li = document.createElement("li");
	li.classList.add("todo");
	li.id = todo[todoKeys.id];
	li.innerHTML = `<div class="todo-text"></div>
		<div class="todo-actions">
			<button class="button-complete button">&#10004;</button>
			<button class="button-delete button">&#10006;</button>
		</div>`;

	li.querySelector(".todo-text").textContent = todo[todoKeys.text];

	return li;
};

export const renderTodos = (todos, todoList) => {
	todosList.innerHTML = "";
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo);
		if (todo[todoKeys.is_completed]) {
			todoElement.classList.add("completed");
		}
		todosList.append(todoElement);
	});
};

const handleCreateTodo = (todos, text) => {
	const newTodo = createTodo(todos, text);

	if (!newTodo) {
		return;
	}

	const todoElement = createTodoElement(newTodo);

	setTodosToLocalStorage(todos);

	todosList.append(todoElement);
};

export const initTodoHandlers = (todos) => {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		handleCreateTodo(todos, input.value);
		input.value = "";
	});

	todosList.addEventListener("click", (event) => {
		const task = event.target.closest(".todo");

		// button =  target.closest(".button"); доделать

		if (!task) {
			return;
		}

		const todoId = Number(task.id);

		if (event.target.matches(".button-complete")) {
			completeTodoById(todos, todoId);
			setTodosToLocalStorage(todos);
			task.classList.toggle("completed");
		}

		if (event.target.matches(".button-delete")) {
			deleteTodoById(todos, todoId);
			setTodosToLocalStorage(todos);
			task.remove();
		}
	});
};
