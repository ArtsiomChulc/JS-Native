// //примитивы
// //number, string, null, undefined, NaN, Symbol, Bigint

// //объекты
// //object, array => данные
// //function

// //-более сложная структура
// //=имеют свойства и методы
// //-ссылочный тип данных

// const user1 = { //user1 - ссылка на ячейку в оперативной памяти памяти
// 	name: 'Bob',
// 	age: 24,
// 	isStudent: false
// }; //литерал объекта


// // const user2 = user1; // две ссылки на один и тот же объект

// // user2.name = 'Alex';
// // console.log(user1.name);

// // const user2Copy = {
// // 	name: user1.name,
// // 	age: user1.age,
// // 	isStudent: user1.isStudent
// // }; //литерал объекта

// // console.log(user1 === user2Copy); //false

// const user1Copy = { ...user1 };//spread - оператор

// user1Copy.name = 'Alex';
// console.log(user1);
// console.log(user1Copy);

// const users = [
// 	{
// 		id: 1,
// 		name: "Bob",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}

// 	},
// 	{
// 		id: 2,
// 		name: "Alex",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}
// 	},
// 	{
// 		id: 3,
// 		name: "Ann",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}
// 	},
// 	{
// 		id: 4,
// 		name: "Donald",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}
// 	},
// ];

// const users2 = [
// 	{
// 		id: 1,
// 		name: "Bob",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}

// 	},
// 	{
// 		id: 2,
// 		name: "Alex",
// 		isStudent: true,
// 		address: {
// 			country: "Sudan",
// 			city: "Hartum",
// 		}
// 	}
// ];



// //! имутабельная работа с данными - нужна реакту для перерисовки
// //! делаем копию . вносим изменения . используем копию с изменеиями

// const userCopy = [...users];
// //console.log(userCopy === users);
// userCopy.pop();
// console.log(users);
// console.log(userCopy);
// // Create Read Update Delete ===C(R)UD

// const newUser = {
// 	id: 5,
// 	name: 'John',
// 	isStudent: true
// };

// const addUsers = [...users, newUser];//добавляем нового юзера в массив

// console.log(addUsers);

// const concatUsers = [...users, ...users2]; //добавляем два массива в новую переменную
// console.log(concatUsers);

// const upD1Users = addUsers.map(user => {
// 	if (user.name === 'John') {
// 		return { ...user, isStudent: false }; //меняем isStudent: false
// 	} else {
// 		return user;
// 	}
// });

// console.log(upD1Users);

// const upd2Users = upD1Users.map(user => ({ ...user, isMarried: true })); // добавляем isMarried: true
// console.log(upd2Users);

// const delUser = upd2Users.filter(user => user.id !== 5);//удаляем юзера с id = 5
// console.log(delUser);

// let students = [
// 	{
// 		name: "Bob",
// 		age: 22,
// 		isMarried: true,
// 		scores: 85,
// 	},
// 	{
// 		name: "Alex",
// 		age: 21,
// 		isMarried: true,
// 		scores: 89
// 	},
// 	{
// 		name: "Nick",
// 		age: 20,
// 		isMarried: false,
// 		scores: 120
// 	},
// 	{
// 		name: "John",
// 		age: 19,
// 		isMarried: false,
// 		scores: 100
// 	}
// ];

// C => [...st, newSt]
// R => map (obj => JSX element)
// U => map (conditional mapping: obj => updObj)
// D => filter


// const getName = st => st.name;

// const getNames = (array) => {
// 	const result = [];
// 	const getName = st => st.name;
// 	for (let i = 0; i < array.length; i++) {
// 		const newValue = getName(array[i]);
// 		result[i] = newValue;
// 	}
// 	return result;
// };

// const getScores = (array) => {
// 	const result = [];
// 	const getStudentsScores = st => st.scores;
// 	for (let i = 0; i < array.length; i++) {
// 		const newValue = getStudentsScores(array[i]);
// 		result[i] = newValue;

// 	}

// 	return result;
// };

