import React from 'react'
import Task from "../../models/Task"
import "./TaskLine.css"

import { faPencil, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskLine(props) {
	let task = props.task;
	const done = {
		textDecoration: "line-through"
	}
	const inProcess = {
		textDecoration: "none"
	}
	return (
		<div className="taskLine">
			<div className="taskLine_el">{task.id}</div>
			<div className="taskLine_el description" style={task.status ? done : inProcess}>{task.description}</div>
			<div className="taskLine_el">{task.openTask}</div>
			<div className="taskLine_el">{task.closeTask}</div>
			<FontAwesomeIcon className="taskLine_el_icon" icon={faPencil} />
			<FontAwesomeIcon className="taskLine_el_icon" icon={faCheck} />
			<FontAwesomeIcon className="taskLine_el_icon" icon={faTrash} />

		</div >


		// <div>TaskLine</div>
	)
}
