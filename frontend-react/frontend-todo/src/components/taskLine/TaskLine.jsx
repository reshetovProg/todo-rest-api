import React, { useState } from 'react'
import Task from "../../models/Task"
import "./TaskLine.css"
import axios from 'axios';


import { faPencil, faCheck, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelWindow from '../modelWindow/ModelWindow';

export default function TaskLine(props) {

	const [flagEdit, setFlagEdit] = useState(false)

	const changeFlagEdit = () => {
		setFlagEdit(!flagEdit);
	}

	let task = props.task;
	const done = {
		textDecoration: "line-through"
	}
	const inProcess = {
		textDecoration: "none"
	}

	const removeTask = async () => {
		await axios.delete(
			"http://localhost:8080/api/v0.1/task/" + task.id
		)
		props.loadTasks();
	}

	const changeStatus = async (e) => {

		e.preventDefault();
		task.status = !task.status;

		if (task.status) task.closeTask = null
		else task.closeTask = new Date().toJSON();
		await axios.put(
			"http://localhost:8080/api/v0.1/task", task
		)
		props.loadTasks();
	}

	const changeDesription = async (description) => {
		task.description = description

		await axios.put(
			"http://localhost:8080/api/v0.1/task", task
		)
		props.loadTasks();
	}

	return (
		<div>
			{
				flagEdit ?
					<div className="modelWindow">
						<ModelWindow
							description={task.description}
							changeDesription={changeDesription}
							changeFlagEdit={changeFlagEdit}
						/>
					</div> :
					null

			}


			<div className="taskLine">




				<div className="taskLine_el">{props.id}</div>
				<div className="taskLine_el description" style={task.status ? inProcess : done}>{task.description}</div>
				<div className="taskLine_el">{new Date(task.openTask).toLocaleString()}</div>
				<div className='taskLine_el'>
					{task.status ? "---------" : new Date(task.closeTask).toLocaleString()}
				</div>


				<FontAwesomeIcon className="taskLine_el_icon" icon={faPencil} onClick={changeFlagEdit} />
				<FontAwesomeIcon className="taskLine_el_icon" icon={task.status ? faCheck : faClose} onClick=
					{changeStatus} />
				<FontAwesomeIcon className="taskLine_el_icon" icon={faTrash} onClick={removeTask} />

			</div >



		</div>
	)
}
