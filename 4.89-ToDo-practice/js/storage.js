export const getTodosFromLocalStorage = () => {
	const saved = localStorage.getItem("todos");
	if (!saved) {
		return [];
	}
	return JSON.parse(saved);
};

export const setTodosToLocalStorage = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};