// const sMap = (array, func) => {
// 	const result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		const newValue = func(array[i]);
// 		result[i] = newValue;
// 	}
// };

// console.log(students.map(getName));
// console.log(sMap(students, getName));

// const sFilter = (array, func) => {
// 	const result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (func(array[i]) === true) {
// 			result.push(array[i]);
// 		}
// 	}
// 	return result;
// };

// console.log(sFilter(students, st => st.scores >= 100));

// const sPop = (array) => {
// 	const element = array.pop();
// 	return element;
// };

// console.log(sPop(students));


// const arr = [1, 2, 3, 4];

// const sFind = (array, f) => {
// 	for (let i = 0; i < array.length; i++) {
// 		if (f(array[i])) {
// 			return array[i]; 						//! посмотреть еще раз видос!!!!
// 		}
// 	}
// };

// console.log(sFind(arr, (el) => el === 4));

// const sm = document.getElementById('small');
// const md = document.getElementById('medium');
// const big = document.getElementById('big');
// const handler1 = () => {
// 	alert('click');
// };
// const handler2 = () => {
// 	alert('yo');
// };
// sm.onclick = handler1;    //! устаревший метод

// sm.addEventListener('click', handler1);
// sm.addEventListener('click', handler2);                     //!можно добавлять несколько обработчиков
// sm.addEventListener('click', () => alert('Hey!!')); //!не можем отменить обработчик(нужно называть функцию)

// sm.removeEventListener('click', handler1);

// const handler4 = (e) => alert('yo!!!');
// sm.addEventListener('click', handler1);
// md.addEventListener('click', handler2);
// big.addEventListener('click', handler4);

// sm.addEventListener('click', (e) => {
// 	e.stopPropagation();    //! останавливает всплытие
// 	alert('click');
// });

// sm.addEventListener('click', (e) => {
// 	e.stopPropagation();
// 	if (e.target.tagName === "BUTTON") {
// 		alert(e.target.id);
// 	}
// });

// const link = document.getElementById('a');
// link.addEventListener('click', (e) => {
// 	e.preventDefault();
// });



//! == // ============//==============//========= 4 lesson =============//=============


// const td_1 = 'qw-34';
// const td_2 = 'uy-34';


// const todoLists = [
// 	{
// 		id: td_1,
// 		title: 'Title',
// 		filter: 'all',
// 	},
// 	{
// 		id: td_2,
// 		title: 'Title2',
// 		filter: 'all',
// 	},
// ];

// //! ассоциативный массив - абстрактный тип данных

// const tasks = {
// 	[td_1]: [ // key 'qw-34'
// 		{ id: 1, title: "HTML", isDone: false },
// 		{ id: 2, title: "CSS", isDone: false },
// 		{ id: 3, title: "JS/TS", isDone: false },
// 	],
// 	[td_2]: [ // key 'uy-34'
// 		{ id: 4, title: "Bread", isDone: false },
// 		{ id: 5, title: "Milk", isDone: false },
// 		{ id: 6, title: "Chicken", isDone: false },
// 	]
// };

// const obj = {
// 	name: 'Bob' // key 'name'
// };

// console.log(tasks[td_1]);
// console.log(tasks[td_2].filter(t => t.id !== 2));
// console.log([...tasks[td_1], { id: 10, title: 'New Task', isDone: false }]);

// const addTodoList = (title) => {
// 	const td_id = "wh-21";
// 	const newToDo = {
// 		td: td_id,
// 		title: title,
// 		filter: 'all',
// 	};
// 	const updateTodoList = [...todoLists, newToDo];
// 	console.log(updateTodoList);
// 	const copyTasks = {
// 		[td_id]: [
// 			{ id: 7, title: "Nood", isDone: false }
// 		],
// 		...tasks,
// 	};
// 	console.log(copyTasks);
// };

// addTodoList('New todolist');

// //! метод мвссива reduce

// const nums = [2, 4, 5, 3];
// const result = nums.reduce((acc, el) => {
// 	return acc + el;
// }, 0);

