import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const employeesUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';
const customersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';

function App() {
	const [employees, setEmployees] = useState([]);
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setEmployees([..._employees]);
		})();
		(async () => {
			const response = await axios.get(customersUrl);
			setCustomers([...response.data]);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Example of fetch and axios</h1>
			<h2>Employees</h2>
			<ul>
				{employees.map((item, i) => {
					return (
						<li key={i}>{item.firstName} {item.lastName}</li>
					)
				})}
			</ul>
			<h2>Customers</h2>
			<ul>
				{customers.map((item, i) => {
					return (
						<li key={i}>{item.contactName}</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;