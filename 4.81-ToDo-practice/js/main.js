"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

const todoKeys = {
	id: `id`,
	text: `text`,
	is_completed: `is_completed`,
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const logTodoNotFound = (todoId) => {
	console.error(errTodoNotFound(todoId));
};

const getNewTodoId = (todos) =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
	const trimmedText = text.trim();

	if (!trimmedText) {
		return null;
	}

	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: trimmedText,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		logTodoNotFound(todoId);
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const updateTodoById = (todos, todoId, newText) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		logTodoNotFound(todoId);
		return null;
	}

	const trimmedText = newText.trim();
	if (!trimmedText) {
		return null;
	}

	todo[todoKeys.text] = trimmedText;
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		logTodoNotFound(todoId);
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

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

const handleCreateTodo = (todos, text) => {
	const newTodo = createTodo(todos, text);

	if (!newTodo) {
		return;
	}

	const todoElement = createTodoElement(newTodo);

	todosList.append(todoElement);
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	handleCreateTodo(todos, input.value);
	input.value = "";
});

todosList.addEventListener("click", (event) => {
	const task = event.target.closest(".todo");

	if (!task) {
		return;
	}

	const todoId = Number(task.id);

	if (event.target.matches(".button-complete")) {
		completeTodoById(todos, todoId);
		task.classList.toggle("completed");
	}

	if (event.target.matches(".button-delete")) {
		deleteTodoById(todos, todoId);
		task.remove();
	}
});

handleCreateTodo(todos, "Купить свежего хлеба в пекарне");
handleCreateTodo(todos, "Купить кошачку кормушку");
