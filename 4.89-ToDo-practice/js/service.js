import { todoKeys, errTodoNotFound } from "./constants.js";

const logTodoNotFound = (todoId) => {
	console.error(errTodoNotFound(todoId));
};

const getNewTodoId = (todos) =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

export const createTodo = (todos, text) => {
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

export const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		logTodoNotFound(todoId);
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

export const updateTodoById = (todos, todoId, newText) => {
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

export const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		logTodoNotFound(todoId);
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
