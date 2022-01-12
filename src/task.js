import React from 'react';

export default ({task, markTaskDone}) => {
	return(
		< >
			{task.done ? (
				<span style={{taskDecoration: 'line-through'}}>
					{task.description}
				</span>
			) : task.description}
			<br />
			<div className="btn-group mr-2">
				{task.done ? null : (
					<button type="button" className="btn btn-success" onClick={() => markTaskDone(task.id)}>
						<svg className="bi bi-check" width="lem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path
								fileRule="evenodd"
								d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5-a.5.5 0 11.708-.708L6.5 10.29316.646-6.647a.5.5 0 01.708 0z"
								cliprule="evenodd"
							/>
						</svg>
					</button>
				)}
			</div>
		</>
	);
}