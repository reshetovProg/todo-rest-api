import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Header.css";
import axios from 'axios';
import Task from '../../models/Task';
// import { useNavigate } from 'react-router-dom';




export default function Header(props) {

	const [task, setTask] = useState(new Task)



	const addTask = async (e) => {
		e.preventDefault();
		task.openTask = new Date().toJSON();
		console.log(new Date().toJSON());
		await axios.post(
			"http://localhost:8080/api/v0.1/task", task
		)
		props.loadTasks();


	}

	const onInputChange = (e) => {

		setTask({
			...task.description,
			description: e.target.value
		})
	}



	return (
		<div className="header">
			<div className="input_form">
				<form onSubmit={(e) => addTask(e)}>
					<Form.Control
						type="text"
						name="inputTask"
						value={task.description}
						onChange={(e) => onInputChange(e)}
					/>
					<Button type="submit" variant="dark">ADD TASK</Button>
				</form>

			</div>

		</div>

	)
}
