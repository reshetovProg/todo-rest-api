import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ModelWindow.css"

export default function ModelWindow(props) {

	const [description, setDescription] = useState(props.description)

	const onInputChange = (e) => {
		setDescription(e.target.value)
	}

	return (
		<div className="modelWindow">
			<div className="modelForm">
				<Form.Label className="label">Change Task</Form.Label>
				<Form.Control
					type="text"
					id="inputPassword5"
					aria-describedby="passwordHelpBlock"
					onChange={(e) => onInputChange(e)}
					value={description}
					placeholder={props.description}
				/>
				<Button type="submit" variant="dark" onClick={
					() => {
						props.changeDesription(description);
						props.changeFlagEdit();
					}}>ADD TASK</Button>
			</div>

		</div>
	)
}
