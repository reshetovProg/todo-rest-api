import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header';
import TaskLine from '../components/taskLine/TaskLine';
import Task from "../models/Task"
import axios from 'axios';
import ModelWindow from '../components/modelWindow/ModelWindow';

export default function Home() {

	const [tasks, setTask] = useState([])

	useEffect(() => {
		loadTasks();
	}, [])


	const loadTasks = async () => {
		const result = await axios.get(
			"http://localhost:8080/api/v0.1/tasks"
		);
		setTask(result.data);
	}



	return (
		<div className="container">
			<Header loadTasks={loadTasks} />
			{
				tasks.map((task, id) => (
					<TaskLine
						id={id + 1}
						task={task}
						loadTasks={loadTasks}
					/>
				))
			}





		</div>
	)
}
