import { useState, useEffect } from 'react';

import './App.scss';

function App() {
	const [employees, setEmployees] = useState([]);
	// const [customers, setCustomers] = useState([]);

	useEffect(() => {
		(async () => {
			const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';
			const response = await fetch(url);
			const _employees = await response.json();
			setEmployees([..._employees]);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Example of fetch and axios</h1>
			<h2>Employees</h2>
			<ul>
				{employees.map((emp, i) => {
					return (
						<li key={i}>{emp.firstName} {emp.lastName}</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;