// //0, 2-> 2
// //2, 4 => 6
// //6, 5 => 11
// //11, 3 => 14
// // => 14

// console.log(result);

// const max = nums.reduce((acc, el) => {
// 	if (acc >= el) {
// 		return acc;
// 	} else {
// 		return el;
// 	}
// });

// //2, 4 => 4
// //4, 5 => 5
// //5, 3 => 5
// // => 5

// console.log(max);

// let students = [
// 	{
// 		id: 1,
// 		name: "Bob",
// 		age: 22,
// 		isMarried: true,
// 		scores: 85
// 	},
// 	{
// 		id: 2,
// 		name: "Alex",
// 		age: 21,
// 		isMarried: true,
// 		scores: 89
// 	},
// 	{
// 		id: 3,
// 		name: "Nick",
// 		age: 20,
// 		isMarried: false,
// 		scores: 120
// 	},
// 	{
// 		id: 4,
// 		name: "John",
// 		age: 26,
// 		isMarried: false,
// 		scores: 100
// 	}
// ];

// const mapNames = students.map(el => el.name);

// const reduceNames = students.reduce((newArr, el) => {
// 	newArr.push(el.name);
// 	return newArr;
// }, []);

// console.log(mapNames);
// console.log(reduceNames);


//! ===========//=========//========//======lesson 5======//======//=====//===========//============

//!метод sort

const names = ["Donald", "Alex", "Bob"];

console.log(names.sort()); // сщртирует строки из коробки, т.е. без доп.параметров

const names_2 = ["Donald", "alex", "AlEx", "Игорь", "Юрий"];
console.log(names_2.sort()); //строки сортируются ТИПО по алфавиту (unicode)

console.log(names); //работает мутабельно (сортирует массив на месте)

console.log(names.sort() === names); //возвращает ссылку на исходный массив

const nums = [1000, 333, 9, 77, -3];

console.log(nums.sort()); //для всех остальных случаев необходимо параметром передать функцию сравнения

// const compFunc = (a, b) => {    // по возрастанию
// 	if (a > b) { // надо поменять местами (берем 1000 и 333)
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// };

// const compFunc = (a, b) => a - b;

console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));
console.log(nums.reverse());
// функция должна возвращать число большее или меньшее нуля

const students = [
	{
		name: "Bob",
		age: 22,
		isMarried: true,
		scores: 95
	},
	{
		name: "Alex",
		age: 24,
		isMarried: true,
		scores: 89
	},
	{
		name: "Helge",
		age: 24,
		isMarried: true,
		scores: 90
	},
	{
		name: "Nick",
		age: 20,
		isMarried: false,
		scores: 120
	},
	{
		name: "John",
		age: 19,
		isMarried: false,
		scores: 121
	},
	{
		name: "alex",
		age: 22,
		isMarried: true,
		scores: 89
	},
];

const sortStudents = (a, b) => {
	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 10;
	} else {
		return -10;
	}
};

// console.log(students.sort(sortStudents));
console.log(students.sort((a, b) => a.name.localeCompare(b.name))); //сортировка по строковым значениям

console.log(students.sort((a, b) => a.age - b.age)); //сортировка по числовым значениям

// bubble sort //!======////===///===/// сортировка пузырьком

const nums_2 = [100, 333, 999, 77, -3];
let count = 0;
let replace = 0;

for (let j = 0; j < nums_2.length - 1; j++) {
	let isSorted = true;
	for (let i = 0; i < nums_2.length - 1 - j; i++) {
		count++;
		if (nums_2[i] > nums_2[i + 1]) {
			replace++;
			// let temp = nums_2[i + 1];
			// nums_2[i + 1] = nums_2[i];
			// nums_2[i] = temp;
			isSorted = false;
			[nums_2[i], nums_2[i + 1]] = [nums_2[i + 1], nums_2[i]]
		}
	}
	if (isSorted) break;
}



console.log(count);
console.log(replace);
console.log(nums_2);

