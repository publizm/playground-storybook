import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
	return (
		<div className={`list-item ${state}`}>
			<label className="checkbox">
				<input
					name="checked"
					type="checkbox"
					defaultChecked={state === 'TASK_ARCHIVED'}
					disabled
				/>
				<span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
			</label>
			<div className="title">
				<input type="text" value={title} readOnly />
			</div>
			<div className="actions" onClick={e => e.stopPropagation()}>
				{state !== 'TASK_ARCHIVED' && (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a onClick={() => onPinTask(id)}>
						<span className="icon-star" />
					</a>
				)}
			</div>
		</div>
	);
};

Task.propTypes = {
	task: PropTypes.shape({
		/** id는 문자열이며, 필수값입니다. */
		id: PropTypes.string.isRequired,
		/** title는 문자열이며, 필수값입니다. */
		title: PropTypes.string.isRequired,
		/** state는 문자열이며, 필수값입니다. */
		state: PropTypes.string.isRequired,
	}),
	/** 현재의 상태를 변경하는 함수입니다. */
	onArchiveTask: PropTypes.func,
	/** pin 상태를 변경하는 함수입니다. */
	onPinTask: PropTypes.func,
};

export default Task;
