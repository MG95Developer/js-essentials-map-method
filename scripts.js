/*
	IMPORTANT NOTE: 
	JS provides us with some IN-BUILT higher order functions 
	like map(), filter() methods...
*/

const employes = [
	{
		name: 'Peter',
		department: 'sales',
		age: 28,
	},
	{
		name: 'Mike',
		department: 'warehouse',
		age: 58,
	},
	{
		name: 'Kim',
		department: 'admin',
		age: 38,
	},
	{
		name: 'Juliana',
		department: 'admin',
		age: 66,
	},
	{
		name: 'Alex',
		department: 'web designer',
		age: 36,
	},
	{
		name: 'Carol',
		department: 'general manager',
		age: 46,
	},
	{
		name: 'Adriano',
		department: 'warehouse manager',
		age: 67,
	},
	{
		name: 'Jessica',
		department: 'cleaning staff',
		age: 65,
	},
	{
		name: 'Peter',
		department: 'e-commerce',
		age: 25,
	},
	{
		name: 'Camila',
		department: 'sales',
		age: 55,
	},
];

let staffList = employes.map((staff) => {
	return `
	<div>
		<p>${staff.name} is ${staff.age}, and it 's department is ${staff.department}.</p>
	</div>
	`;
});

let main = document.createElement('main');
main.innerHTML = staffList.join(''); // .join('') removes the comma
document.getElementById('staff').appendChild(main);
