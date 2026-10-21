"use strict";

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

createTodo(todos, "Купить сухой корм для кота");
createTodo(todos, "Сделать поделку на тему осени");
createTodo(todos, "Тренировка у телека");

console.log(todos);

completeTodoById(todos, 2);
updateTodoById(todos, 1, "Мокрый корм кошачку");
updateTodoById(todos, 3, "   ");
deleteTodoById(todos, 999);

console.log(todos);
