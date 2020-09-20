import { createStore } from 'redux';

export const actions = {
	ARCHIVE_TASK: 'ARCHIVE_TASK',
	PIN_TASK: 'PIN_TASK',
};

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

const taskStateReducer = taskState => (state, action) => {
	return {
		...state,
		task: state.tasks.map(task =>
			task.id === action.id ? { ...task, state: taskState } : task
		),
	};
};

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ARCHIVE_TASK:
			return taskStateReducer('TASK_ARCHIVED')(state, action);
		case actions.PIN_TASK:
			return taskStateReducer('TASK_PINNED')(state, action);
		default:
			return state;
	}
};

const defaultTasks = [
	{ id: '1', title: 'Something1', state: 'TASK_INBOX' },
	{ id: '2', title: 'Something2', state: 'TASK_INBOX' },
	{ id: '3', title: 'Something3', state: 'TASK_INBOX' },
	{ id: '4', title: 'Something4', state: 'TASK_INBOX' },
	{ id: '5', title: 'Something5', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
