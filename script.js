//примитивы
//number, string, null, undefined, NaN, Symbol, Bigint

//объекты
//object, array => данные
//function

//-более сложная структура
//=имеют свойства и методы
//-ссылочный тип данных

const user1 = { //user1 - ссылка на ячейку в оперативной памяти памяти
	name: 'Bob',
	age: 24,
	isStudent: false
}; //литерал объекта


// const user2 = user1; // две ссылки на один и тот же объект

// user2.name = 'Alex';
// console.log(user1.name);

// const user2Copy = {
// 	name: user1.name,
// 	age: user1.age,
// 	isStudent: user1.isStudent
// }; //литерал объекта

// console.log(user1 === user2Copy); //false

const user1Copy = { ...user1 };//spread - оператор

user1Copy.name = 'Alex';
console.log(user1);
console.log(user1Copy);

const users = [
	{
		id: 1,
		name: "Bob",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}

	},
	{
		id: 2,
		name: "Alex",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}
	},
	{
		id: 3,
		name: "Ann",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}
	},
	{
		id: 4,
		name: "Donald",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}
	},
];

const users2 = [
	{
		id: 1,
		name: "Bob",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}

	},
	{
		id: 2,
		name: "Alex",
		isStudent: true,
		address: {
			country: "Sudan",
			city: "Hartum",
		}
	}
];



//! имутабельная работа с данными - нужна реакту для перерисовки 
//! делаем копию . вносим изменения . используем копию с изменеиями

const userCopy = [...users];
//console.log(userCopy === users);
userCopy.pop();
console.log(users);
console.log(userCopy);
// Create Read Update Delete ===C(R)UD 

const newUser = {
	id: 5,
	name: 'John',
	isStudent: true
};

const addUsers = [...users, newUser];//добавляем нового юзера в массив

console.log(addUsers);

const concatUsers = [...users, ...users2]; //добавляем два массива в новую переменную
console.log(concatUsers);

const upD1Users = addUsers.map(user => {
	if (user.name === 'John') {
		return { ...user, isStudent: false }; //меняем isStudent: false
	} else {
		return user;
	}
});

console.log(upD1Users);

const upd2Users = upD1Users.map(user => ({ ...user, isMarried: true })); // добавляем isMarried: true
console.log(upd2Users);

const delUser = upd2Users.filter(user => user.id !== 5);//удаляем юзера с id = 5
console.log(delUser);
