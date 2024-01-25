import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="input_form">
				<Form.Control
					type="text"
					id="inputTask"
				/>
				<Button variant="dark">ADD TASK</Button>
			</div>

		</div>

	)
}
