// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useNavigate } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
	const navigate = useNavigate()
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
});
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/update-student/" +
		window.location.pathname.split('/')[2],
		studentObject
	)
	.then((res) => {
		alert("Student successfully updated");
		navigate('/student-list')
	})
	.catch((err) => console.log(err));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/students/update-student/"
		+ window.location.pathname.split('/')[2]
	)
	.then((res) => {
		const { name, email, rollno } = res.data;
		setFormValues({ name, email, rollno });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
